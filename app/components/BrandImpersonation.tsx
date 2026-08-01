/**
 * components/BrandImpersonation.tsx
 * Only renders when brand_impersonation.detected === true.
 */

import type { BrandImpersonation as BrandImpersonationType } from "@/lib/types";

interface Props {
  brand_impersonation: BrandImpersonationType;
}

export default function BrandImpersonation({ brand_impersonation }: Props) {
  if (!brand_impersonation.detected) return null;

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid var(--color-danger)",
        borderRadius: "0.5rem",
        backgroundColor: "var(--color-danger-bg)",
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
      }}
    >
      <span
        style={{ fontSize: "1.125rem", flexShrink: 0, lineHeight: 1.3 }}
        aria-hidden="true"
      >
        🎭
      </span>
      <div>
        <p className="label-upper" style={{ marginBottom: "0.25rem", color: "var(--color-danger)" }}>
          Possible impersonation
        </p>
        {brand_impersonation.brand && (
          <p
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              marginBottom: "0.25rem",
            }}
          >
            {brand_impersonation.brand}
          </p>
        )}
        {brand_impersonation.giveaway && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.5,
            }}
          >
            {brand_impersonation.giveaway}
          </p>
        )}
      </div>
    </div>
  );
}
