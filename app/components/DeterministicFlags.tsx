/**
 * components/DeterministicFlags.tsx
 * Rule-based check results — one row per triggered flag, plus empty state.
 */

import type { DeterministicFlag } from "@/lib/types";

interface Props {
  flags: DeterministicFlag[];
}

export default function DeterministicFlags({ flags }: Props) {
  return (
    <div>
      <p className="label-upper" style={{ marginBottom: "0.875rem" }}>
        Rule-based checks
      </p>

      {flags.length === 0 ? (
        <div
          style={{
            padding: "0.875rem 1rem",
            border: "1px solid var(--color-border)",
            borderRadius: "0.5rem",
            backgroundColor: "var(--color-safe-bg)",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: "1rem" }}>✓</span>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-safe)",
              fontWeight: 500,
            }}
          >
            No structural security flags were triggered.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {flags.map((flag) => (
            <div
              key={flag.id}
              style={{
                padding: "0.875rem 1rem",
                border: "1px solid var(--color-border)",
                borderRadius: "0.5rem",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  marginBottom: flag.evidence || flag.description ? "0.375rem" : 0,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {flag.name}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-warning)",
                    backgroundColor: "var(--color-warning-bg)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "999px",
                    border: "1px solid var(--color-warning)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  +{flag.weight}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.55,
                  marginBottom: flag.evidence ? "0.375rem" : 0,
                }}
              >
                {flag.description}
              </p>

              {flag.evidence && (
                <code
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-danger)",
                    backgroundColor: "var(--color-danger-bg)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    wordBreak: "break-all",
                    display: "inline-block",
                  }}
                >
                  {flag.evidence}
                </code>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
