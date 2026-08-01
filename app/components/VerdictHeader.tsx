/**
 * components/VerdictHeader.tsx
 * Displays the verdict badge, one-liner summary and score.
 */

import type { FinalAnalysis } from "@/lib/types";

interface Props {
  analysis: Pick<FinalAnalysis, "verdict" | "risk_score">;
}

const VERDICT_CONFIG = {
  Safe: {
    bg: "var(--color-safe-bg)",
    border: "var(--color-safe)",
    color: "var(--color-safe)",
    icon: "✓",
    summary: "No significant phishing indicators were detected.",
  },
  Suspicious: {
    bg: "var(--color-warning-bg)",
    border: "var(--color-warning)",
    color: "var(--color-warning)",
    icon: "⚠",
    summary: "Warning signs are present. Proceed with caution.",
  },
  Dangerous: {
    bg: "var(--color-danger-bg)",
    border: "var(--color-danger)",
    color: "var(--color-danger)",
    icon: "✕",
    summary: "Strong phishing or fraud indicators detected. Do not interact.",
  },
};

export default function VerdictHeader({ analysis }: Props) {
  const cfg = VERDICT_CONFIG[analysis.verdict];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1.25rem",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: cfg.bg,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {/* Label */}
        <span className="label-upper">Analysis result</span>

        {/* Verdict badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: cfg.color,
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {cfg.icon}
          </span>
          <span
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: cfg.color,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {analysis.verdict}
          </span>
        </div>

        {/* One-liner */}
        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.5,
          }}
        >
          {cfg.summary}
        </p>
      </div>

      {/* Score */}
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: "2.75rem",
            fontWeight: 700,
            color: cfg.color,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontVariantNumeric: "tabular-nums",
          }}
          aria-label={`Risk score: ${analysis.risk_score} out of 100`}
        >
          {analysis.risk_score}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
            fontWeight: 500,
          }}
        >
          / 100
        </span>
      </div>
    </div>
  );
}
