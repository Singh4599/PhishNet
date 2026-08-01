/**
 * components/Header.tsx
 *
 * Global site header.
 * - Custom network logo mark (no stock icons)
 * - "PhishNet" wordmark
 * - "Hybrid AI Security" subtitle label
 * - "Engine Online" green badge
 */

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="content-width"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "0.875rem",
          paddingBottom: "0.875rem",
        }}
      >
        {/* Left: Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          {/* Custom SVG logo mark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            width={28}
            height={28}
            style={{ flexShrink: 0 }}
          >
            <line x1="16" y1="5" x2="5"  y2="21" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="16" y1="5" x2="27" y2="21" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="5"  y1="21" x2="27" y2="21" stroke="var(--color-primary)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="16" y1="5" x2="16" y2="21" stroke="var(--color-primary)" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.4"/>
            <circle cx="16" cy="5"  r="3"   fill="var(--color-primary)"/>
            <circle cx="5"  cy="21" r="2.5" fill="var(--color-primary)"/>
            <circle cx="27" cy="21" r="2.5" fill="var(--color-primary)"/>
            <circle cx="16" cy="15" r="1.5" fill="var(--color-primary)" fillOpacity="0.45"/>
          </svg>

          <div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.0625rem",
                color: "var(--color-text-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                display: "block",
              }}
            >
              PhishNet
            </span>
            <span
              className="label-upper"
              style={{ fontSize: "0.5625rem", lineHeight: 1.2, display: "block" }}
            >
              Hybrid AI Security
            </span>
          </div>
        </div>

        {/* Right: Engine status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            backgroundColor: "var(--color-safe-bg)",
            border: "1px solid var(--color-safe)",
            borderRadius: "9999px",
            padding: "0.25rem 0.75rem",
          }}
        >
          {/* Animated pulse dot */}
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "var(--color-safe)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--color-safe)",
              letterSpacing: "0.04em",
            }}
          >
            Engine Online
          </span>
        </div>
      </div>

      {/* Pulse dot animation */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </header>
  );
}
