"use client";

import React from "react";

export default function BottomFeaturesBar() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 0", borderTop: "1px solid #E5E7EB" }}>
      <div className="content-width">
        
        {/* Top Split: Lighthouse vs Timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Left: Security that thinks ahead + Lighthouse */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", color: "#000000", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>
                Security that<br />
                <span style={{ color: "#D32F2F" }}>thinks ahead.</span>
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#4B5563", lineHeight: 1.6, maxWidth: "80%" }}>
                PhishNet doesn't just detect threats, it helps you understand them and stay one step ahead.
              </p>
            </div>
            
            {/* CSS/SVG Wireframe Lighthouse */}
            <div style={{ position: "relative", height: "180px", width: "100%", marginTop: "2rem" }}>
               {/* Grid base */}
               <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px" }} preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 100 Q 20 80, 50 90 T 100 80 V 100 Z" fill="rgba(211,47,47,0.02)" stroke="#E5E7EB" strokeWidth="1" />
                  <path d="M0 100 Q 20 60, 50 70 T 100 60" fill="none" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2 2" />
               </svg>
               {/* Lighthouse Base */}
               <svg style={{ position: "absolute", bottom: "10px", left: "20%", width: "60px", height: "140px" }} viewBox="0 0 60 140">
                  <path d="M20 140 L25 40 L35 40 L40 140 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
                  <path d="M22 100 L38 100 M24 60 L36 60" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Top glass room */}
                  <rect x="23" y="20" width="14" height="20" fill="rgba(211,47,47,0.1)" stroke="#D32F2F" strokeWidth="1.5" />
                  <circle cx="30" cy="30" r="4" fill="#D32F2F" />
                  {/* Roof */}
                  <path d="M20 20 L30 10 L40 20 Z" fill="#D32F2F" />
               </svg>
               {/* Red Light Beam */}
               <svg style={{ position: "absolute", bottom: "110px", left: "20%", width: "150px", height: "40px", transform: "translateX(25px)" }}>
                 <path d="M0 20 L150 0 L150 40 Z" fill="linear-gradient(90deg, rgba(211,47,47,0.2), transparent)" />
               </svg>
            </div>
          </div>

          {/* Right: Timeline Flow */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: "3px", height: "16px", background: "#D32F2F" }} />
              <span style={{ fontSize: "0.875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                HOW PHISHNET WORKS
              </span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              {/* Connecting dashed line */}
              <div style={{ position: "absolute", top: "24px", left: "40px", right: "40px", height: "1px", borderTop: "1px dashed #E5E7EB", zIndex: 0 }} />

              {[
                { step: "01", title: "DETECT", desc: "Advanced engines scan for known & unknown threats.", icon: "🎯" },
                { step: "02", title: "ANALYZE", desc: "AI understands context, intent, and hidden patterns.", icon: "🧠" },
                { step: "03", title: "SIMULATE", desc: "We simulate the attacker's move so you know the impact.", icon: "⚙️" },
                { step: "04", title: "EXPLAIN", desc: "Clear, actionable insights so you can be 100% sure.", icon: "📄" },
                { step: "05", title: "PROTECT", desc: "Take action and stay protected from future threats.", icon: "🛡️" },
              ].map((s, i) => (
                <div key={i} style={{ width: "18%", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
                  {/* Hexagon Node */}
                  <div style={{ width: "48px", height: "54px", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "#FFFFFF", border: "2px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                  </div>
                  {/* Step Label */}
                  <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#D32F2F", marginBottom: "0.25rem" }}>{s.step}</span>
                  <h4 style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", marginBottom: "0.5rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.625rem", color: "#6B7280", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip: Trusted By & Black Card */}
        <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E7EB", borderRadius: "12px", background: "#F9FAFB", overflow: "hidden" }}>
          
          {/* Trusted By Logos */}
          <div style={{ flexGrow: 1, display: "flex", alignItems: "center", padding: "1.5rem 2rem" }}>
            <div style={{ width: "150px" }}>
              <span style={{ fontSize: "0.625rem", fontFamily: "var(--font-rajdhani)", fontWeight: 800, color: "#000000", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                TRUSTED BY SECURITY-FOCUSED<br />TEAMS WORLDWIDE <span style={{ color: "#D32F2F" }}>•</span>
              </span>
            </div>
            <div style={{ flexGrow: 1, display: "flex", justifyContent: "space-around", opacity: 0.6 }}>
              {["Atlassian", "Twilio", "Sendgrid", "Datadog", "Loom", "Shopify", "Slack"].map(brand => (
                <span key={brand} style={{ fontSize: "0.875rem", fontWeight: 700, color: "#4B5563" }}>{brand}</span>
              ))}
            </div>
          </div>

          {/* Black Card */}
          <div style={{ width: "300px", background: "#000000", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
             <div style={{ position: "relative", zIndex: 1 }}>
               <h4 style={{ color: "#FFFFFF", fontSize: "0.875rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, marginBottom: "0.25rem" }}>Your shield in the digital world.</h4>
               <p style={{ color: "#9CA3AF", fontSize: "0.625rem" }}>PhishNet keeps you safe, always.</p>
             </div>
             {/* Red Fingerprint SVG */}
             <div style={{ position: "absolute", right: "-10px", bottom: "-10px", opacity: 0.5 }}>
               <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="0.5">
                 <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2z" strokeDasharray="4 4" />
                 <path d="M12 6a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6A6 6 0 0 0 12 6z" strokeDasharray="2 2" />
                 <path d="M12 10a2 2 0 0 0-2 2c0 1.105.895 2 2 2s2-.895 2-2a2 2 0 0 0-2-2z" />
               </svg>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
