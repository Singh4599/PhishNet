"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
        paddingBottom: "4rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Background Soft Grid (to match the design) */}
      <div 
        style={{ 
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", 
          backgroundSize: "60px 60px",
          pointerEvents: "none" 
        }} 
      />

      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* ── LEFT COLUMN: Exact Copy & Input ── */}
          <div style={{ paddingRight: "1rem" }}>
            
            {/* Tech Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: "3px", height: "14px", backgroundColor: "#D32F2F" }} />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                AI + RULE ENGINE TECHNOLOGY
              </span>
              <div style={{ flexGrow: 1, height: "1px", background: "linear-gradient(90deg, #E5E7EB, transparent)" }} />
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "3.5rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 800,
                color: "#000000",
                lineHeight: 1.1,
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

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", opacity: 0.5 }}>
               <div style={{ width: "80px", height: "1px", background: "#D32F2F" }} />
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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

            {/* Exact Feature Grid Inline */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3rem" }}>
              {[
                { icon: "0", title: "ZERO DATA STORED", desc: "100% Private" },
                { icon: "⚡", title: "RESULTS IN SECONDS", desc: "Real-time Analysis" },
                { icon: "🛡️", title: "8 SECURITY ENGINES", desc: "Always on Guard" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px", color: "#D32F2F", fontSize: "1rem" }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", marginBottom: "0.125rem", letterSpacing: "0.05em" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.5625rem", color: "#9CA3AF" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exact Input Box */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "0.5rem 0.5rem 0.5rem 1rem", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", alignItems: "center" }}>
              {/* Corner brackets aesthetic */}
              <div style={{ position: "absolute", top: "10px", right: "10px", width: "16px", height: "16px", borderTop: "2px solid #D32F2F", borderRight: "2px solid #D32F2F", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "16px", height: "16px", borderBottom: "2px solid #D32F2F", borderRight: "2px solid #D32F2F", opacity: 0.5 }} />
              <div style={{ position: "absolute", top: "10px", left: "10px", width: "16px", height: "16px", borderTop: "2px solid #D32F2F", borderLeft: "2px solid #D32F2F", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "16px", height: "16px", borderBottom: "2px solid #D32F2F", borderLeft: "2px solid #D32F2F", opacity: 0.5 }} />
              
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Paste suspicious email, message, or URL here..."
                style={{ flexGrow: 1, height: "50px", background: "transparent", border: "none", color: "#000000", fontSize: "0.875rem", outline: "none", padding: "0 1rem", zIndex: 1 }}
              />
              <button onClick={handleAnalyze} className="btn-red-solid" style={{ padding: "0.75rem 1.25rem", fontSize: "0.75rem", borderRadius: "6px", zIndex: 1 }}>
                ANALYZE THREAT →
              </button>
            </div>

            {/* Try a Sample */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#000000" }}>Try a sample:</span>
              {["Fake Bank Alert", "Delivery Scam", "Prize Email", "Normal Message"].map(chip => (
                <button key={chip} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.625rem", color: "#6B7280", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#000000"} onMouseLeave={e => e.currentTarget.style.color="#6B7280"}>
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* ── CENTER COLUMN: Exact Image from Mockup ── */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image 
              src="/shield.png" 
              alt="Security Shield" 
              width={550} 
              height={550} 
              style={{ width: "100%", height: "auto", objectFit: "contain", mixBlendMode: "multiply" }} 
              priority
            />
          </div>

          {/* ── RIGHT COLUMN: Exact Dashboard Replica ── */}
          <div style={{ position: "relative" }}>
            
            <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                
                {/* Header Strip */}
                <div style={{ borderBottom: "1px solid #E5E7EB", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#000000", fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em", fontWeight: 800 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    / ANALYSIS REPORT
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#6B7280", fontSize: "0.625rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                    Scanned 2 mins ago
                  </div>
                </div>

                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  
                  {/* Top Row: Verdict & Gauge */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    
                    {/* Verdict */}
                    <div style={{ paddingRight: "1rem", borderRight: "1px solid #E5E7EB" }}>
                      <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>VERDICT</span>
                      <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-rajdhani)", color: "#D32F2F", fontWeight: 800, marginTop: "0.25rem", marginBottom: "0.25rem" }}>DANGEROUS</h2>
                      <div style={{ fontSize: "0.6875rem", color: "#4B5563" }}>High risk phishing attempt detected</div>
                    </div>

                    {/* Risk Score */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>RISK SCORE</span>
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                          <span style={{ fontSize: "2rem", fontFamily: "var(--font-rajdhani)", color: "#D32F2F", fontWeight: 800 }}>82</span>
                          <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>/100</span>
                        </div>
                      </div>
                      
                      {/* Gauge */}
                      <div style={{ position: "relative", width: "50px", height: "50px" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", border: "2px dashed #E5E7EB" }} />
                        <div style={{ position: "absolute", top: "3px", left: "3px", width: "44px", height: "44px", borderRadius: "50%", border: "2px solid #D32F2F", borderLeftColor: "transparent", borderBottomColor: "transparent", transform: "rotate(45deg)" }} />
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#000000" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.58 2 4 5.58 4 10c0 1.94.7 3.71 1.86 5.1L4 22h16l-1.86-6.9C19.3 13.71 20 11.94 20 10c0-4.42-3.58-8-8-8zm-2 10H8V9h2v3zm6 0h-2V9h2v3z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Threats */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingBottom: "1.25rem", borderBottom: "1px solid #E5E7EB" }}>
                    <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>TOP THREATS DETECTED</span>
                    {[
                      { title: "Credential Harvesting", desc: "Attempts to steal login credentials", icon: "👤" },
                      { title: "Urgency & Pressure", desc: "Manipulative urgency detected", icon: "⚡" },
                      { title: "Brand Impersonation", desc: "Fake brand or domain mismatch", icon: "🛡️" },
                      { title: "Suspicious URL", desc: "High risk URL pattern detected", icon: "🔗" },
                    ].map((t, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "24px", height: "24px", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", border: "1px solid rgba(211,47,47,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D32F2F", fontSize: "0.625rem" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        </div>
                        <div>
                          <div style={{ fontSize: "0.6875rem", color: "#000000", fontWeight: 700 }}>{t.title}</div>
                          <div style={{ fontSize: "0.5625rem", color: "#6B7280" }}>{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Attack Simulation */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>ATTACK SIMULATION</span>
                    <p style={{ fontSize: "0.625rem", color: "#4B5563", lineHeight: 1.5 }}>
                      If you clicked the link and entered your credentials, they could be sent to the attacker's server. The attacker may then access your real account, lock you out, and use it for fraud or further attacks.
                    </p>
                    <span style={{ color: "#D32F2F", fontSize: "0.625rem", fontWeight: 700, cursor: "pointer", marginBottom: "0.5rem" }}>View full simulation →</span>
                    
                    <div style={{ position: "relative", height: "60px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1rem" }}>
                       <div style={{ fontSize: "2rem" }}>🕵️‍♂️</div>
                       <svg width="40" height="10" viewBox="0 0 40 10">
                          <path d="M0 5h40" stroke="#D32F2F" strokeWidth="1" strokeDasharray="2 2" />
                          <circle cx="20" cy="5" r="3" fill="#D32F2F" />
                       </svg>
                       <div style={{ border: "1px solid #E5E7EB", borderRadius: "4px", padding: "0.25rem", background: "#F9FAFB" }}>
                          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="#6B7280" strokeWidth="1">
                             <rect x="2" y="2" width="20" height="12" rx="2" />
                             <circle cx="8" cy="8" r="2" />
                             <path d="M12 6h6M12 10h6" />
                          </svg>
                       </div>
                    </div>
                  </div>

                  {/* Bottom Row: Security Engines Summary */}
                  <div style={{ marginTop: "auto" }}>
                    <span style={{ fontSize: "0.5625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.5rem" }}>SECURITY ENGINES SUMMARY</span>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", border: "1px solid #E5E7EB", borderRadius: "6px", background: "#F9FAFB" }}>
                      {[
                        { icon: "🌐", name: "Domain" },
                        { icon: "🔗", name: "URL Scan" },
                        { icon: "📄", name: "Content AI" },
                        { icon: "🧠", name: "Phishing AI" },
                        { icon: "🛡️", name: "Brand Check" },
                      ].map((eng, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
                          <span style={{ fontSize: "0.75rem" }}>{eng.icon}</span>
                          <span style={{ fontSize: "0.45rem", color: "#6B7280", fontWeight: 700 }}>{eng.name}</span>
                        </div>
                      ))}
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
