"use client";

/**
 * components/BrandImpersonation.tsx — Light theme brand warning
 */

import type { BrandImpersonation as BrandImpersonationType } from "@/lib/types";

interface Props {
  data: BrandImpersonationType;
}

export default function BrandImpersonation({ data }: Props) {
  if (!data.detected) return null;

  return (
    <div
      style={{
        padding: "1.25rem",
        border: "1px solid var(--danger-border)",
        borderRadius: "0.625rem",
        backgroundColor: "var(--danger-bg)",
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        animation: "fadeUp 0.4s ease-out 0.2s both",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "var(--danger)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(220,38,38,0.3)",
        }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div>
        <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--danger)", marginBottom: "0.375rem" }}>
          Brand Impersonation Detected
        </h4>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-1)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
          This content appears to be impersonating <strong>{data.brand}</strong>.
        </p>
        <div
          style={{
            padding: "0.75rem",
            backgroundColor: "rgba(255,255,255,0.6)",
            borderLeft: "3px solid var(--danger)",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--text-2)", fontStyle: "italic" }}>
            "{data.giveaway}"
          </p>
        </div>
      </div>
    </div>
  );
}
