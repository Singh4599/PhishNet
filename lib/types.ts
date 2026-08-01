/**
 * lib/types.ts
 *
 * Shared TypeScript interfaces used across the web app and API route.
 * The extension consumes the same JSON shape at runtime (no types there).
 *
 * IMPORTANT: Do not import anything here — this file must remain
 * a pure type definition module with zero side effects.
 */

// ─── Input ────────────────────────────────────────────────────────────────────

/** The two modes of analysis the user can submit. */
export type AnalysisType = "text" | "url";

// ─── Verdict ──────────────────────────────────────────────────────────────────

/**
 * The three verdict tiers.
 * Derived from the final merged risk score, NOT from Gemini's raw verdict.
 * Safe: 0–29 | Suspicious: 30–69 | Dangerous: 70–100
 */
export type Verdict = "Safe" | "Suspicious" | "Dangerous";

// ─── Deterministic engine ─────────────────────────────────────────────────────

/**
 * A single flag raised by the local rule-based engine.
 * Each flag has a stable ID so the UI can key on it reliably.
 */
export interface DeterministicFlag {
  /** Stable kebab-case ID, e.g. "ip-based-url" */
  id: string;
  /** Human-readable name, e.g. "IP-based URL" */
  name: string;
  /** Plain-English explanation of why this is suspicious */
  description: string;
  /** Positive integer added to the final risk score */
  weight: number;
  /** Optional: the specific snippet that triggered the flag */
  evidence?: string;
}

// ─── Gemini AI layer ──────────────────────────────────────────────────────────

/** A single social-engineering technique identified by Gemini. */
export interface TechniqueDetected {
  /** Short technique name, e.g. "Urgency", "Brand impersonation" */
  name: string;
  /** Plain-English explanation referencing the actual content */
  explanation: string;
}

/** Gemini's brand impersonation assessment. */
export interface BrandImpersonation {
  /** True when Gemini identifies a likely impersonation attempt */
  detected: boolean;
  /** Brand being impersonated, or null when none detected */
  brand: string | null;
  /** Specific textual clue, or null when none detected */
  giveaway: string | null;
}

/**
 * The raw analysis output from Gemini before merging with deterministic scores.
 * The API route validates and normalises this before using it.
 */
export interface GeminiAnalysis {
  /** Gemini's raw risk estimate 0–100 */
  risk_score: number;
  /** Gemini's own verdict — will be overridden by the merged verdict */
  verdict: Verdict;
  /** All detected techniques (may be empty) */
  techniques_detected: TechniqueDetected[];
  /** Brand impersonation details */
  brand_impersonation: BrandImpersonation;
  /** 3–4 sentence educational consequence narrative */
  attack_simulation: string;
  /** Actionable, content-specific recommendations */
  recommendations: string[];
}

// ─── Final merged result ──────────────────────────────────────────────────────

/**
 * The complete analysis returned by POST /api/analyze.
 * This is the single source of truth consumed by both the web app and extension.
 */
export interface FinalAnalysis {
  /** Merged final risk score: clamp(gemini_score + deterministic_score, 0, 100) */
  risk_score: number;
  /** Gemini's original risk estimate before deterministic adjustment */
  gemini_risk_score: number;
  /** Sum of all triggered deterministic flag weights */
  deterministic_score: number;
  /**
   * Final verdict re-derived from the merged score.
   * ≥70 → Dangerous | 30–69 → Suspicious | <30 → Safe
   */
  verdict: Verdict;
  /** Techniques detected by Gemini */
  techniques_detected: TechniqueDetected[];
  /** Brand impersonation from Gemini */
  brand_impersonation: BrandImpersonation;
  /** Educational attack consequence narrative from Gemini */
  attack_simulation: string;
  /** Actionable recommendations from Gemini */
  recommendations: string[];
  /** All flags raised by the deterministic engine */
  deterministic_flags: DeterministicFlag[];
  /** Whether the submission was text or a URL */
  analyzed_type: AnalysisType;
}

// ─── API shapes ───────────────────────────────────────────────────────────────

/** Shape of the POST /api/analyze request body. */
export interface AnalyzeRequest {
  content: string;
  type: AnalysisType;
}

/** Shape of an error response from POST /api/analyze. */
export interface AnalyzeErrorResponse {
  error: string;
}
