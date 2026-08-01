/**
 * app/api/analyze/route.ts
 *
 * POST /api/analyze — PhishNet hybrid phishing analysis endpoint.
 *
 * Accepts:  { content: string, type: "text" | "url" }
 * Returns:  FinalAnalysis JSON
 *
 * This route is the single source of truth used by both the web app
 * and the Chrome extension. All analysis logic lives in lib/.
 *
 * SECURITY REQUIREMENTS (must never be violated):
 *  - GEMINI_API_KEY never leaves this server-side file
 *  - No raw error details, stack traces, or API internals returned to client
 *  - All user input is validated before reaching Gemini or the deterministic engine
 *  - User content is never stored, logged in full, or rendered
 *
 * CORS:
 *  - Allows the deployed Vercel origin and Chrome extension origins
 *  - OPTIONS preflight is handled explicitly
 */

import { type NextRequest, NextResponse } from "next/server";
import { validateRequest } from "@/lib/validation";
import { runDeterministicChecks } from "@/lib/deterministicChecks";
import { callGemini, GeminiUnavailableError } from "@/lib/gemini";
import { mergeScores } from "@/lib/scoring";

// ─── CORS headers ─────────────────────────────────────────────────────────────

/**
 * CORS header set.
 * We allow all origins here because:
 *  1. This API has no authentication or cookies
 *  2. The Chrome extension uses a chrome-extension:// origin that varies per installation
 *  3. All security is enforced via server-side input validation, not CORS
 *
 * If authentication is ever added, revisit this to restrict to specific origins.
 */
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
} as const;

// ─── Rate limiting (basic in-memory, demo only) ───────────────────────────────

/** Simple sliding-window rate limiter — resets on server restart (stateless demo) */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 20;         // requests
const RATE_LIMIT_WINDOW_MS = 60_000; // per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true; // allowed
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false; // blocked
  }

  entry.count++;
  return true; // allowed
}

// ─── OPTIONS (CORS preflight) ─────────────────────────────────────────────────

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// ─── POST /api/analyze ────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── Rate limit ──────────────────────────────────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return errorResponse(429, "Too many requests. Please wait a moment and try again.", CORS_HEADERS);
  }

  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse(400, "Request body must be valid JSON.", CORS_HEADERS);
  }

  // ── Validate ────────────────────────────────────────────────────────────────
  const validation = validateRequest(body);
  if (!validation.ok) {
    return errorResponse(validation.status, validation.error, CORS_HEADERS);
  }

  const { content, type } = validation.data;

  // ── Run deterministic checks (fast, local, no network) ─────────────────────
  const deterministicFlags = runDeterministicChecks(content, type);

  // ── Call Gemini (server-side, key never exposed) ───────────────────────────
  let geminiAnalysis;
  try {
    geminiAnalysis = await callGemini(content, type);
  } catch (err: unknown) {
    if (err instanceof GeminiUnavailableError) {
      // API key missing or Gemini service down
      return errorResponse(
        503,
        "The AI analysis service is temporarily unavailable. Please try again.",
        CORS_HEADERS
      );
    }
    // Gemini returned unparseable/invalid response
    // Still safe to return the deterministic result with a degraded Gemini score
    console.error("[PhishNet] Gemini response error:", err instanceof Error ? err.message : "unknown");
    return errorResponse(
      500,
      "The analysis could not be completed reliably. Please try again.",
      CORS_HEADERS
    );
  }

  // ── Merge scores ────────────────────────────────────────────────────────────
  const finalAnalysis = mergeScores(geminiAnalysis, deterministicFlags, type);

  // ── Return ──────────────────────────────────────────────────────────────────
  return NextResponse.json(finalAnalysis, {
    status: 200,
    headers: CORS_HEADERS,
  });
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function errorResponse(
  status: number,
  error: string,
  headers: Record<string, string>
): NextResponse {
  return NextResponse.json({ error }, { status, headers });
}
