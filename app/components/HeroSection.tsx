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
      style={{
        position: "relative",
        paddingTop: "4rem",
        paddingBottom: "6rem",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Background soft grid */}
      <div className="bg-grid" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.5, pointerEvents: "none" }} />

      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "28% 44% 28%",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* ── LEFT COLUMN: Copy & Input ── */}
          <div style={{ paddingRight: "1rem" }}>
            
            {/* Tech Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "2rem",
                color: "#D32F2F",
                fontSize: "0.6875rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              AI + RULE ENGINE TECHNOLOGY
              <div style={{ flexGrow: 1, height: "1px", background: "linear-gradient(90deg, #D32F2F, transparent)", width: "100px", marginLeft: "0.5rem" }} />
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3rem, 4vw, 4.25rem)",
                fontWeight: 800,
                color: "#000000",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              OUTSMART<br />
              <span style={{ color: "#D32F2F" }}>PHISHERS.</span><br />
              PROTECT<br />
              EVERY CLICK.
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
               <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, #D32F2F, transparent)" }} />
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1rem",
                color: "#4B5563",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                fontWeight: 500,
              }}
            >
              PhishNet combines the power of AI reasoning and 8 deterministic
              security engines to detect phishing attempts, impersonation,
              and hidden threats—before they reach you.
            </p>

            {/* Feature Grid Inline */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "3rem",
              }}
            >
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>, title: "ZERO DATA STORED", desc: "100% Private" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, title: "RESULTS IN SECONDS", desc: "Real-time Analysis" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="3"/></svg>, title: "8 SECURITY ENGINES", desc: "Always on Guard" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "0.625rem", fontWeight: 800, color: "#000000", marginBottom: "0.125rem", letterSpacing: "0.05em" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.5625rem", color: "#6B7280" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Input Box */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "1rem", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              {/* Corner brackets aesthetic */}
              <svg style={{ position: "absolute", top: 8, right: 8 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4"/></svg>
              
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Paste suspicious email, message, or URL here..."
                style={{ width: "100%", height: "40px", background: "transparent", border: "1px solid #F3F4F6", borderRadius: "4px", padding: "0 1rem", color: "#000000", fontSize: "0.875rem", outline: "none", fontFamily: "var(--font-dm-sans)", marginBottom: "1rem" }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleAnalyze} className="btn-red-solid" style={{ padding: "0.5rem 1rem", fontSize: "0.75rem", borderRadius: "4px" }}>
                  ANALYZE THREAT →
                </button>
              </div>
            </div>

            {/* Try a Sample */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#000000" }}>Try a sample:</span>
              {["Fake Bank Alert", "Delivery Scam", "Prize Email", "Normal Message"].map(chip => (
                <button key={chip} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", padding: "0.25rem 0.625rem", borderRadius: "999px", fontSize: "0.625rem", color: "#6B7280", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#000000"} onMouseLeave={e => e.currentTarget.style.color="#6B7280"}>
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* ── CENTER COLUMN: Radar & Glass Shield Graphic ── */}
          <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            
            {/* Background Radar Rings */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", height: "400px", borderRadius: "50%", border: "1px dashed #E5E7EB" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "300px", height: "300px", borderRadius: "50%", border: "1px dashed #E5E7EB" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid #F3F4F6", background: "radial-gradient(circle, rgba(211,47,47,0.05) 0%, transparent 70%)" }} />

            {/* Floating Nodes */}
            {[
              { label: "AI REASONING", sub: "Gemini AI", top: "15%", left: "30%", icon: "🧠" },
              { label: "CONTENT ANALYSIS", sub: "NLP Engine", top: "25%", left: "75%", icon: "📄" },
              { label: "URL INTELLIGENCE", sub: "Deep Scan", top: "35%", left: "20%", icon: "🌐" },
              { label: "BEHAVIOR PATTERNS", sub: "Threat Behavior", top: "45%", left: "80%", icon: "👥" },
              { label: "BRAND PROTECTION", sub: "Impersonation Check", top: "55%", left: "25%", icon: "🛡️" },
              { label: "THREAT INTELLIGENCE", sub: "Global Database", top: "65%", left: "70%", icon: "🛢️" },
            ].map((node, i) => (
              <div key={i} style={{ position: "absolute", top: node.top, left: node.left, display: "flex", flexDirection: "column", alignItems: "center", transform: "translate(-50%, -50%)" }}>
                <div style={{ width: "40px", height: "45px", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "#FFFFFF", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", zIndex: 2 }}>
                  {node.icon}
                </div>
                <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                  <div style={{ fontSize: "0.5625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000" }}>{node.label}</div>
                  <div style={{ fontSize: "0.5rem", color: "#6B7280" }}>{node.sub}</div>
                </div>
              </div>
            ))}

            {/* Central Glass Shield & Platform */}
            <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
              
              {/* Glass Shield */}
              <div style={{ width: "200px", height: "240px", position: "relative", marginBottom: "-20px" }}>
                <svg width="100%" height="100%" viewBox="0 0 200 240" fill="none">
                  {/* Outer Glass Frame */}
                  <path d="M100 10L180 40v80c0 50-80 110-80 110S20 170 20 120V40l80-30z" fill="rgba(255,255,255,0.7)" stroke="#E5E7EB" strokeWidth="2" />
                  {/* Inner Tech Grid */}
                  <path d="M100 20L170 45v70c0 40-70 95-70 95S30 155 30 115V45l70-25z" fill="rgba(255,255,255,0.4)" stroke="#F3F4F6" strokeWidth="1" />
                  <path d="M100 20v190M30 80h140M40 130h120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Glowing Core */}
                  <circle cx="100" cy="120" r="15" fill="#D32F2F" />
                  <circle cx="100" cy="120" r="25" stroke="#D32F2F" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="100" cy="120" r="35" stroke="rgba(211,47,47,0.3)" strokeWidth="1" />
                  {/* Shading/Reflection */}
                  <path d="M100 10L180 40v80c0 50-80 110-80 110V10z" fill="linear-gradient(90deg, transparent, rgba(255,255,255,0.5))" />
                </svg>
                {/* CSS Pulse for the core */}
                <div style={{ position: "absolute", top: "120px", left: "100px", transform: "translate(-50%, -50%)", width: "30px", height: "30px", borderRadius: "50%", animation: "pulseRed 2s infinite" }} />
              </div>

              {/* Holographic Platform */}
              <div style={{ width: "240px", height: "60px", position: "relative" }}>
                 <svg width="100%" height="100%" viewBox="0 0 240 60" fill="none">
                    <ellipse cx="120" cy="30" rx="100" ry="20" stroke="#E5E7EB" strokeWidth="2" />
                    <ellipse cx="120" cy="30" rx="80" ry="10" stroke="#D32F2F" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M20 30l40 30h120l40-30" stroke="#F3F4F6" strokeWidth="2" />
                 </svg>
                 <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "120px", height: "10px", background: "radial-gradient(ellipse, rgba(211,47,47,0.2) 0%, transparent 70%)", filter: "blur(4px)" }} />
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: CSS Cyber Dashboard (Light Theme Variant) ── */}
          <div style={{ position: "relative" }}>
            
            <div className="cyber-panel" style={{ display: "flex", overflow: "hidden", height: "650px", transform: "scale(0.95)", transformOrigin: "right center" }}>
              
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                
                {/* Header Strip */}
                <div style={{ borderBottom: "1px solid #E5E7EB", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#000000", fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em", fontWeight: 700 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    / ANALYSIS REPORT
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", fontSize: "0.625rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 5px #10B981" }} />
                    Scanned 2 mins ago
                  </div>
                </div>

                {/* Dashboard Body */}
                <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  
                  {/* Top Row: Verdict & Gauge */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    
                    {/* Verdict */}
                    <div style={{ paddingRight: "1rem", borderRight: "1px solid #E5E7EB" }}>
                      <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>VERDICT</span>
                      <h2 style={{ fontSize: "2rem", color: "#D32F2F", lineHeight: 1.1, marginTop: "0.25rem", marginBottom: "0.5rem" }}>DANGEROUS</h2>
                      <div style={{ fontSize: "0.75rem", color: "#4B5563" }}>High risk phishing attempt detected</div>
                    </div>

                    {/* Risk Score */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>RISK SCORE</span>
                        <div style={{ marginTop: "0.25rem", display: "flex", alignItems: "baseline" }}>
                          <span style={{ fontSize: "2.5rem", fontFamily: "var(--font-rajdhani)", color: "#D32F2F", fontWeight: 800, lineHeight: 1 }}>82</span>
                          <span style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>/100</span>
                        </div>
                      </div>
                      
                      {/* Tech Circular Gauge */}
                      <div style={{ position: "relative", width: "60px", height: "60px" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", border: "2px dashed #E5E7EB", animation: "spin 20s linear infinite" }} />
                        <div style={{ position: "absolute", top: "4px", left: "4px", width: "52px", height: "52px", borderRadius: "50%", border: "2px solid rgba(211,47,47,0.1)" }} />
                        <div style={{ position: "absolute", top: "4px", left: "4px", width: "52px", height: "52px", borderRadius: "50%", border: "2px solid #D32F2F", borderLeftColor: "transparent", borderBottomColor: "transparent", transform: "rotate(45deg)" }} />
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#000000" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.58 2 4 5.58 4 10c0 1.94.7 3.71 1.86 5.1L4 22h16l-1.86-6.9C19.3 13.71 20 11.94 20 10c0-4.42-3.58-8-8-8zm-2 10H8V9h2v3zm6 0h-2V9h2v3z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Threats */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingBottom: "1.5rem", borderBottom: "1px solid #E5E7EB" }}>
                    <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>TOP THREATS DETECTED</span>
                    {[
                      { title: "Credential Harvesting", desc: "Attempts to steal login credentials", icon: "👤" },
                      { title: "Urgency & Pressure", desc: "Manipulative urgency detected", icon: "⚡" },
                      { title: "Brand Impersonation", desc: "Fake brand or domain mismatch", icon: "🛡️" },
                      { title: "Suspicious URL", desc: "High risk URL pattern detected", icon: "🔗" },
                    ].map((t, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "4px", border: "1px solid rgba(211,47,47,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D32F2F", fontSize: "0.6875rem" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", color: "#000000", fontWeight: 700 }}>{t.title}</div>
                          <div style={{ fontSize: "0.625rem", color: "#6B7280" }}>{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Attack Simulation */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "#F9FAFB", borderRadius: "8px", padding: "1rem", position: "relative" }}>
                    <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>ATTACK SIMULATION</span>
                    <p style={{ fontSize: "0.6875rem", color: "#4B5563", lineHeight: 1.5 }}>
                      If you clicked the link and entered your credentials, they could be sent to the attacker's server. The attacker may then access your real account, lock you out, and use it for fraud or further attacks.
                    </p>
                    <span style={{ color: "#D32F2F", fontSize: "0.6875rem", fontWeight: 700, cursor: "pointer" }}>View full simulation →</span>
                    
                    {/* Wireframe Graphic Light Mode */}
                    <div style={{ marginTop: "0.5rem", position: "relative", height: "60px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "4px" }}>
                       <div style={{ position: "absolute", top: "15px", left: "15px", width: "24px", height: "16px", border: "1px solid #000000", borderRadius: "2px" }} />
                       <div style={{ position: "absolute", top: "25px", right: "15px", width: "16px", height: "24px", border: "1px solid #D32F2F", borderRadius: "2px", background: "rgba(211,47,47,0.1)" }} />
                       <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                         <path d="M 40 23 Q 100 10, 150 35" fill="none" stroke="#D32F2F" strokeWidth="1" strokeDasharray="4 2" />
                       </svg>
                    </div>
                  </div>

                  {/* Bottom Row: Security Engines Summary */}
                  <div style={{ marginTop: "auto" }}>
                    <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.5rem" }}>SECURITY ENGINES SUMMARY</span>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", border: "1px solid #E5E7EB", borderRadius: "6px" }}>
                      {[
                        { icon: "🛡️", name: "Domain" },
                        { icon: "🔗", name: "URL Scan" },
                        { icon: "📄", name: "Content AI" },
                        { icon: "🧠", name: "Phishing AI" },
                        { icon: "🛡️", name: "Brand Check" },
                      ].map((eng, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
                          <span style={{ fontSize: "0.875rem" }}>{eng.icon}</span>
                          <span style={{ fontSize: "0.5rem", color: "#6B7280", fontWeight: 600 }}>{eng.name}</span>
                        </div>
                      ))}
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
