"use client";

import React from "react";

export default function BottomFeaturesBar() {
  return (
    <section style={{ borderTop: "1px solid var(--glass-border)", backgroundColor: "var(--bg)", padding: "3rem 0" }}>
      <div className="content-width">
        <div
          style={{
            background: "var(--bg-3)",
            borderRadius: "16px",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          
          {/* Banner Text */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-1)", lineHeight: 1.3 }}>
              Built to protect.<br />
              Designed to educate.
            </h2>
          </div>

          {/* 4 Line Icons Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <polyline points="11 8 11 11 14 14" />
                  </svg>
                ),
                title: "Detect",
                desc: "Advanced AI + rule engine spot threats others miss."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                ),
                title: "Understand",
                desc: "Know exactly what's suspicious and why."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Prevent",
                desc: "Get clear steps to stay safe and secure."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
                title: "Learn",
                desc: "Every scan helps you become more aware."
              }
            ].map((item, i) => (
              <div key={i}>
                <div style={{ marginBottom: "12px" }}>{item.icon}</div>
                <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-1)", marginBottom: "4px" }}>{item.title}</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--text-2)", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
