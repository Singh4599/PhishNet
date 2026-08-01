/**
 * components/Header.tsx — Dark premium sticky header
 */

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--glass-border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(6,8,18,0.85)",
      }}
    >
      <div
        className="content-width"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "0.875rem",
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            width={26}
            height={26}
            style={{ flexShrink: 0 }}
          >
            {/* Network graph logomark */}
            <line x1="16" y1="5"  x2="5"  y2="21" stroke="url(#lg1)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="16" y1="5"  x2="27" y2="21" stroke="url(#lg1)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="5"  y1="21" x2="27" y2="21" stroke="url(#lg1)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="16" y1="5"  x2="16" y2="21" stroke="var(--primary)" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.35"/>
            <circle cx="16" cy="5"  r="3"   fill="var(--primary)"/>
            <circle cx="5"  cy="21" r="2.5" fill="var(--primary-2)"/>
            <circle cx="27" cy="21" r="2.5" fill="var(--primary-2)"/>
            <circle cx="16" cy="15" r="1.5" fill="var(--primary)" fillOpacity="0.5"/>
            <defs>
              <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C6BF8"/>
                <stop offset="100%" stopColor="#06B6D4"/>
              </linearGradient>
            </defs>
          </svg>

          <div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                display: "block",
                color: "var(--text-1)",
              }}
            >
              PhishNet
            </span>
            <span
              className="label-upper"
              style={{ fontSize: "0.5rem", display: "block", marginTop: "2px" }}
            >
              Hybrid AI Security
            </span>
          </div>
        </div>

        {/* Engine Online badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--safe-border)",
            backgroundColor: "var(--safe-bg)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--safe)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--safe)",
              letterSpacing: "0.05em",
            }}
          >
            Engine Online
          </span>
        </div>
      </div>
    </header>
  );
}
