/**
 * components/TrustStrip.tsx
 * Three trust indicator pills shown below the input panel.
 */

const ITEMS = [
  {
    icon: "🔒",
    title: "No content stored",
    description: "Your submissions are processed in memory and never persisted.",
  },
  {
    icon: "⚡",
    title: "One shared engine",
    description: "Web app and Chrome Extension use the same analysis endpoint.",
  },
  {
    icon: "🧠",
    title: "AI + rule-based",
    description: "Gemini AI and deterministic checks work together for accuracy.",
  },
];

export default function TrustStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "0.875rem",
        marginTop: "1.5rem",
      }}
    >
      {ITEMS.map((item) => (
        <div
          key={item.title}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            padding: "0.875rem 1rem",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "0.625rem",
          }}
        >
          <span
            style={{ fontSize: "1.125rem", flexShrink: 0, lineHeight: 1.4 }}
            aria-hidden="true"
          >
            {item.icon}
          </span>
          <div>
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.125rem",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
