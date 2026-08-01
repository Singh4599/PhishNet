"use client";

/**
 * components/VerdictHeader.tsx — Light premium verdict display
 */

import type { FinalAnalysis } from "@/lib/types";

interface Props {
  analysis: Pick<FinalAnalysis, "verdict" | "risk_score">;
}

const CFG = {
  Safe: {
    color: "var(--safe)",
    bg: "var(--safe-bg)",
    border: "var(--safe-border)",
    icon: "✓",
    summary: "No significant phishing indicators detected.",
  },
  Suspicious: {
    color: "var(--warning)",
    bg: "var(--warning-bg)",
    border: "var(--warning-border)",
    icon: "⚠",
    summary: "Warning signs present. Proceed with caution.",
  },
  Dangerous: {
    color: "var(--danger)",
    bg: "var(--danger-bg)",
    border: "var(--danger-border)",
    icon: "✕",
    summary: "Strong phishing indicators. Do not interact.",
  },
};

export default function VerdictHeader({ analysis }: Props) {
  const cfg = CFG[analysis.verdict];
  return (
    <div
      style={{
        padding: "1.5rem",
        borderBottom: "1px solid var(--glass-border)",
        background: cfg.bg,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "1.25rem",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <span className="label-upper" style={{ color: "var(--text-3)" }}>Analysis result</span>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Verdict icon */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: cfg.color,
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 700,
              boxShadow: `0 4px 12px ${cfg.color}40`,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {cfg.icon}
          </span>
          <span
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: cfg.color,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            {analysis.verdict}
          </span>
        </div>

        <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.5, fontWeight: 500 }}>
          {cfg.summary}
        </p>
      </div>

      {/* Score */}
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: "3.5rem",
            fontWeight: 800,
            color: cfg.color,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontVariantNumeric: "tabular-nums",
          }}
          aria-label={`Risk score: ${analysis.risk_score} out of 100`}
        >
          {analysis.risk_score}
        </span>
        <span style={{ fontSize: "0.875rem", color: "var(--text-3)", fontWeight: 600 }}>/ 100</span>
      </div>
    </div>
  );
}
