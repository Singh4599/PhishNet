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
        backgroundColor: "rgba(250, 249, 246, 0.9)", // Light background
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
              color: "var(--cyan)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            {/* Target Reticle Logo */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" fill="var(--red)" stroke="var(--red)" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: "1.25rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--text-white)", letterSpacing: "0.05em", lineHeight: 1 }}>
              PHISHNET
            </span>
            <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: "2px", textTransform: "uppercase", fontWeight: 600 }}>
              AI-Powered Threat Defense
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {["PRODUCT", "HOW IT WORKS", "FEATURES", "RESOURCES", "FOR TEAMS", "PRICING"].map(link => (
            <span key={link} style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-white)", cursor: "pointer", textTransform: "uppercase" }}>
              {link}
            </span>
          ))}
          
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginLeft: "1rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-white)", cursor: "pointer" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              SIGN IN
            </span>
            {pathname !== "/scan" && (
              <Link
                href="/scan"
                className="btn-cyan"
              >
                OPEN ANALYZER
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
