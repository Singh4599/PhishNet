/**
 * components/HowItWorks.tsx
 * 3-step explainer section.
 */

const STEPS = [
  {
    number: "01",
    title: "Submit",
    description:
      "Paste any suspicious email, text message or URL into the analysis panel.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "PhishNet runs eight deterministic security rules locally, then sends the content to Gemini for deep contextual understanding.",
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Get a merged risk score, detected techniques, brand impersonation check, and specific recommendations — all in plain language.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <p
        className="label-upper"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        How it works
      </p>
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
          marginBottom: "3rem",
        }}
      >
        Three steps to clarity
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          maxWidth: "860px",
          marginInline: "auto",
        }}
      >
        {STEPS.map((step) => (
          <div
            key={step.number}
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-card)",
              padding: "1.75rem",
            }}
          >
            <span
              style={{
                display: "block",
                fontVariantNumeric: "tabular-nums",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--color-border)",
                lineHeight: 1,
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3
              style={{
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
