"use client";

import React from "react";
import Image from "next/image";

export default function BottomFeaturesBar() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 0", borderTop: "1px solid #E5E7EB" }}>
      <div className="content-width">
        
        {/* Top Strip: Trusted By Logos */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", padding: "2rem", border: "1px solid #F3F4F6", borderRadius: "16px", marginBottom: "4rem", background: "#FAFAFA" }}>
          <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#6B7280", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            TRUSTED BY SECURITY-FIRST TEAMS WORLDWIDE
          </span>
          {["Atlassian", "Twilio", "Sendgrid", "Datadog", "Cloudflare", "Okta", "Slack"].map(brand => (
            <span key={brand} style={{ fontSize: "1.125rem", fontWeight: 700, color: "#4B5563", opacity: 0.7 }}>
              {/* Approximating logos with text for now, match font style */}
              {brand}
            </span>
          ))}
        </div>

        {/* Middle Split: Timeline & Shield Card */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Left: Timeline Flow */}
          <div>
            <h3 style={{ fontSize: "1rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "3rem" }}>
              HOW PHISHNET WORKS
            </h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              {/* Connecting line */}
              <div style={{ position: "absolute", top: "24px", left: "30px", right: "30px", height: "1px", borderTop: "1px solid #E5E7EB", zIndex: 0 }} />

              {[
                { step: "01", title: "COLLECT", desc: "We collect email, URLs and content in real-time.", icon: "📩" },
                { step: "02", title: "ANALYZE", desc: "AI and 8 engines analyze every element.", icon: "🧠" },
                { step: "03", title: "DETECT", desc: "Threats are identified with high accuracy instantly.", icon: "🎯" },
                { step: "04", title: "EXPLAIN", desc: "Clear insights on what's risky and why.", icon: "📄" },
                { step: "05", title: "PROTECT", desc: "Block, warn and keep you safe ahead.", icon: "🛡️" },
              ].map((s, i) => (
                <div key={i} style={{ width: "18%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  {/* Circular Node */}
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#FFFFFF", border: "1px dashed rgba(211,47,47,0.5)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 0 0 4px #FFFFFF" }}>
                    <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                  </div>
                  {/* Step Label */}
                  <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", marginBottom: "0.25rem" }}>{s.step}</span>
                  <h4 style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", marginBottom: "0.5rem", textTransform: "uppercase" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.625rem", color: "#6B7280", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Shield Card Image */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image 
              src="/shield-card.png" 
              alt="Cyber Threats Don't Sleep" 
              width={600} 
              height={300} 
              style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "16px", border: "1px solid #F3F4F6", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }} 
            />
          </div>

        </div>

        {/* Bottom Strip: Footer Stats */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem", borderTop: "1px solid #E5E7EB", marginTop: "2rem" }}>
          {[
            { stat: "10M+", label: "Threats Detected", sub: "Every Day", icon: "🛡️" },
            { stat: "99.9%", label: "Detection", sub: "Accuracy", icon: "🎯" },
            { stat: "150+", label: "Countries", sub: "Protected", icon: "🌐" },
            { stat: "24/7", label: "Real-Time", sub: "Monitoring", icon: "⏱️" },
            { stat: "Zero", label: "Data Stored", sub: "Or Shared", icon: "🔒" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
               <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(211,47,47,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D32F2F", fontSize: "1.25rem" }}>
                  {s.icon}
               </div>
               <div>
                  <div style={{ fontSize: "1.125rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", lineHeight: 1 }}>{s.stat}</div>
                  <div style={{ fontSize: "0.6875rem", color: "#4B5563", fontWeight: 700, marginTop: "0.25rem" }}>{s.label}</div>
                  <div style={{ fontSize: "0.625rem", color: "#9CA3AF" }}>{s.sub}</div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
