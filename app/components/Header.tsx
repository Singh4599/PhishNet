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
        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            {/* Hexagon Logo from V3 */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
              <circle cx="12" cy="12" r="3" fill="#D32F2F" stroke="#D32F2F" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: "1.25rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", letterSpacing: "0.05em", lineHeight: 1 }}>
              PHISHNET
            </span>
            <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: "2px", textTransform: "uppercase", fontWeight: 600 }}>
              AI-Powered Phishing Defence
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {["PRODUCT", "HOW IT WORKS", "FEATURES", "FOR TEAMS", "RESOURCES", "PRICING"].map(link => (
            <span key={link} style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", color: "#000000", cursor: "pointer", textTransform: "uppercase" }}>
              {link}
            </span>
          ))}
          
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginLeft: "1rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", color: "#000000", cursor: "pointer" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              SIGN IN
            </span>
            {pathname !== "/scan" && (
              <Link
                href="/scan"
                className="btn-black"
              >
                LAUNCH ANALYZER
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
