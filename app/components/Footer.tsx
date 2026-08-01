"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "4rem 0 2rem" }}>
      <div className="content-width">

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M18 3L33 10.5V22.5C33 29.1 26.4 34.5 18 36C9.6 34.5 3 29.1 3 22.5V10.5L18 3Z" fill="#D32F2F" />
                <circle cx="18" cy="19" r="5" fill="#FFFFFF" fillOpacity="0.9" />
                <circle cx="18" cy="19" r="2.5" fill="#D32F2F" />
              </svg>
              <div>
                <div style={{ fontSize: "1.125rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "0.04em" }}>PHISHNET</div>
                <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>AI-Powered Phishing Defence</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: "260px", marginBottom: "1.5rem" }}>
              This tool uses AI and deterministic security rules to analyze content for educational and security awareness purposes. It does not guarantee 100% accuracy.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["twitter", "github", "linkedin"].map(s => (
                <a key={s} href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(211,47,47,0.2)"; e.currentTarget.style.color = "#D32F2F"; e.currentTarget.style.borderColor = "rgba(211,47,47,0.3)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "PRODUCT", links: ["How It Works", "Features", "Security Engines", "API Access", "For Teams"] },
            { title: "COMPANY", links: ["About", "Blog", "Careers", "Press Kit", "Contact"] },
            { title: "LEGAL", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{col.title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            PhishNet © {new Date().getFullYear()}. All rights reserved.
          </p>
          <Link href="/scan" className="btn-red-solid" style={{ fontSize: "0.75rem", padding: "0.625rem 1.25rem" }}>
            Launch Analyzer →
          </Link>
        </div>

      </div>
    </footer>
  );
}
