"use client";

/**
 * components/ResultCard.tsx
 *
 * Container that renders the complete analysis result in the required order:
 * 1. VerdictHeader
 * 2. RiskGauge
 * 3. Score Breakdown (hybrid: Gemini + deterministic)
 * 4. Brand Impersonation (conditional)
 * 5. Techniques Detected
 * 6. Rule-based Flags
 * 7. Attack Simulation
 * 8. Recommendations
 * 9. Reset button
 *
 * SECURITY: All data rendered via textContent equivalent props.
 * No dangerouslySetInnerHTML anywhere in this tree.
 */

import type { FinalAnalysis } from "@/lib/types";
import VerdictHeader from "./VerdictHeader";
import RiskGauge from "./RiskGauge";
import TechniqueCard from "./TechniqueCard";
import BrandImpersonation from "./BrandImpersonation";
import DeterministicFlags from "./DeterministicFlags";
import AttackSimulation from "./AttackSimulation";
import RecommendationList from "./RecommendationList";

interface Props {
  analysis: FinalAnalysis;
  onReset: () => void;
}

export default function ResultCard({ analysis, onReset }: Props) {
  return (
    <div
      id="result-card"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        animation: "resultFadeIn 0.4s ease",
      }}
    >
      {/* 1. Verdict header */}
      <VerdictHeader analysis={analysis} />

      {/* 2. Risk gauge */}
      <RiskGauge analysis={analysis} />

      {/* 3. Hybrid score breakdown */}
      <div
        style={{
          padding: "1.25rem",
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-background)",
        }}
      >
        <p className="label-upper" style={{ marginBottom: "0.875rem" }}>
          Score breakdown
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            {
              label: "Gemini AI context analysis",
              value: analysis.gemini_risk_score,
              color: "var(--color-primary)",
            },
            {
              label: "Rule-based security signals",
              value: `+${analysis.deterministic_score}`,
              color: "var(--color-warning)",
            },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {value}
              </span>
            </div>
          ))}

          {/* Divider + Final */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.375rem",
              border: `1px solid ${
                analysis.verdict === "Dangerous"
                  ? "var(--color-danger)"
                  : analysis.verdict === "Suspicious"
                  ? "var(--color-warning)"
                  : "var(--color-safe)"
              }`,
              backgroundColor:
                analysis.verdict === "Dangerous"
                  ? "var(--color-danger-bg)"
                  : analysis.verdict === "Suspicious"
                  ? "var(--color-warning-bg)"
                  : "var(--color-safe-bg)",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
              }}
            >
              Final risk score
            </span>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color:
                  analysis.verdict === "Dangerous"
                    ? "var(--color-danger)"
                    : analysis.verdict === "Suspicious"
                    ? "var(--color-warning)"
                    : "var(--color-safe)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {analysis.risk_score}
            </span>
          </div>
        </div>
      </div>

      {/* Result sections */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {/* 4. Brand impersonation (conditional) */}
        <BrandImpersonation brand_impersonation={analysis.brand_impersonation} />

        {/* 5. Techniques detected */}
        {analysis.techniques_detected.length > 0 && (
          <div>
            <p className="label-upper" style={{ marginBottom: "0.875rem" }}>
              Techniques detected
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {analysis.techniques_detected.map((t, i) => (
                <TechniqueCard key={i} technique={t} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* No techniques message for safe content */}
        {analysis.techniques_detected.length === 0 && (
          <div
            style={{
              padding: "0.75rem 1rem",
              border: "1px solid var(--color-border)",
              borderRadius: "0.5rem",
              backgroundColor: "var(--color-background)",
            }}
          >
            <p className="label-upper" style={{ marginBottom: "0.25rem" }}>
              Techniques detected
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
              No social engineering techniques were identified.
            </p>
          </div>
        )}

        {/* 6. Rule-based flags */}
        <DeterministicFlags flags={analysis.deterministic_flags} />

        {/* 7. Attack simulation */}
        <AttackSimulation attack_simulation={analysis.attack_simulation} />

        {/* 8. Recommendations */}
        <RecommendationList recommendations={analysis.recommendations} />
      </div>

      {/* 9. Reset button */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderTop: "1px solid var(--color-border)",
          backgroundColor: "var(--color-background)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          id="reset-button"
          onClick={onReset}
          style={{
            padding: "0.5625rem 1.25rem",
            borderRadius: "var(--radius-btn)",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--color-primary)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-primary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--color-border)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-text-secondary)";
          }}
        >
          ← Analyse another
        </button>
      </div>

      <style>{`
        @keyframes resultFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
