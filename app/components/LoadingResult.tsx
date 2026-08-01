"use client";

/**
 * components/LoadingResult.tsx — Light premium skeleton with scan animation
 */

import { useEffect, useState } from "react";

const MESSAGES = [
  "Running rule-based security checks…",
  "Extracting and analysing URLs…",
  "Querying Gemini AI engine…",
  "Detecting social engineering…",
  "Merging risk signals…",
];

function Skel({ w = "100%", h = "1rem", r = "6px" }: { w?: string; h?: string; r?: string }) {
  return <div className="skeleton" style={{ width: w, height: h, borderRadius: r }} aria-hidden="true" />;
}

export default function LoadingResult() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Analysis in progress"
      className="glass-card"
      style={{ overflow: "hidden", backgroundColor: "var(--bg-2)" }}
    >
      {/* Scan animation bar */}
      <div
        style={{
          position: "relative",
          height: "2px",
          background: "var(--bg-3)",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "40%",
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
            animation: "scan 1.4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Status message */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid var(--glass-border)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          backgroundColor: "var(--bg)",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            border: "2px solid var(--glass-border-2)",
            borderTopColor: "var(--primary)",
            borderRadius: "50%",
            animation: "spin 0.7s linear infinite",
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <span
          key={idx}
          style={{
            fontSize: "0.875rem",
            color: "var(--text-2)",
            animation: "fadeIn 0.3s ease",
            fontWeight: 500,
          }}
        >
          {MESSAGES[idx]}
        </span>
      </div>

      {/* Skeletons */}
      <div style={{ padding: "1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Skel w="80px" h="28px" r="8px" />
          <Skel w="180px" h="1.125rem" />
          <Skel w="64px" h="2.25rem" r="8px" />
        </div>
        <Skel w="100%" h="8px" r="999px" />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          <Skel w="140px" h="0.7rem" />
          {[0, 1].map((i) => (
            <div key={i} style={{ padding: "0.875rem", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-btn)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Skel w="160px" h="0.9375rem" />
              <Skel w="90%" h="0.875rem" />
              <Skel w="70%" h="0.875rem" />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Skel w="120px" h="0.7rem" />
          {[0, 1, 2].map((i) => (
            <Skel key={i} w={`${85 + i * 4}%`} h="0.875rem" />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
