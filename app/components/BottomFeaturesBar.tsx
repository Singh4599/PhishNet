"use client";

import React from "react";

export default function BottomFeaturesBar() {
  return (
    <>
      {/* Middle Ribbon - Dark Teal */}
      <section style={{ backgroundColor: "var(--bg-ribbon)", padding: "1.5rem 0", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <div className="content-width" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          
          <div style={{ display: "flex", flexDirection: "column", paddingRight: "2rem", borderRight: "1px solid var(--glass-border)" }}>
            <span style={{ fontSize: "0.875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.05em", textTransform: "uppercase" }}>POWERED BY</span>
            <span style={{ fontSize: "0.875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.05em", textTransform: "uppercase" }}>8 SECURITY ENGINES</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexGrow: 1, justifyContent: "space-around" }}>
            {[
              { title: "DOMAIN INTEL", subtitle: "Reputation check", icon: "🛡️" },
              { title: "URL SCANNER", subtitle: "Deep URL inspection", icon: "🔍" },
              { title: "CONTENT AI", subtitle: "NLP threat detection", icon: "🧠" },
              { title: "PHISHING PATTERNS", subtitle: "ML pattern analysis", icon: "🕸️" },
              { title: "LINK ANALYSIS", subtitle: "Behavior & redirect scan", icon: "🔗" },
            ].map(eng => (
              <div key={eng.title} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{eng.icon}</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--text-white)", letterSpacing: "0.05em" }}>{eng.title}</span>
                  <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>{eng.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Bottom Light Section */}
      <section className="bg-grid" style={{ backgroundColor: "var(--bg-light)", padding: "5rem 0 6rem", position: "relative" }}>
        <div className="content-width">
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "2rem", alignItems: "center" }}>
            
            {/* Left Copy */}
            <div>
              <h2 style={{ fontSize: "2rem", color: "var(--text-dark)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
                More than a scanner.<br />
                It's your <span style={{ color: "#00B8D4" }}>cyber shield.</span>
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>
                PhishNet doesn't just detect threats, it helps you understand them and stay one step ahead.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { title: "DETECT", desc: "Spot threats others miss with 8 advanced engines.", icon: "🎯" },
                { title: "ANALYZE", desc: "AI understands context and attacker intent.", icon: "🔍" },
                { title: "SIMULATE", desc: "See the real-world impact if you fall for it.", icon: "🧊" },
                { title: "ACT", desc: "Get clear, actionable steps to stay safe and secure.", icon: "🛡️" },
              ].map(f => (
                <div key={f.title} style={{ background: "#FFFFFF", padding: "1.5rem", borderRadius: "12px", border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>{f.icon}</div>
                    <span style={{ fontSize: "0.875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "0.05em" }}>{f.title}</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#64748B", lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Trust Area */}
            <div style={{ paddingLeft: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                TRUSTED BY SECURITY<br />TEAMS & PROFESSIONALS
              </span>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex" }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#E2E8F0", border: "2px solid #FFFFFF", marginLeft: i !== 1 ? "-12px" : "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "0.75rem" }}>👤</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0F172A", border: "2px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "0.625rem", fontWeight: 700, marginLeft: "-12px" }}>
                  +2K
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ color: "#00B8D4", fontSize: "1rem", letterSpacing: "2px" }}>★★★★★</div>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", fontFamily: "var(--font-rajdhani)" }}>4.9/5</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
