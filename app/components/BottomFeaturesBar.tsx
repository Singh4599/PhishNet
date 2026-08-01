"use client";

import React from "react";

const stats = [
  { val: "10M+", label: "Threats Detected", sub: "Every day, worldwide", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { val: "99.9%", label: "Detection Accuracy", sub: "Industry leading rate", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
  { val: "150+", label: "Countries Protected", sub: "Global coverage", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { val: "24/7", label: "Real-Time Monitoring", sub: "Never offline", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { val: "Zero", label: "Data Stored", sub: "100% private", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
];

export default function BottomFeaturesBar() {
  return (
    <section
      style={{
        padding: "5rem 0",
        background: "var(--text-1)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="content-width">

        <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
          
          {/* Left label */}
          <div style={{ flexShrink: 0, maxWidth: "200px" }}>
            <div style={{ width: "32px", height: "3px", background: "var(--red)", marginBottom: "1rem", borderRadius: "2px" }} />
            <h3 style={{ fontSize: "1.375rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              PHISHNET<br />
              <span style={{ color: "var(--red)" }}>BY THE NUMBERS</span>
            </h3>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "80px", background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />

          {/* Stats row */}
          <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.5rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(211,47,47,0.15)", border: "1px solid rgba(211,47,47,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)", marginBottom: "0.25rem" }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: "1.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>{s.label}</div>
                  <div style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.06)" }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
