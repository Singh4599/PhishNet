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
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="content-width"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          {/* Hexagon shield logo */}
          <div style={{ position: "relative", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 3L33 10.5V22.5C33 29.1 26.4 34.5 18 36C9.6 34.5 3 29.1 3 22.5V10.5L18 3Z" fill="#0A0F12" />
              <path d="M18 9L27 13.5V21C27 25.35 22.8 29.1 18 30C13.2 29.1 9 25.35 9 21V13.5L18 9Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <circle cx="18" cy="19" r="4" fill="#D32F2F" />
              <circle cx="18" cy="19" r="2" fill="#FF5252" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "1.1875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#0A0F12", letterSpacing: "0.04em", lineHeight: 1 }}>
              PHISHNET
            </span>
            <span style={{ fontSize: "0.55rem", color: "var(--text-3)", letterSpacing: "0.08em", marginTop: "2px", textTransform: "uppercase", fontWeight: 600 }}>
              AI-Powered Phishing Defence
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {[
            { label: "PRODUCT", href: "#" },
            { label: "HOW IT WORKS", href: "#how-it-works" },
            { label: "FEATURES", href: "#features" },
            { label: "FOR TEAMS", href: "#" },
            { label: "PRICING", href: "#" },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "var(--text-1)",
                cursor: "pointer",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--red)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-1)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="#" style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-1)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            SIGN IN
          </a>
          {pathname !== "/scan" && (
            <Link href="/scan" className="btn-black">
              LAUNCH ANALYZER
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
