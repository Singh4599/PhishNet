"use client";

/**
 * components/RiskGauge.tsx — Animated dark risk gauge
 */

import type { FinalAnalysis } from "@/lib/types";
import { useEffect, useState } from "react";

interface Props {
  analysis: Pick<FinalAnalysis, "risk_score" | "verdict">;
}

export default function RiskGauge({ analysis }: Props) {
  const { risk_score, verdict } = analysis;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fillColor =
    verdict === "Dangerous" ? "var(--danger)" :
    verdict === "Suspicious" ? "var(--warning)" :
    "var(--safe)";

  const fillGlow =
    verdict === "Dangerous" ? "rgba(248,113,113,0.5)" :
    verdict === "Suspicious" ? "rgba(251,191,36,0.5)" :
    "rgba(52,211,153,0.5)";

  return (
    <div
      style={{
        padding: "1.25rem",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <p className="label-upper" style={{ marginBottom: "1rem" }}>Risk level</p>

      {/* Track */}
      <div
        role="meter"
        aria-valuenow={risk_score}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Risk level: ${risk_score} out of 100`}
        style={{
          position: "relative",
          height: "8px",
          borderRadius: "999px",
          background: "var(--bg-3)",
          overflow: "visible",
        }}
      >
        {/* Fill */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            borderRadius: "999px",
            background: fillColor,
            width: mounted ? `${risk_score}%` : "0%",
            transition: "width 1s var(--ease-out-expo)",
            boxShadow: mounted ? `0 0 12px ${fillGlow}` : "none",
          }}
          aria-hidden="true"
        />
        {/* Marker dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${risk_score}%`,
            transform: "translate(-50%, -50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: fillColor,
            border: "2px solid var(--bg)",
            boxShadow: `0 0 0 3px ${fillGlow}, 0 2px 8px rgba(0,0,0,0.5)`,
            transition: "left 1s var(--ease-out-expo)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Zone labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.625rem",
        }}
      >
        {[
          { l: "Safe", c: "var(--safe)" },
          { l: "Suspicious", c: "var(--warning)" },
          { l: "Dangerous", c: "var(--danger)" },
        ].map(({ l, c }) => (
          <span key={l} style={{ fontSize: "0.6875rem", fontWeight: 700, color: c, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {l}
          </span>
        ))}
      </div>

      {/* Caption */}
      <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--text-2)" }}>
        Score:{" "}
        <strong style={{ color: fillColor, fontVariantNumeric: "tabular-nums" }}>{risk_score}</strong>
        /100 —{" "}
        {risk_score < 30
          ? "Content appears safe."
          : risk_score < 70
          ? "Review carefully before acting."
          : "High risk — strong phishing indicators."}
      </p>
    </div>
  );
}
