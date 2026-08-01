/**
 * lib/deterministicChecks.ts
 *
 * Local, stateless rule-based phishing signal engine.
 * Runs independently of Gemini and contributes fixed weight scores.
 *
 * SECURITY NOTES:
 *  - Does NOT fetch, visit, or execute any submitted URLs
 *  - Does NOT render HTML — all content treated as raw text
 *  - Operates only on the string content provided
 */

import type { AnalysisType, DeterministicFlag } from "./types";

// ─── Constants ────────────────────────────────────────────────────────────────

/** TLDs associated with elevated phishing rates (signal, not proof) */
const SUSPICIOUS_TLDS = new Set([
  ".xyz", ".top", ".club", ".click", ".work",
  ".gq",  ".tk",  ".ml",  ".cf",   ".buzz",
  ".support", ".live", ".icu", ".fit", ".fun",
]);

/** Urgency / fear language that pressures the recipient to act immediately */
const URGENCY_PHRASES = [
  "verify immediately",
  "act now",
  "urgent action required",
  "account suspended",
  "account will be closed",
  "final warning",
  "within 24 hours",
  "limited time",
  "unauthorized activity",
  "your account has been locked",
  "confirm immediately",
  "immediate action",
  "access will be terminated",
  "account will be disabled",
];

/** Phrases that explicitly request sensitive credentials */
const CREDENTIAL_PHRASES = [
  "confirm your password",
  "enter your password",
  "verify your login",
  "confirm your identity",
  "enter your otp",
  "share your otp",
  "update your banking details",
  "verify your account details",
  "provide your pin",
  "enter your card number",
  "submit your credentials",
];

/**
 * Known-brand → legitimate domain mapping.
 * Conservative: only major brands with clear impersonation patterns.
 */
const BRAND_DOMAINS: Record<string, string[]> = {
  paypal:    ["paypal.com"],
  google:    ["google.com", "gmail.com", "accounts.google.com"],
  microsoft: ["microsoft.com", "live.com", "office.com", "outlook.com", "microsoftonline.com"],
  amazon:    ["amazon.com", "amazon.in", "amazon.co.uk"],
  apple:     ["apple.com", "icloud.com"],
  netflix:   ["netflix.com"],
  instagram: ["instagram.com"],
  facebook:  ["facebook.com", "fb.com", "meta.com"],
  whatsapp:  ["whatsapp.com", "whatsapp.net"],
  sbi:       ["sbi.co.in", "onlinesbi.sbi", "sbionline.com"],
  hdfc:      ["hdfcbank.com", "hdfc.com"],
  icici:     ["icicibank.com", "icici.com"],
  twitter:   ["twitter.com", "x.com"],
  linkedin:  ["linkedin.com"],
  dropbox:   ["dropbox.com"],
  zoom:      ["zoom.us"],
};

// ─── URL Extraction ───────────────────────────────────────────────────────────

/**
 * Extracts all URLs from a blob of text.
 * Handles: http/https links, www. links, URLs inside HTML anchors,
 * and URLs followed by common punctuation.
 *
 * Does NOT fetch or resolve any URL — purely string analysis.
 */
