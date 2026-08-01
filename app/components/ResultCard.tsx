"use client";

/**
 * components/ResultCard.tsx — Light theme main results container
 */

import { useEffect, useRef } from "react";
import type { FinalAnalysis } from "@/lib/types";
import VerdictHeader from "./VerdictHeader";
import RiskGauge from "./RiskGauge";
import TechniqueCard from "./TechniqueCard";
import BrandImpersonation from "./BrandImpersonation";
import DeterministicFlags from "./DeterministicFlags";
import RecommendationList from "./RecommendationList";

interface Props {
  analysis: FinalAnalysis;
  onReset: () => void;
}

export default function ResultCard({ analysis, onReset }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to result on mount
  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="glass-card"
      style={{
        overflow: "hidden",
        animation: "fadeUp 0.5s var(--ease-out-expo) forwards",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03)",
        backgroundColor: "var(--bg-2)",
      }}
      aria-label="Analysis Results"
    >
      <VerdictHeader analysis={analysis} />
      <RiskGauge analysis={analysis} />

      {/* Social Engineering (Gemini) */}
      <div style={{ padding: "1.25rem", borderBottom: "1px solid var(--glass-border)", backgroundColor: "var(--bg)" }}>
        <p className="label-upper" style={{ marginBottom: "1rem" }}>Social Engineering Tactics</p>
        
        {analysis.brand_impersonation?.detected && (
          <div style={{ marginBottom: "1rem" }}>
            <BrandImpersonation data={analysis.brand_impersonation} />
          </div>
        )}

        {analysis.techniques_detected.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {analysis.techniques_detected.map((t, i) => (
              <TechniqueCard key={i} index={i} technique={t} />
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "0.875rem", color: "var(--text-3)", fontStyle: "italic" }}>
            No specific manipulation techniques detected.
          </p>
        )}
      </div>

      <DeterministicFlags flags={analysis.deterministic_flags} />
      
      <div style={{ borderTop: "1px solid var(--glass-border)", backgroundColor: "var(--bg)" }}>
        <RecommendationList recommendations={analysis.recommendations} />
      </div>

      {/* Footer Actions */}
      <div
        style={{
          padding: "1.25rem",
          borderTop: "1px solid var(--glass-border)",
          backgroundColor: "var(--bg-3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "0.75rem", color: "var(--text-3)", fontWeight: 500 }}>
          Gemini Base: <span style={{ color: "var(--text-1)" }}>{analysis.gemini_risk_score}/100</span>
          {" • "}
          Engine Modifiers: <span style={{ color: "var(--text-1)" }}>+{analysis.deterministic_score}</span>
        </div>
        
        <button
          onClick={onReset}
          className="btn-ghost"
          aria-label="Start new analysis"
        >
          <span aria-hidden="true">↺</span> Start New Analysis
        </button>
      </div>
    </div>
  );
}
