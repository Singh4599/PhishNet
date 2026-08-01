/**
 * components/RecommendationList.tsx
 * Ordered list of actionable recommendations from Gemini.
 */

interface Props {
  recommendations: string[];
}

export default function RecommendationList({ recommendations }: Props) {
  if (recommendations.length === 0) return null;

  return (
    <div>
      <p className="label-upper" style={{ marginBottom: "0.875rem" }}>
        Recommendations
      </p>
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {recommendations.map((rec, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "0.75rem 0.875rem",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "0.5rem",
            }}
          >
            {/* Number badge */}
            <span
              aria-hidden="true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
                color: "#fff",
                fontSize: "0.6875rem",
                fontWeight: 700,
                flexShrink: 0,
                marginTop: "1px",
              }}
            >
              {i + 1}
            </span>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-primary)",
                lineHeight: 1.6,
              }}
            >
              {rec}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
