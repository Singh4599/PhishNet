"use client";

/**
 * components/RiskGauge.tsx — Animated light risk gauge
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

  const fillShadow =
    verdict === "Dangerous" ? "rgba(220,38,38,0.3)" :
    verdict === "Suspicious" ? "rgba(217,119,6,0.3)" :
    "rgba(5,150,105,0.3)";

  return (
    <div
      style={{
        padding: "1.5rem",
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
          height: "10px",
          borderRadius: "999px",
          background: "var(--bg-3)",
          overflow: "visible",
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
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
            boxShadow: mounted ? `0 2px 8px ${fillShadow}` : "none",
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
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffffff",
            border: `3px solid ${fillColor}`,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
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
          marginTop: "0.875rem",
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
      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--text-2)", fontWeight: 500 }}>
        Score:{" "}
        <strong style={{ color: fillColor, fontVariantNumeric: "tabular-nums", fontWeight: 700 }}>{risk_score}</strong>
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
