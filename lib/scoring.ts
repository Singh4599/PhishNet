/**
 * lib/scoring.ts
 *
 * Merges the Gemini AI risk score with the sum of deterministic flag weights
 * to produce a single, final risk assessment.
 *
 * Formula:
 *   final_score = clamp(gemini_score + sum(flag_weights), 0, 100)
 *
 * The final verdict is ALWAYS re-derived from the merged score.
 * This prevents Gemini from underestimating obvious structural threats
 * that the deterministic engine has already flagged.
 *
 * Verdict thresholds:
 *   ≥ 70 → Dangerous
 *   ≥ 30 → Suspicious
 *   < 30 → Safe
 */

import type {
  AnalysisType,
  DeterministicFlag,
  FinalAnalysis,
  GeminiAnalysis,
  Verdict,
} from "./types";

// ─── Main merge function ──────────────────────────────────────────────────────

/**
 * Merges Gemini analysis with deterministic flags into a final result.
 *
 * @param gemini              - Validated output from callGemini()
 * @param deterministicFlags  - Flags from runDeterministicChecks()
 * @param analyzedType        - "text" or "url" from the original request
 * @returns FinalAnalysis — the complete, merged response shape
 */
export function mergeScores(
  gemini: GeminiAnalysis,
  deterministicFlags: DeterministicFlag[],
  analyzedType: AnalysisType
): FinalAnalysis {
  const gemini_risk_score = gemini.risk_score;

  const deterministic_score = deterministicFlags.reduce(
    (sum, flag) => sum + flag.weight,
    0
  );

  const risk_score = clamp(gemini_risk_score + deterministic_score, 0, 100);

  // Final verdict is always derived from merged score (overrides Gemini's own)
  const verdict: Verdict = deriveVerdict(risk_score);

  return {
    // Merged scores
    risk_score,
    gemini_risk_score,
    deterministic_score,
    // Verdict from merged score
    verdict,
    // All Gemini fields pass through unchanged
    techniques_detected: gemini.techniques_detected,
    brand_impersonation:  gemini.brand_impersonation,
    attack_simulation:    gemini.attack_simulation,
    recommendations:      gemini.recommendations,
    // Deterministic flags
    deterministic_flags: deterministicFlags,
    // Source type
    analyzed_type: analyzedType,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Clamp a value to [min, max] inclusive */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Derive verdict from a final merged score */
function deriveVerdict(score: number): Verdict {
  if (score >= 70) return "Dangerous";
  if (score >= 30) return "Suspicious";
  return "Safe";
}
