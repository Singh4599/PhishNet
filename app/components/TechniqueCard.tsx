"use client";

/**
 * components/TechniqueCard.tsx
 * Expandable card for a single detected technique.
 * - Collapsed: shows name only
 * - Expanded: shows full explanation
 * - aria-expanded, keyboard accessible
 */

import { useState } from "react";
import type { TechniqueDetected } from "@/lib/types";

interface Props {
  technique: TechniqueDetected;
  index: number;
}

export default function TechniqueCard({ technique, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const id = `technique-${index}`;
  const panelId = `${id}-panel`;

  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "0.5rem",
        overflow: "hidden",
        backgroundColor: "var(--color-surface)",
      }}
    >
      {/* Toggle button */}
      <button
        id={id}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          padding: "0.75rem 0.875rem",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
          }}
        >
          {technique.name}
        </span>

        {/* Chevron */}
        <span
          aria-hidden="true"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
            transition: "transform 0.2s ease",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          ▾
        </span>
      </button>

      {/* Expanded panel */}
      {expanded && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={id}
          style={{
            padding: "0 0.875rem 0.875rem",
            borderTop: "1px solid var(--color-border)",
            paddingTop: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
            }}
          >
            {technique.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
