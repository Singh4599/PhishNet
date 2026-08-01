"use client";

import React, { useState } from "react";

const features = [
  {
    category: "AI DETECTION",
    color: "#D32F2F",
    title: "AI-Powered Phishing Detection",
    desc: "PhishNet's core Gemini AI engine reads and reasons about the full content the same way a human expert would — but in milliseconds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/>
      </svg>
    ),
    bullets: [
      "Understands context, tone, and intent",
      "Detects sophisticated social engineering",
      "Improves with new threat patterns",
      "Multi-language threat detection",
    ],
    stat: { val: "99.9%", label: "Detection accuracy" },
  },
  {
    category: "URL INTELLIGENCE",
    color: "#0EA5E9",
    title: "Deep URL & Domain Intelligence",
    desc: "Every URL, domain, and redirect chain is analyzed against global threat databases and behavioral patterns to spot spoofed or malicious destinations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    bullets: [
      "Domain age and registration analysis",
      "Full redirect chain unwinding",
      "Lookalike domain detection",
      "Real-time blocklist checking",
    ],
    stat: { val: "8", label: "Security engines" },
  },
  {
    category: "BRAND PROTECTION",
    color: "#8B5CF6",
    title: "Brand Impersonation Detection",
    desc: "Attackers copy logos, fonts, and layouts to fool you. PhishNet compares every element against known legitimate brand assets to catch even pixel-perfect fakes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    bullets: [
      "Logos and visual identity matching",
      "Sender name vs domain mismatch",
      "Thousands of brand databases",
      "Typosquatting detection",
    ],
    stat: { val: "5K+", label: "Brands protected" },
  },
  {
    category: "BEHAVIORAL AI",
    color: "#10B981",
    title: "Behavioral Pattern Analysis",
    desc: "Phishing attacks rely on predictable psychological tricks. PhishNet's NLP engine reads the emotional and behavioral fingerprint of every message.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    bullets: [
      "Urgency and pressure detection",
      "Authority impersonation signals",
      "Fear and scarcity manipulation",
      "Linguistic anomaly scoring",
    ],
    stat: { val: "10M+", label: "Threats caught" },
  },
  {
    category: "PRIVACY",
    color: "#F59E0B",
    title: "Zero-Storage Privacy Architecture",
    desc: "Your content is analyzed in-memory and never persisted. PhishNet is built privacy-first: your emails and messages are yours alone.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    bullets: [
      "Zero data retention policy",
      "In-memory analysis only",
      "No account required",
      "GDPR & privacy compliant",
    ],
    stat: { val: "0", label: "Bytes stored" },
  },
  {
    category: "ATTACK SIMULATION",
    color: "#EF4444",
    title: "Attack Path Simulation",
    desc: "See exactly what happens if you fall for the attack — PhishNet simulates the attacker's full chain, from click to credential theft, so you understand the real impact.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
      </svg>
    ),
    bullets: [
      "Step-by-step attack recreation",
      "Attacker motive breakdown",
      "Downstream impact analysis",
      "Shareable awareness reports",
    ],
    stat: { val: "24/7", label: "Always watching" },
  },
];

export default function FeaturesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="features"
      style={{
        padding: "7rem 0",
        background: "var(--bg-soft)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="content-width">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="section-badge" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Features
          </div>
          <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            EIGHT ENGINES.<br />
            <span style={{ color: "var(--red)" }}>ONE VERDICT.</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Every message you paste is run through a battle-tested battery of specialized security engines working in parallel.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                border: hovered === i ? `1px solid ${f.color}30` : "1px solid var(--border)",
                boxShadow: hovered === i ? `0 12px 32px ${f.color}12, 0 2px 8px rgba(0,0,0,0.04)` : "var(--shadow-sm)",
              }}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: hovered === i ? f.color : "transparent", transition: "background 0.3s" }} />

              {/* Category badge */}
              <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.5625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: f.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {f.category}
                </span>
                <div style={{ padding: "0.5rem 0.75rem", background: `${f.color}10`, border: `1px solid ${f.color}20`, borderRadius: "var(--radius-sm)", color: f.color, transition: "all 0.2s" }}>
                  {f.icon}
                </div>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "1.125rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "var(--text-1)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: "0.8125rem", color: "var(--text-3)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {f.desc}
              </p>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                {f.bullets.map((b, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `${f.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-2)" }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Stat */}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: f.color }}>{f.stat.val}</span>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-4)" }}>{f.stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
