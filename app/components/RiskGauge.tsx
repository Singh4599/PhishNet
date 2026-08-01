"use client";

/**
 * components/RiskGauge.tsx
 * Horizontal risk bar with Safe/Warning/Danger zones, animated fill, and marker.
 */

import type { FinalAnalysis } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

interface Props {
  analysis: Pick<FinalAnalysis, "risk_score" | "verdict">;
}

export default function RiskGauge({ analysis }: Props) {
  const { risk_score, verdict } = analysis;
  const [mounted, setMounted] = useState(false);

  // Animate bar fill after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const fillColor =
    verdict === "Dangerous"
      ? "var(--color-danger)"
      : verdict === "Suspicious"
      ? "var(--color-warning)"
      : "var(--color-safe)";

  return (
    <div style={{ padding: "1.25rem", borderBottom: "1px solid var(--color-border)" }}>
      <p
        className="label-upper"
        style={{ marginBottom: "0.875rem" }}
      >
        Risk level
      </p>

      {/* Bar track */}
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
          overflow: "visible",
          background: `linear-gradient(to right,
            var(--color-safe-bg) 0%,
            var(--color-safe-bg) 30%,
            var(--color-warning-bg) 30%,
            var(--color-warning-bg) 70%,
            var(--color-danger-bg) 70%,
            var(--color-danger-bg) 100%)`,
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Fill bar */}
        <div
          className="risk-bar-fill"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            borderRadius: "999px",
            backgroundColor: fillColor,
            width: mounted ? `${risk_score}%` : "0%",
            opacity: 0.85,
          }}
          aria-hidden="true"
        />

        {/* Marker */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${risk_score}%`,
            transform: "translate(-50%, -50%)",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: fillColor,
            border: "2px solid var(--color-surface)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            transition: "left 0.8s cubic-bezier(0.4,0,0.2,1)",
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
          marginTop: "0.5rem",
        }}
      >
        {[
          { label: "Safe", color: "var(--color-safe)" },
          { label: "Suspicious", color: "var(--color-warning)" },
          { label: "Dangerous", color: "var(--color-danger)" },
        ].map(({ label, color }) => (
          <span
            key={label}
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Caption */}
      <p
        style={{
          marginTop: "0.625rem",
          fontSize: "0.8125rem",
          color: "var(--color-text-secondary)",
        }}
      >
        Score:{" "}
        <strong style={{ color: fillColor }}>{risk_score}</strong>
        /100 —{" "}
        {risk_score < 30
          ? "Low risk. Content appears legitimate."
          : risk_score < 70
          ? "Moderate risk. Review carefully before acting."
          : "High risk. Strong indicators of phishing or fraud."}
      </p>
    </div>
  );
}
