"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const [focused, setFocused] = useState(false);

  const handleAnalyze = () => {
    if (inputVal.trim()) {
      router.push("/scan");
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAnalyze();
  };

  const loadSample = (text: string) => {
    setInputVal(text);
  };

  const samples: Record<string, string> = {
    "Fake Bank Alert": "URGENT: Your Chase account has been suspended. Verify immediately at chase-secure-login.net to restore access. Failure to do so will result in permanent account closure.",
    "Delivery Scam": "Your package #UPS-4872991 is on hold due to a customs fee of $2.99. Pay now at ups-delivery-hold.com to release your shipment.",
    "Prize Email": "Congratulations! You have been selected as our lucky winner. Click here to claim your $5,000 Amazon gift card: claimprize-now.tk",
    "Normal Message": "Hi, just wanted to confirm our meeting tomorrow at 3pm. Let me know if you need to reschedule. Thanks!",
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Subtle background grid */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      {/* Red glow blob */}
      <div style={{ position: "absolute", top: "20%", right: "30%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(211,47,47,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ flex: "0 0 46%", animation: "fadeInUp 0.6s var(--ease-out-expo) both" }}>

            {/* Badge */}
            <div className="section-badge" style={{ marginBottom: "2rem" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--red)", animation: "pulseRed 2s infinite" }} />
              AI + Behavioral Analysis + Threat Intelligence
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 900,
                color: "var(--text-1)",
                lineHeight: 1.03,
                marginBottom: "1.75rem",
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
              }}
            >
              PHISHING<br />EVOLVES.<br />
              <span style={{ color: "var(--red)", display: "inline-block", position: "relative" }}>
                SO DO WE.
                <svg style={{ position: "absolute", bottom: "-10px", left: 0, width: "100%", height: "12px", overflow: "visible" }} viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 100,5 T198,10" stroke="var(--red)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: "1.0625rem", color: "var(--text-2)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "88%", fontWeight: 400 }}>
              PhishNet uses advanced AI, behavioral analytics and real-time
              threat intelligence to detect, block and eliminate phishing
              threats before they reach you.
            </p>

            {/* Input Box */}
            <div
              style={{
                background: "#FFFFFF",
                border: `1.5px solid ${focused ? "var(--red)" : "var(--border)"}`,
                borderRadius: "var(--radius-pill)",
                padding: "0.375rem 0.375rem 0.375rem 1.5rem",
                display: "flex",
                alignItems: "center",
                boxShadow: focused ? "0 0 0 4px rgba(211,47,47,0.08)" : "var(--shadow-sm)",
                marginBottom: "1.25rem",
                transition: "all 0.25s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2" style={{ flexShrink: 0, marginRight: "0.75rem" }}><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKey}
                placeholder="Paste an email, link or message to analyze..."
                style={{
                  flexGrow: 1,
                  background: "transparent",
                  border: "none",
                  color: "var(--text-1)",
                  fontSize: "0.9375rem",
                  outline: "none",
                  fontFamily: "var(--font-dm-sans)",
                }}
              />
              <button
                onClick={handleAnalyze}
                className="btn-red-solid"
                style={{ fontSize: "0.8125rem", padding: "0.75rem 1.5rem" }}
              >
                ANALYZE →
              </button>
            </div>

            {/* Try a Sample */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                TRY A SAMPLE:
              </span>
              {Object.keys(samples).map(chip => (
                <button
                  key={chip}
                  onClick={() => loadSample(samples[chip])}
                  style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", padding: "0.3rem 0.875rem", borderRadius: "var(--radius-pill)", fontSize: "0.6875rem", color: "var(--text-2)", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--text-1)"; e.currentTarget.style.color = "var(--text-1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-2)"; }}
                >
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* ── RIGHT COLUMN: Terminal Dashboard ── */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", animation: "fadeInUp 0.8s var(--ease-out-expo) 0.1s both" }}>
            <div style={{ position: "relative", width: "100%" }}>
              {/* Glow behind the image */}
              <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(ellipse at center, rgba(211,47,47,0.06) 0%, transparent 70%)", borderRadius: "24px", zIndex: 0 }} />
              <Image
                src="/terminal.png"
                alt="PhishNet Threat Analysis Dashboard"
                width={700}
                height={550}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "16px",
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))",
                  position: "relative",
                  zIndex: 1,
                }}
                priority
              />
              {/* Floating stats badges */}
              <div style={{ position: "absolute", bottom: "10%", left: "-40px", background: "#0A0F12", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: "0.625rem", zIndex: 10 }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(211,47,47,0.15)", border: "1px solid rgba(211,47,47,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.8125rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#FFFFFF" }}>10M+ Threats</div>
                  <div style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.5)" }}>Detected daily</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: "12%", right: "-30px", background: "#0A0F12", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: "0.625rem", zIndex: 10 }}>
                <div style={{ fontSize: "1.25rem" }}>🎯</div>
                <div>
                  <div style={{ fontSize: "0.8125rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#FFFFFF" }}>99.9% Accuracy</div>
                  <div style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.5)" }}>Detection rate</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
