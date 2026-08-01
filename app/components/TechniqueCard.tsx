"use client";

/**
 * components/TechniqueCard.tsx — Light expandable technique card
 */

import { useState } from "react";
import type { TechniqueDetected } from "@/lib/types";

interface Props {
  technique: TechniqueDetected;
  index: number;
}

export default function TechniqueCard({ technique, index }: Props) {
  const [open, setOpen] = useState(false);
  const id = `technique-${index}`;

  return (
    <div
      style={{
        border: `1px solid ${open ? "var(--glass-border-2)" : "var(--glass-border)"}`,
        borderRadius: "0.5rem",
        overflow: "hidden",
        background: open ? "var(--bg-2)" : "var(--bg-3)",
        transition: "all 0.2s ease",
        boxShadow: open ? "0 4px 6px rgba(0,0,0,0.02)" : "none",
      }}
    >
      <button
        id={id}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          padding: "1rem",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-1)" }}>
          {technique.name}
        </span>
        <span
          aria-hidden="true"
          style={{
            color: "var(--text-3)",
            fontSize: "0.75rem",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={id}
          style={{
            padding: "0 1rem 1rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--glass-border)" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.7 }}>
              {technique.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
