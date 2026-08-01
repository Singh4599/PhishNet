"use client";

/**
 * components/RecommendationList.tsx — Light theme recommendations
 */

interface Props {
  recommendations: string[];
}

export default function RecommendationList({ recommendations }: Props) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div style={{ padding: "1.25rem" }}>
      <p className="label-upper" style={{ marginBottom: "1rem" }}>Recommended Actions</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {recommendations.map((rec, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.875rem",
              padding: "1rem",
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--glass-border)",
              borderRadius: "0.5rem",
              animation: `fadeIn 0.4s ease ${i * 0.15}s both`,
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "var(--primary-glow)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {i + 1}
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-1)", lineHeight: 1.5, paddingTop: "0.125rem" }}>
              {rec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
