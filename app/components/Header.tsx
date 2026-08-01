"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(250, 249, 246, 0.8)", // matches --bg but slightly translucent
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <div
        className="content-width"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "transparent",
              border: "2px solid var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            {/* Minimal leaf/shield icon mimicking the design */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <span style={{ fontSize: "1.375rem", fontFamily: "var(--font-playfair), serif", fontWeight: 700, color: "var(--text-1)", letterSpacing: "-0.02em" }}>
            PhishNet
          </span>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.9375rem", color: "var(--text-1)", fontWeight: 500, cursor: "pointer" }}>How It Works</span>
          <span style={{ fontSize: "0.9375rem", color: "var(--text-1)", fontWeight: 500, cursor: "pointer" }}>Features</span>
          
          {pathname !== "/scan" && (
            <Link
              href="/scan"
              className="btn-primary"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem", marginLeft: "1rem" }}
            >
              Open Analyzer
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
