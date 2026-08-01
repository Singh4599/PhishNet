"use client";

/**
 * components/HeroSection.tsx
 *
 * Full-impact hero with:
 * - Animated CSS gradient mesh background (no JS, no canvas)
 * - Cinematic headline with gradient text
 * - Floating threat badges
 * - Trust indicators
 */

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(4rem, 10vw, 7rem)",
        paddingBottom: "clamp(2rem, 5vw, 4rem)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Animated gradient orbs ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Primary violet orb */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(124,107,248,0.15) 0%, transparent 70%)",
            animation: "glow-pulse 4s ease-in-out infinite",
          }}
        />
        {/* Cyan orb left */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "-5%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)",
            animation: "glow-pulse 6s ease-in-out infinite reverse",
          }}
        />
        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.3125rem 0.875rem",
            border: "1px solid var(--glass-border-2)",
            borderRadius: "var(--radius-pill)",
            background: "var(--glass)",
            backdropFilter: "blur(10px)",
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ fontSize: "0.5rem", animation: "pulse-dot 2s infinite" }} aria-hidden="true">●</span>
          <span className="label-upper-primary" style={{ fontSize: "0.6875rem" }}>
            AI-Powered Phishing Defence · Gemini + Rule Engine
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}
        >
          <span className="gradient-text">
            Know before
            <br />
            you click.
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            color: "var(--text-2)",
            lineHeight: 1.7,
            maxWidth: "500px",
            marginInline: "auto",
            marginBottom: "2.5rem",
          }}
        >
          Paste any suspicious email, message, or URL.
          PhishNet runs <strong style={{ color: "var(--text-1)", fontWeight: 600 }}>8 deterministic rules</strong> then
          sends to <strong style={{ color: "var(--text-1)", fontWeight: 600 }}>Gemini AI</strong> — results in seconds.
        </p>

        {/* Floating threat badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.625rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { label: "Phishing", color: "var(--danger)", bg: "var(--danger-bg)", border: "var(--danger-border)" },
            { label: "Brand Impersonation", color: "var(--warning)", bg: "var(--warning-bg)", border: "var(--warning-border)" },
            { label: "Credential Harvesting", color: "var(--danger)", bg: "var(--danger-bg)", border: "var(--danger-border)" },
            { label: "Urgency Manipulation", color: "var(--warning)", bg: "var(--warning-bg)", border: "var(--warning-border)" },
            { label: "URL Spoofing", color: "var(--danger)", bg: "var(--danger-bg)", border: "var(--danger-border)" },
          ].map(({ label, color, bg, border }) => (
            <span
              key={label}
              style={{
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-pill)",
                border: `1px solid ${border}`,
                backgroundColor: bg,
                fontSize: "0.75rem",
                fontWeight: 600,
                color,
                letterSpacing: "0.01em",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.75rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🔒", text: "Zero data stored" },
            { icon: "⚡", text: "Results in 3 seconds" },
            { icon: "🧠", text: "8 + AI rules" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8125rem",
                color: "var(--text-3)",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "0.875rem" }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
