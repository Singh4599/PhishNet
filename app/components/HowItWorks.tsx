"use client";

import React, { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Collect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    desc: "Paste any email, URL, SMS, or message. PhishNet accepts raw text, HTML source, or links — no pre-processing needed from your side.",
    details: ["Emails & HTML content", "URLs and shortened links", "SMS and chat messages", "Social media DMs"],
  },
  {
    num: "02",
    title: "Analyze",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    desc: "8 specialized security engines run simultaneously, each inspecting different threat vectors — from domain reputation to linguistic manipulation patterns.",
    details: ["Domain & URL reputation", "Sender authentication (SPF/DKIM)", "NLP threat classification", "Brand impersonation detection"],
  },
  {
    num: "03",
    title: "Detect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    desc: "AI reasoning cross-references all engine outputs to produce a final, holistic threat verdict — eliminating false positives and catching sophisticated attacks.",
    details: ["Risk score 0-100", "Threat category classification", "Attack vector identification", "Severity level tagging"],
  },
  {
    num: "04",
    title: "Explain",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    desc: "Every verdict comes with a clear, human-readable breakdown. You'll know exactly what triggered the alert, what the attacker's goal was, and why it's dangerous.",
    details: ["Plain-english explanations", "Per-engine breakdown", "Evidence highlighting", "Attacker intent analysis"],
  },
  {
    num: "05",
    title: "Protect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    desc: "Armed with the full picture, take confident action — block, report, or forward to your security team. PhishNet also shows simulated attack paths so you know exactly what to avoid.",
    details: ["One-click reporting", "Attack path simulation", "Shareable report link", "Team alert integration"],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      style={{
        padding: "7rem 0",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="content-width">

        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
              How It Works
            </div>
            <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              FROM PASTE TO<br />
              <span style={{ color: "var(--red)" }}>PROTECTED</span>, IN SECONDS.
            </h2>
          </div>
          <p style={{ maxWidth: "320px", fontSize: "0.9375rem", color: "var(--text-3)", lineHeight: 1.7, textAlign: "right" }}>
            A five-stage pipeline that covers every angle of a modern phishing attack, powered by 8 specialized AI engines.
          </p>
        </div>

        {/* Step Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "0" }}>
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.5rem",
                background: "transparent",
                border: "none",
                borderBottom: `2px solid ${activeStep === i ? "var(--red)" : "transparent"}`,
                color: activeStep === i ? "var(--red)" : "var(--text-3)",
                fontFamily: "var(--font-rajdhani)",
                fontSize: "0.875rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                marginBottom: "-1px",
              }}
              onMouseEnter={e => { if (activeStep !== i) e.currentTarget.style.color = "var(--text-1)"; }}
              onMouseLeave={e => { if (activeStep !== i) e.currentTarget.style.color = "var(--text-3)"; }}
            >
              <span style={{ fontSize: "0.5625rem", opacity: 0.6 }}>{s.num}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              display: activeStep === i ? "grid" : "none",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left: Description */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-md)", background: "var(--text-1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "var(--text-4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Step {s.num}</div>
                  <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{s.title}</h3>
                </div>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, marginBottom: "2.5rem" }}>{s.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {s.details.map((d, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--red-light)", border: "1px solid var(--red-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-2)", fontWeight: 500 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual panel */}
            <div style={{ background: "var(--text-1)", borderRadius: "var(--radius-lg)", padding: "2rem", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              {/* Subtle scanline effect */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)", pointerEvents: "none" }} />

              {/* Top header strip */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF5F57" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FEBC2E" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  STEP {s.num} — {s.title.toUpperCase()}
                </div>
              </div>

              {/* Content visualization */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {i === 0 && (
                  <>
                    <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-sm)", padding: "1rem" }}>
                      <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>INPUT</div>
                      <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", fontFamily: "monospace", lineHeight: 1.6 }}>
                        "URGENT: Your account will be suspended. Verify at chase-secure-login.net immediately..."
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      {["Email", "URL", "SMS", "HTML"].map(t => (
                        <div key={t} style={{ padding: "0.375rem 0.875rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-pill)", fontSize: "0.625rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em" }}>
                          {t}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {i === 1 && (
                  <>
                    {["Domain Reputation", "Content NLP", "Brand Match", "Sender Auth", "URL Scanner", "Behavior AI", "Urgency Detector", "Link Analyzer"].map((eng, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.4)", width: "120px", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.03em" }}>{eng}</div>
                        <div style={{ flex: 1, height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${60 + (j * 17) % 40}%`, background: j % 3 === 0 ? "#D32F2F" : "rgba(255,255,255,0.5)", borderRadius: "2px", transition: "width 1s" }} />
                        </div>
                        <div style={{ fontSize: "0.625rem", color: j % 3 === 0 ? "#FF5252" : "rgba(255,255,255,0.4)", fontFamily: "var(--font-rajdhani)", fontWeight: 700, width: "40px", textAlign: "right" }}>
                          {j % 3 === 0 ? "HIGH" : "OK"}
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {i === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ textAlign: "center", padding: "1.5rem" }}>
                      <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>VERDICT</div>
                      <div style={{ fontSize: "3rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#D32F2F", letterSpacing: "-0.02em" }}>DANGEROUS</div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>High risk phishing attempt detected</div>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.25rem" }}>
                        <span style={{ fontSize: "3.5rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#D32F2F" }}>82</span>
                        <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)" }}>/100 risk score</span>
                      </div>
                    </div>
                  </div>
                )}
                {i === 3 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {["Credential Harvesting — Targets your login username & password", "Urgency Manipulation — Creates panic to bypass rational thought", "Domain Spoofing — chase-secure-login.net mimics Chase Bank"].map((item, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem", background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-sm)" }}>
                        <div style={{ width: "16px", height: "16px", background: "rgba(211,47,47,0.2)", border: "1px solid rgba(211,47,47,0.4)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="3"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
                        </div>
                        <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {i === 4 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { label: "Do not click any links in the message", done: true },
                      { label: "Report to your IT/security team", done: false },
                      { label: "Block the sender immediately", done: false },
                      { label: "Share this PhishNet report link", done: false },
                    ].map((action, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.875rem 1rem", background: action.done ? "rgba(211,47,47,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${action.done ? "rgba(211,47,47,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: "var(--radius-sm)" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: action.done ? "var(--red)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {action.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                        <span style={{ fontSize: "0.8125rem", color: action.done ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)", fontWeight: action.done ? 600 : 400 }}>{action.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom progress bar */}
              <div style={{ display: "flex", gap: "0.375rem", marginTop: "1.5rem" }}>
                {steps.map((_, j) => (
                  <div key={j} style={{ flex: 1, height: "3px", borderRadius: "2px", background: j <= i ? "var(--red)" : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Prev/Next nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", background: "transparent", border: "1px solid var(--border)", borderRadius: "var(--radius-pill)", color: activeStep === 0 ? "var(--text-4)" : "var(--text-1)", cursor: activeStep === 0 ? "default" : "pointer", fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", transition: "all 0.2s" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            PREVIOUS
          </button>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {steps.map((_, i) => (
              <button key={i} onClick={() => setActiveStep(i)} style={{ width: i === activeStep ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === activeStep ? "var(--red)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
          <button
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", background: activeStep === 4 ? "var(--bg-soft)" : "var(--text-1)", border: "1px solid transparent", borderRadius: "var(--radius-pill)", color: activeStep === 4 ? "var(--text-4)" : "#FFFFFF", cursor: activeStep === 4 ? "default" : "pointer", fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.05em", transition: "all 0.2s" }}
          >
            NEXT STEP
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
