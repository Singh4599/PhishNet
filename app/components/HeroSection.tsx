/**
 * components/HeroSection.tsx
 *
 * Editorial hero section:
 * - Eyebrow label
 * - H1 headline
 * - Supporting copy
 * - Two trust indicators
 */

export default function HeroSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(2.5rem, 6vw, 4.5rem)",
        paddingBottom: "clamp(2rem, 4vw, 3rem)",
        textAlign: "center",
      }}
    >
      {/* Eyebrow */}
      <p className="label-upper" style={{ marginBottom: "1.25rem" }}>
        AI-Powered Phishing Defence
      </p>

      {/* H1 */}
      <h1
        className="heading-editorial"
        style={{
          marginBottom: "1.25rem",
          maxWidth: "640px",
          marginInline: "auto",
        }}
      >
        Know before
        <br />
        <span style={{ color: "var(--color-primary)" }}>you click.</span>
      </h1>

      {/* Supporting copy */}
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "1.0625rem",
          lineHeight: 1.7,
          maxWidth: "520px",
          marginInline: "auto",
          marginBottom: "2rem",
        }}
      >
        Paste a suspicious email, message or URL. PhishNet combines Gemini AI
        with rule-based security checks to reveal hidden risk in seconds.
      </p>

      {/* Trust indicators */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.25rem",
        }}
      >
        {[
          { icon: "🔒", text: "No content stored" },
          { icon: "⚡", text: "Hybrid detection engine" },
        ].map(({ icon, text }) => (
          <div
            key={text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
            }}
          >
            <span aria-hidden="true">{icon}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
