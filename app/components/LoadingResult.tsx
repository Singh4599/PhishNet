"use client";

/**
 * components/LoadingResult.tsx
 *
 * Skeleton loading state shown while the API call is in progress.
 * - Pulse skeletons for all result sections
 * - Rotating status text messages (5 messages, 1.2s interval)
 */

import { useEffect, useState } from "react";

const STATUS_MESSAGES = [
  "Running security checks…",
  "Analysing link structure…",
  "Sending to Gemini AI…",
  "Detecting social engineering…",
  "Merging risk signals…",
];

function Skel({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  style = {},
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius, ...style }}
      aria-hidden="true"
    />
  );
}

export default function LoadingResult() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Analysis in progress"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
      }}
    >
      {/* Status message header */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            border: "2px solid var(--color-border)",
            borderTopColor: "var(--color-primary)",
            borderRadius: "50%",
            animation: "spin 0.7s linear infinite",
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <span
          key={msgIndex}
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--color-text-secondary)",
            animation: "fadeIn 0.3s ease",
          }}
        >
          {STATUS_MESSAGES[msgIndex]}
        </span>
      </div>

      {/* Skeleton body */}
      <div style={{ padding: "1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {/* Verdict row skeleton */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Skel width="90px" height="28px" borderRadius="6px" />
          <Skel width="180px" height="1.125rem" />
          <Skel width="60px" height="2rem" borderRadius="6px" style={{ marginLeft: "auto" }} />
        </div>

        {/* Risk bar skeleton */}
        <div>
          <Skel width="100%" height="10px" borderRadius="999px" />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
            <Skel width="40px" height="0.75rem" />
            <Skel width="40px" height="0.75rem" />
            <Skel width="40px" height="0.75rem" />
          </div>
        </div>

        {/* Technique cards skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          <Skel width="120px" height="0.75rem" />
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                padding: "0.875rem",
                border: "1px solid var(--color-border)",
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Skel width="160px" height="0.9375rem" />
              <Skel width="90%" height="0.875rem" />
              <Skel width="70%" height="0.875rem" />
            </div>
          ))}
        </div>

        {/* Attack simulation skeleton */}
        <div
          style={{
            padding: "1rem",
            border: "1px solid var(--color-border)",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Skel width="140px" height="0.9375rem" />
          <Skel width="100%" height="0.875rem" />
          <Skel width="95%" height="0.875rem" />
          <Skel width="80%" height="0.875rem" />
        </div>

        {/* Recommendations skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Skel width="120px" height="0.75rem" />
          {[1, 2, 3].map((i) => (
            <Skel key={i} width={`${85 + i * 5}%`} height="0.875rem" />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
