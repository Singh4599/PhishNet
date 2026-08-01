"use client";

/**
 * components/HeroSection.tsx
 *
 * Exact replication of the provided design mockup.
 * Left: Copy, features, buttons, social proof.
 * Right: Pure CSS dashboard window mockup.
 */

import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Background Graphic (Leaf shape bottom right) */}
      <div style={{ position: "absolute", right: "-5%", bottom: "-10%", opacity: 0.1, pointerEvents: "none", zIndex: 0 }}>
        <svg width="600" height="500" viewBox="0 0 100 100" fill="var(--primary)">
          <path d="M50 100C50 100 0 75 0 30C0 -15 50 10 50 10C50 10 100 -15 100 30C100 75 50 100 50 100Z" />
        </svg>
      </div>
      
      {/* Dashed line graphic top right */}
      <div style={{ position: "absolute", right: "20%", top: "10%", opacity: 0.2, pointerEvents: "none", zIndex: 0 }}>
        <svg width="200" height="50" viewBox="0 0 200 50" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="6 6">
          <path d="M0 25 Q 100 -20, 200 25" />
        </svg>
      </div>

      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          
          {/* ── LEFT COLUMN: Copy & Actions ── */}
          <div style={{ paddingRight: "2rem" }}>
            
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.25rem 0.75rem",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--radius-pill)",
                background: "var(--glass)",
                marginBottom: "2rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-1)", textTransform: "uppercase" }}>
                AI + Rule-Based Security Engine
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--text-1)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Clarity before
              <br />
              you <span style={{ color: "var(--primary)", fontStyle: "italic" }}>click.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-2)",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              PhishNet analyzes suspicious emails, messages, and
              URLs using AI insights and deterministic security
              checks — so you know the real risk, every time.
            </p>

            {/* Feature Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { icon: "🔒", title: "Private by design", desc: "Zero data stored", color: "#FDE68A", stroke: "#D97706" },
                { icon: "⚡", title: "Results in seconds", desc: "Fast. Accurate. Clear.", color: "#FEE2E2", stroke: "#DC2626" },
                { icon: "🛡️", title: "Explainable results", desc: "See what & why", color: "#FEF3C7", stroke: "#D97706" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: f.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.125rem",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-1)", marginBottom: "0.125rem" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
              <Link href="/scan" className="btn-primary" style={{ padding: "1rem 2rem" }}>
                Analyze Now <span aria-hidden="true" style={{ marginLeft: "0.5rem" }}>→</span>
              </Link>
              <button
                className="btn-outline"
                style={{
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border-2)",
                  padding: "1rem 2rem",
                }}
              >
                <span aria-hidden="true" style={{ marginRight: "0.5rem" }}>▷</span> See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ display: "flex", marginLeft: "0.5rem" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "var(--glass-border)",
                      border: "2px solid var(--bg)",
                      marginLeft: "-0.5rem",
                      zIndex: 5 - i,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "0.5rem", color: "var(--text-3)" }}>👤</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color: "#F59E0B", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.125rem" }}>★★★★★</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-2)", lineHeight: 1.4 }}>
                  Trusted by security-conscious teams<br />and professionals
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: CSS Dashboard Mockup ── */}
          <div style={{ position: "relative", perspective: "1000px" }}>
            
            {/* The Window Frame */}
            <div
              style={{
                width: "100%",
                background: "var(--bg-2)",
                borderRadius: "16px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
                overflow: "hidden",
                transform: "rotateY(-5deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              {/* macOS Window Controls */}
              <div style={{ display: "flex", gap: "6px", padding: "16px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
              </div>

              {/* Mockup Content Area */}
              <div style={{ padding: "0 24px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                
                {/* Gauge Box */}
                <div style={{ padding: "20px", border: "1px solid var(--glass-border)", borderRadius: "12px", textAlign: "center" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-1)", textAlign: "left", marginBottom: "2rem" }}>Risk Overview</p>
                  
                  {/* CSS Semi-circle Gauge */}
                  <div style={{ position: "relative", width: "160px", height: "80px", margin: "0 auto", overflow: "hidden" }}>
                    {/* Background track */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "160px", height: "160px", borderRadius: "50%", border: "12px solid var(--bg-3)", boxSizing: "border-box" }} />
                    {/* Fill */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "160px", height: "160px", borderRadius: "50%", border: "12px solid var(--danger)", borderBottomColor: "transparent", borderRightColor: "transparent", transform: "rotate(45deg)", boxSizing: "border-box" }} />
                  </div>
                  
                  <div style={{ marginTop: "-20px" }}>
                    <span style={{ fontSize: "3rem", fontWeight: 700, color: "var(--text-1)", lineHeight: 1 }}>72</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-3)", fontWeight: 500 }}> / 100</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", fontSize: "0.75rem", fontWeight: 600 }}>
                    <span style={{ color: "var(--safe)" }}>Low Risk</span>
                    <span style={{ color: "var(--danger)" }}>High Risk</span>
                  </div>
                </div>

                {/* Verdict Box */}
                <div>
                  <div style={{ padding: "20px", border: "1px solid var(--glass-border)", borderRadius: "12px", marginBottom: "16px" }}>
                    <span style={{ display: "inline-block", fontSize: "0.625rem", fontWeight: 700, color: "var(--text-3)", background: "var(--bg-3)", padding: "4px 8px", borderRadius: "4px", marginBottom: "0.75rem", textTransform: "uppercase" }}>Verdict</span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.75rem", color: "var(--danger)", fontWeight: 700, margin: 0 }}>Dangerous</h3>
                      <div style={{ color: "var(--danger)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                          <line x1="12" y1="9" x2="12" y2="13"/>
                          <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                      This content contains multiple high-risk signals often used in phishing attacks.
                    </p>
                  </div>

                  {/* Threat Card */}
                  <div style={{ padding: "16px", background: "var(--danger-bg)", borderRadius: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ flexGrow: 1 }}>
                      <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "var(--danger)", textTransform: "uppercase" }}>Primary Threat</span>
                      <h4 style={{ fontSize: "0.875rem", color: "var(--danger)", fontWeight: 700, margin: "2px 0 4px" }}>Credential Harvesting</h4>
                      <p style={{ fontSize: "0.75rem", color: "var(--danger)", opacity: 0.8, lineHeight: 1.4 }}>
                        Attackers may be attempting to steal your login credentials.
                      </p>
                    </div>
                    <div style={{ width: "40px", height: "40px", background: "rgba(211,47,47,0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "1.25rem" }}>🕵️</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Chips */}
                <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginTop: "8px" }}>
                  {[
                    { icon: "⚡", title: "AI Analysis", desc: "Contextual understanding" },
                    { icon: "⚙️", title: "Rule Engine", desc: "8/8 checks triggered" },
                    { icon: "🛡️", title: "Attack Simulation", desc: "4-step scenario" },
                    { icon: "🔍", title: "Actionable Guidance", desc: "Personalized steps" },
                  ].map((chip, i) => (
                    <div key={i} style={{ padding: "12px", border: "1px solid var(--glass-border)", borderRadius: "8px", background: "var(--bg)" }}>
                      <div style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "8px" }}>{chip.icon}</div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--text-1)" }}>{chip.title}</div>
                      <div style={{ fontSize: "0.5625rem", color: "var(--text-3)", marginTop: "2px" }}>{chip.desc}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