export function extractUrls(text: string): string[] {
  const found = new Set<string>();

  // Standard http/https URLs
  const httpPattern = /https?:\/\/[^\s<>"')\]]+/gi;
  let match: RegExpExecArray | null;
  while ((match = httpPattern.exec(text)) !== null) {
    found.add(stripTrailingPunctuation(match[0]));
  }

  // www. links without scheme
  const wwwPattern = /\bwww\.[a-z0-9-]+\.[a-z]{2,}[^\s<>"')\]]*/gi;
  while ((match = wwwPattern.exec(text)) !== null) {
    found.add("https://" + stripTrailingPunctuation(match[0]));
  }

  return Array.from(found);
}

/** Remove common trailing punctuation that often follows URLs in messages */
function stripTrailingPunctuation(url: string): string {
  return url.replace(/[.,;:!?'")\]]+$/, "");
}

/**
 * Safely parse a URL string. Returns null if invalid.
 * NEVER fetches the URL — just parses the string structure.
 */
function safeParse(url: string): URL | null {
  try {
    const u = new URL(url.startsWith("www.") ? "https://" + url : url);
    return u;
  } catch {
    return null;
  }
}

// ─── Main Entry ───────────────────────────────────────────────────────────────

/**
 * Run all deterministic phishing checks against the submitted content.
 *
 * @param content - Raw user-submitted text or URL string
 * @param type    - Whether the submission is "text" or "url"
 * @returns Array of triggered DeterministicFlag objects (may be empty)
 */
export function runDeterministicChecks(
  content: string,
  type: AnalysisType
): DeterministicFlag[] {
  const flags: DeterministicFlag[] = [];
  const lower = content.toLowerCase();

  // Extract all URLs present in the content (regardless of input type)
  const urls = extractUrls(content);
  const parsedUrls = urls.map(safeParse).filter((u): u is URL => u !== null);

  // ── Check 1: IP-based URL ──────────────────────────────────────────────────
  checkIpBasedUrl(parsedUrls, flags);

  // ── Check 2: Excessive subdomains ─────────────────────────────────────────
  checkExcessiveSubdomains(parsedUrls, flags);

  // ── Check 3: Suspicious TLD ────────────────────────────────────────────────
  checkSuspiciousTld(parsedUrls, flags);

  // ── Check 4: Mismatched anchor text vs href ────────────────────────────────
  checkMismatchedAnchorText(content, flags);

  // ── Check 5: Urgency language ──────────────────────────────────────────────
  checkUrgencyLanguage(lower, flags);

  // ── Check 6: Credential request language ──────────────────────────────────
  checkCredentialRequest(lower, flags);

  // ── Check 7: Suspicious URL encoding ──────────────────────────────────────
  checkSuspiciousEncoding(urls, parsedUrls, flags);

  // ── Check 8: Brand-domain mismatch ────────────────────────────────────────
  checkBrandDomainMismatch(lower, parsedUrls, flags);

  return flags;
}

// ─── Check Implementations ────────────────────────────────────────────────────

/**
 * Check 1 — IP-based URL (+25)
 * Legitimate services virtually never route users to raw IP addresses.
 */
function checkIpBasedUrl(parsedUrls: URL[], flags: DeterministicFlag[]): void {
  const ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

  for (const url of parsedUrls) {
    const host = url.hostname;
    const m = host.match(ipPattern);
    if (!m) continue;

    // Validate each octet is 0–255
    const valid = [m[1], m[2], m[3], m[4]].every(
      (octet) => parseInt(octet, 10) <= 255
    );
    if (!valid) continue;

    flags.push({
      id: "ip-based-url",
      name: "IP-based URL",
      description:
        "The destination uses a raw IP address instead of a normal domain name. Legitimate services use registered domain names.",
      weight: 25,
      evidence: host,
    });
    return; // Flag once even if multiple IP URLs appear
  }
}

/**
 * Check 2 — Excessive subdomains (+15)
 * Phishers use deep subdomain nesting to embed legitimate-looking brand names.
 * Example: paypal.verify.account.attacker.com
 *
 * We parse the hostname only (not the full URL path) to avoid false positives
 * from query strings that contain dots.
 */
function checkExcessiveSubdomains(
  parsedUrls: URL[],
  flags: DeterministicFlag[]
): void {
  for (const url of parsedUrls) {
    const hostname = url.hostname;
    // Remove trailing dot (rare but valid), then count labels
    const labels = hostname.replace(/\.$/, "").split(".");
    // More than 4 labels = 3+ subdomain levels (e.g. a.b.c.example.com)
    if (labels.length > 4) {
      flags.push({
        id: "excessive-subdomains",
        name: "Excessive subdomains",
        description:
          "The URL contains an unusually deep subdomain structure. Phishing pages sometimes embed trusted brand names as subdomains to appear legitimate.",
        weight: 15,
        evidence: hostname,
      });
      return; // Flag once
    }
  }
}

/**
 * Check 3 — Suspicious TLD (+15)
 * Certain top-level domains have disproportionately high phishing rates.
 * A suspicious TLD is a weak signal on its own but meaningful in combination.
 */
function checkSuspiciousTld(
  parsedUrls: URL[],
  flags: DeterministicFlag[]
): void {
  for (const url of parsedUrls) {
    const hostname = url.hostname.toLowerCase();
    const dotParts = hostname.split(".");
    const tld = "." + dotParts[dotParts.length - 1];

    if (SUSPICIOUS_TLDS.has(tld)) {
      flags.push({
        id: "suspicious-tld",
        name: "Suspicious top-level domain",
        description: `The domain uses a top-level domain (${tld}) that is disproportionately associated with phishing and low-cost disposable websites. This is a weak signal on its own.`,
        weight: 15,
        evidence: hostname,
      });
      return; // Flag once
    }
  }
}

/**
 * Check 4 — Mismatched anchor text vs href (+25)
 * Classic phishing technique: display a trusted URL in anchor text,
 * but point the href to a malicious domain.
 *
 * We look for HTML anchor tags in the submitted content (treated as raw text).
 * We do NOT render or execute the HTML.
 */
function checkMismatchedAnchorText(
  content: string,
  flags: DeterministicFlag[]
): void {
  // Match: <a href="URL">visible-text</a>
  const anchorPattern = /<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;

  while ((match = anchorPattern.exec(content)) !== null) {
    const href = match[1].trim();
    const visibleText = match[2].replace(/<[^>]+>/g, "").trim(); // strip inner tags

    const hrefUrl = safeParse(href);
    if (!hrefUrl) continue;

    // Extract URLs from visible text
    const textUrls = extractUrls(visibleText);
    for (const textUrlStr of textUrls) {
      const textUrl = safeParse(textUrlStr);
      if (!textUrl) continue;

      // Compare root hostnames (strip www.)
      const hrefHost = hrefUrl.hostname.replace(/^www\./, "");
      const textHost = textUrl.hostname.replace(/^www\./, "");

      if (hrefHost !== textHost && textHost.length > 0) {
        flags.push({
          id: "mismatched-link-text",
          name: "Misleading link destination",
          description:
            "The link displays one domain in its text but actually points to a different destination. This is a classic phishing technique.",
          weight: 25,
          evidence: `Visible: ${textHost} → Actual: ${hrefHost}`,
        });
        return; // Flag once
      }
    }
  }
}

/**
 * Check 5 — Urgency language (+10)
 * Fear and urgency are primary psychological levers in phishing.
 * Flag fires once regardless of how many phrases match.
 * All matched phrases are included as evidence.
 */
function checkUrgencyLanguage(
  lowerContent: string,
  flags: DeterministicFlag[]
): void {
  const matched: string[] = [];

  for (const phrase of URGENCY_PHRASES) {
    if (lowerContent.includes(phrase)) {
      matched.push(phrase);
    }
  }

  if (matched.length > 0) {
    flags.push({
      id: "urgency-language",
      name: "Urgency language",
      description:
        "The content uses urgent or threatening language to pressure the recipient into acting immediately without careful consideration.",
      weight: 10,
      evidence: matched.slice(0, 3).join(", "),
    });
  }
}

/**
 * Check 6 — Credential request language (+20)
 * Explicitly requesting passwords, OTPs, or account details is a
 * strong phishing indicator regardless of context.
 */
function checkCredentialRequest(
  lowerContent: string,
  flags: DeterministicFlag[]
): void {
  const matched: string[] = [];

  for (const phrase of CREDENTIAL_PHRASES) {
    if (lowerContent.includes(phrase)) {
      matched.push(phrase);
    }
  }

  if (matched.length > 0) {
    flags.push({
      id: "credential-request",
      name: "Credential request",
      description:
        "The content explicitly asks for sensitive credentials such as passwords, PINs, or OTPs. Legitimate services rarely request these through messages.",
      weight: 20,
      evidence: matched.slice(0, 2).join(", "),
    });
  }
}

/**
 * Check 7 — Suspicious URL encoding (+10 to +20)
 * Detects obfuscation techniques that hide the true destination.
 *
 * Sub-signals (applied once per type, not stacked):
 *  - Punycode hostname (xn--) → international domain spoofing (+15)
 *  - @ in URL authority → misleading user-info prefix (+20)
 *  - Excessive percent-encoding → obfuscation (+10)
 *  - Very long URL (>300 chars) → common redirect chaining (+10)
 */
function checkSuspiciousEncoding(
  rawUrls: string[],
  parsedUrls: URL[],
  flags: DeterministicFlag[]
): void {
  for (let i = 0; i < parsedUrls.length; i++) {
    const url = parsedUrls[i];
    const raw = rawUrls[i] ?? "";

    // Punycode (international domain name spoofing)
    if (url.hostname.includes("xn--")) {
      flags.push({
        id: "suspicious-encoding",
        name: "Punycode domain",
        description:
          "The URL uses a Punycode-encoded international domain (xn--). This technique is used to create look-alike domains that visually resemble trusted brands.",
        weight: 15,
        evidence: url.hostname,
      });
      return;
    }

    // @ in the authority section (user-info trick: http://paypal.com@attacker.com)
    // URL.hostname already resolves this, but we check the raw string
    if (raw.match(/https?:\/\/[^/]*@/)) {
      flags.push({
        id: "suspicious-encoding",
        name: "Misleading @ in URL",
        description:
          "The URL contains an @ symbol before the domain. Browsers ignore everything before @ in the host section, which can hide the real destination.",
        weight: 20,
        evidence: url.hostname,
      });
      return;
    }

    // Excessive percent-encoding (>5 encoded chars)
    const percentMatches = raw.match(/%[0-9a-fA-F]{2}/g) ?? [];
    if (percentMatches.length > 5) {
      flags.push({
        id: "suspicious-encoding",
        name: "Excessive URL encoding",
        description:
          "The URL contains an unusually high number of percent-encoded characters. This can be used to obscure the real destination from security filters.",
        weight: 10,
        evidence: `${percentMatches.length} encoded sequences`,
      });
      return;
    }

    // Very long URL (>300 chars)
    if (raw.length > 300) {
      flags.push({
        id: "suspicious-encoding",
        name: "Unusually long URL",
        description:
          "The URL is unusually long. Phishing pages sometimes use long URLs to hide redirect chains or to push suspicious parts outside the visible area.",
        weight: 10,
        evidence: `${raw.length} characters`,
      });
      return;
    }
  }
}

/**
 * Check 8 — Brand-domain mismatch (+20)
 * If a well-known brand is mentioned in the text but the URLs
 * do not use that brand's official domains, flag the mismatch.
 *
 * Only fires when:
 *  a) The brand name appears in the submitted text
 *  b) At least one URL is present
 *  c) None of the URLs belong to the brand's official domains
 */
function checkBrandDomainMismatch(
  lowerContent: string,
  parsedUrls: URL[],
  flags: DeterministicFlag[]
): void {
  if (parsedUrls.length === 0) return;

  for (const [brand, legitimateDomains] of Object.entries(BRAND_DOMAINS)) {
    if (!lowerContent.includes(brand)) continue;

    // Check if any URL matches any legitimate domain for this brand
    const hasLegitUrl = parsedUrls.some((url) => {
      const host = url.hostname.replace(/^www\./, "").toLowerCase();
      return legitimateDomains.some(
        (d) => host === d || host.endsWith("." + d)
      );
    });

    if (!hasLegitUrl) {
      // There's a brand mention but no matching official URL
      const suspiciousHost = parsedUrls[0].hostname;
      flags.push({
        id: "brand-domain-mismatch",
        name: "Brand-domain mismatch",
        description: `The content references ${brand.charAt(0).toUpperCase() + brand.slice(1)} but the linked domain does not match any known official ${brand} domain. This pattern is common in brand impersonation attacks.`,
        weight: 20,
        evidence: suspiciousHost,
      });
      return; // Flag once per analysis
    }
  }
}
