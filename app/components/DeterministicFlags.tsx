"use client";

/**
 * components/DeterministicFlags.tsx — Light theme engine checks
 */

import type { DeterministicFlag } from "@/lib/types";

interface Props {
  flags: DeterministicFlag[];
}

export default function DeterministicFlags({ flags }: Props) {
  if (flags.length === 0) {
    return (
      <div style={{ padding: "1.25rem" }}>
        <p className="label-upper" style={{ marginBottom: "1rem" }}>Engine Checks</p>
        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--bg-3)",
            border: "1px dashed var(--glass-border-2)",
            borderRadius: "0.5rem",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "0.875rem", color: "var(--text-3)" }}>
            Zero deterministic risk patterns found.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "1.25rem" }}>
      <p className="label-upper" style={{ marginBottom: "1rem" }}>Engine Checks</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {flags.map((flag, i) => (
          <div
            key={flag.id}
            style={{
              padding: "1rem",
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--glass-border)",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              animation: `fadeIn 0.3s ease ${i * 0.1}s both`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-1)" }}>
                {flag.name}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--danger)",
                  backgroundColor: "var(--danger-bg)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "var(--radius-pill)",
                  fontVariantNumeric: "tabular-nums",
                  border: "1px solid var(--danger-border)",
                }}
              >
                +{flag.weight}
              </span>
            </div>
            
            <p style={{ fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              {flag.description}
            </p>
            
            {flag.evidence && (
              <code
                style={{
                  display: "block",
                  padding: "0.5rem 0.75rem",
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--glass-border-2)",
                  borderRadius: "0.25rem",
                  color: "var(--text-1)",
                  marginTop: "0.25rem",
                  overflowWrap: "break-word",
                  wordBreak: "break-all",
                }}
              >
                {flag.evidence}
              </code>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
