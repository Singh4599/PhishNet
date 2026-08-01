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
        paddingTop: "6rem",
        paddingBottom: "4rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="content-width" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* ── LEFT COLUMN: Text & Input ── */}
          <div style={{ flex: "0 0 45%" }}>
            
            {/* Tech Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", padding: "0.25rem 0.75rem", border: "1px solid #F3F4F6", borderRadius: "999px", background: "#FFFFFF" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D32F2F" }} />
              <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#4B5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                AI + BEHAVIORAL ANALYSIS + THREAT INTELLIGENCE
              </span>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D32F2F" }} />
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "4rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 900,
                color: "#0A0F12",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              PHISHING EVOLVES.<br />
              <span style={{ color: "#D32F2F" }}>SO DO WE.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.125rem",
                color: "#4B5563",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                fontWeight: 500,
                maxWidth: "90%"
              }}
            >
              PhishNet uses advanced AI, behavioral analytics and
              real-time threat intelligence to detect, block and
              eliminate phishing threats before they reach you.
            </p>

            {/* Feature Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
              {[
                { icon: "🛡️", title: "AI POWERED DETECTION", desc: "Machine learning that adapts." },
                { icon: "⚡", title: "REAL TIME PROTECTION", desc: "Stops threats in real-time." },
                { icon: "🌐", title: "GLOBAL THREAT INTELLIGENCE", desc: "Always one step ahead." },
                { icon: "🔒", title: "PRIVACY FIRST", desc: "Your data stays private." },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid rgba(211,47,47,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D32F2F", fontSize: "0.875rem", flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", marginBottom: "0.25rem", letterSpacing: "0.05em" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.625rem", color: "#6B7280" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "999px", padding: "0.5rem", paddingLeft: "1.5rem", display: "flex", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", marginBottom: "1.5rem" }}>
              <div style={{ color: "#D32F2F", marginRight: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", border: "1px dashed rgba(211,47,47,0.5)", borderRadius: "4px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Paste an email, link or message to analyze..."
                style={{ flexGrow: 1, background: "transparent", border: "none", color: "#000000", fontSize: "0.875rem", outline: "none" }}
              />
              <button onClick={handleAnalyze} style={{ background: "rgba(211,47,47,0.05)", border: "1px solid rgba(211,47,47,0.2)", color: "#D32F2F", padding: "0.75rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, borderRadius: "999px", transition: "all 0.2s" }}>
                ANALYZE →
              </button>
            </div>

            {/* Try a Sample */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#D32F2F", textTransform: "uppercase" }}>TRY A SAMPLE:</span>
              {["Fake Bank Alert", "Delivery Scam", "Prize Email", "Normal Message"].map(chip => (
                <button key={chip} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", padding: "0.375rem 1rem", borderRadius: "999px", fontSize: "0.6875rem", color: "#4B5563", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="#000000"} onMouseLeave={e => e.currentTarget.style.color="#4B5563"}>
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* ── RIGHT COLUMN: Exact Terminal Image ── */}
          <div style={{ flex: "0 0 50%", display: "flex", justifyContent: "flex-end" }}>
            <Image 
              src="/terminal.png" 
              alt="Threat Analysis Dashboard" 
              width={700} 
              height={550} 
              style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))" }} 
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
