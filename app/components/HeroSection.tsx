"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");

  const handleAnalyze = () => {
    if (inputVal.trim()) {
      router.push("/scan");
    }
  };

  return (
    <section
      className="bg-grid"
      style={{
        position: "relative",
        paddingTop: "6rem",
        paddingBottom: "8rem",
        overflow: "hidden",
      }}
    >
      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT COLUMN: Copy & Input (Light Theme) ── */}
          <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
            
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.375rem 1rem",
                border: "1px solid var(--cyan-border)",
                borderRadius: "4px",
                background: "var(--cyan-dim)",
                marginBottom: "2rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", color: "var(--cyan)", textTransform: "uppercase" }}>
                AI + Rule-Based • 8 Security Engines
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3rem, 4.5vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--text-white)",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              DETECT THE TRAP<br />
              BEFORE IT <span style={{ color: "var(--red)" }}>CLICKS.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                maxWidth: "90%",
                fontWeight: 500,
              }}
            >
              PhishNet combines advanced AI reasoning with 8 deterministic
              security engines to uncover phishing attempts, impersonation,
              and hidden threats—before they reach you.
            </p>

            {/* Feature Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              {[
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                ), title: "PRIVATE BY DESIGN", desc: "Zero data stored" },
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                ), title: "RESULTS IN SECONDS", desc: "Real-time analysis" },
                { icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="3"/></svg>
                ), title: "EXPLAINABLE OUTCOMES", desc: "Know what & why" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--glass-bg)", border: "1px solid var(--cyan-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.125rem", letterSpacing: "0.05em" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.6875rem", color: "var(--text-muted)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Input Box */}
            <div style={{ background: "#FFFFFF", border: "1px solid var(--glass-border-light)", borderRadius: "var(--radius-panel)", padding: "1rem", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
              {/* Tabs */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", color: "var(--cyan)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--cyan)"><circle cx="12" cy="12" r="8"/></svg> ANALYZE TEXT
                </span>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/></svg> ANALYZE URL
                </span>
              </div>
              {/* Textarea */}
              <textarea
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Paste suspicious email, message, or URL here..."
                style={{ width: "100%", height: "120px", background: "transparent", border: "none", color: "var(--text-white)", fontSize: "1rem", resize: "none", outline: "none", fontFamily: "var(--font-dm-sans)" }}
              />
              {/* Bottom Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}>
                  {inputVal.length} / 12,000 CHARACTERS
                </span>
                <button
                  onClick={handleAnalyze}
                  className="btn-cyan-solid"
                  style={{ padding: "0.75rem 1.5rem" }}
                >
                  ANALYZE THREAT
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
                </button>
              </div>
            </div>

            {/* Try a Sample */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-white)", textTransform: "uppercase" }}>TRY A SAMPLE:</span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["Fake Bank Alert", "Delivery Scam", "Prize Email", "Normal Message"].map(chip => (
                  <button key={chip} style={{ background: "#FFFFFF", border: "1px solid var(--glass-border-light)", padding: "0.375rem 0.75rem", borderRadius: "4px", fontSize: "0.6875rem", color: "var(--text-muted)", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="var(--cyan)"} onMouseLeave={e => e.currentTarget.style.color="var(--text-muted)"}>
                    {chip}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: CSS Cyber Dashboard (Isolated Dark Theme) ── */}
          <div style={{ position: "relative" }}>
            
            <div className="cyber-panel" style={{ display: "flex", overflow: "hidden", minHeight: "650px" }}>
              
              {/* Sidebar */}
              <div style={{ width: "60px", background: "var(--bg-panel-2)", borderRight: "1px solid var(--glass-border)", display: "flex", flexDirection: "column", alignItems: "center", padding: "1.5rem 0", gap: "2rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-white)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-muted)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div style={{ marginTop: "auto", color: "var(--text-muted)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                
                {/* Header Strip */}
                <div style={{ borderBottom: "1px solid var(--glass-border)", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    / ANALYSIS REPORT
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.6875rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 5px var(--cyan)" }} />
                    Analyzed 2 mins ago
                  </div>
                </div>

                {/* Dashboard Body */}
                <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  
                  {/* Top Row: Verdict & Gauge */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    
                    {/* Verdict */}
                    <div style={{ paddingRight: "1.5rem", borderRight: "1px solid var(--glass-border)" }}>
                      <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>VERDICT</span>
                      <h2 style={{ fontSize: "2.5rem", color: "var(--red)", lineHeight: 1.1, marginTop: "0.5rem", marginBottom: "0.5rem", textShadow: "0 0 10px var(--red-dim)" }}>DANGEROUS</h2>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>High risk phishing attempt detected</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      </div>
                    </div>

                    {/* Risk Score */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>RISK SCORE</span>
                        <div style={{ marginTop: "0.25rem", display: "flex", alignItems: "baseline" }}>
                          <span style={{ fontSize: "3.5rem", fontFamily: "var(--font-rajdhani)", color: "var(--red)", fontWeight: 700, lineHeight: 1 }}>82</span>
                          <span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>/100</span>
                        </div>
                      </div>
                      
                      {/* Tech Circular Gauge */}
                      <div style={{ position: "relative", width: "80px", height: "80px" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", border: "2px dashed var(--glass-border-light)", animation: "spin 20s linear infinite" }} />
                        <div style={{ position: "absolute", top: "5px", left: "5px", width: "70px", height: "70px", borderRadius: "50%", border: "2px solid var(--red-dim)" }} />
                        <div style={{ position: "absolute", top: "5px", left: "5px", width: "70px", height: "70px", borderRadius: "50%", border: "2px solid var(--red)", borderLeftColor: "transparent", borderBottomColor: "transparent", transform: "rotate(45deg)", boxShadow: "0 0 10px var(--red-dim)" }} />
                        {/* Skull Icon */}
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "var(--red)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.58 2 4 5.58 4 10c0 1.94.7 3.71 1.86 5.1L4 22h16l-1.86-6.9C19.3 13.71 20 11.94 20 10c0-4.42-3.58-8-8-8zm-2 10H8V9h2v3zm6 0h-2V9h2v3z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Row: Threats & Simulation */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", flexGrow: 1 }}>
                    
                    {/* Top Threats */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", color: "var(--text-white)", textTransform: "uppercase", letterSpacing: "0.05em" }}>TOP THREATS DETECTED</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {[
                          { title: "Credential Harvesting", desc: "Requests for login credentials", icon: "👤" },
                          { title: "Urgency & Pressure", desc: "Manipulative urgency detected", icon: "⚡" },
                          { title: "Brand Impersonation", desc: "Fake brand or domain mismatch", icon: "🛡️" },
                          { title: "Suspicious URL", desc: "High risk URL pattern detected", icon: "🔗" },
                        ].map((t, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "var(--red-dim)", border: "1px solid var(--red-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)", fontSize: "0.875rem" }}>
                              {t.icon}
                            </div>
                            <div>
                              <div style={{ fontSize: "0.8125rem", color: "var(--text-white)", fontWeight: 500 }}>{t.title}</div>
                              <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)" }}>{t.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <span style={{ color: "var(--cyan)", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", marginTop: "auto" }}>View all techniques →</span>
                    </div>

                    {/* Attack Simulation */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", background: "var(--bg-panel-2)", border: "1px solid var(--glass-border-light)", borderRadius: "8px", padding: "1.25rem", position: "relative", overflow: "hidden" }}>
                      <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", zIndex: 1 }}>ATTACK SIMULATION</span>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6, position: "relative", zIndex: 1 }}>
                        If you clicked the link and entered your credentials, they could be sent to the attacker's server. The attacker may then access your real account, lock you out, and use it for fraud or further attacks.
                      </p>
                      <span style={{ color: "var(--cyan)", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", position: "relative", zIndex: 1 }}>View full simulation →</span>
                      
                      {/* Fake Wireframe Graphic */}
                      <div style={{ marginTop: "1rem", position: "relative", height: "80px" }}>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", background: "linear-gradient(90deg, rgba(0,229,255,0.1), rgba(255,51,51,0.1))", borderRadius: "4px" }} />
                        {/* Wireframe Nodes */}
                        <div style={{ position: "absolute", top: "20px", left: "20px", width: "30px", height: "20px", border: "1px solid var(--cyan)", borderRadius: "2px", boxShadow: "0 0 5px var(--cyan)" }} />
                        <div style={{ position: "absolute", top: "40px", right: "20px", width: "20px", height: "30px", border: "1px solid var(--red)", borderRadius: "2px", boxShadow: "0 0 5px var(--red)" }} />
                        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                          <path d="M 50 30 Q 120 10, 200 50" fill="none" stroke="var(--cyan-border)" strokeWidth="1" strokeDasharray="4 2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Security Engines Summary */}
                  <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "1.25rem" }}>
                    <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.75rem" }}>SECURITY ENGINES SUMMARY</span>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {[
                        { name: "Domain Analysis", state: "Risky", color: "var(--red)" },
                        { name: "URL Scanner", state: "Risky", color: "var(--red)" },
                        { name: "Content AI", state: "Risky", color: "var(--red)" },
                        { name: "Phishing Patterns", state: "Malicious", color: "var(--red)" },
                      ].map((eng, i) => (
                        <div key={i} style={{ flexGrow: 1, padding: "0.5rem 0.75rem", background: "var(--bg-panel-2)", border: "1px solid var(--glass-border-light)", borderRadius: "6px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span style={{ fontSize: "0.6875rem", color: "var(--text-white)", whiteSpace: "nowrap" }}>{eng.name}</span>
                          </div>
                          <div style={{ fontSize: "0.625rem", color: eng.color, marginTop: "0.25rem", fontWeight: 600 }}>{eng.state}</div>
                        </div>
                      ))}
                      <div style={{ padding: "0.5rem 0.75rem", border: "1px solid var(--glass-border-light)", borderRadius: "6px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <span style={{ color: "var(--cyan)", fontSize: "0.875rem", fontWeight: 700 }}>+4</span>
                        <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>More Engines</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
