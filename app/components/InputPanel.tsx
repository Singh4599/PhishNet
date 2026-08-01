"use client";

import type { AnalysisType } from "@/lib/types";
import { MAX_CONTENT_LENGTH } from "@/lib/validation";
import { useState } from "react";

interface Props {
  content: string;
  mode: AnalysisType;
  isLoading: boolean;
  error: string | null;
  onContentChange: (v: string) => void;
  onModeChange: (m: AnalysisType) => void;
  onSubmit: () => void;
}

export default function InputPanel({
  content, mode, isLoading, error,
  onContentChange, onModeChange, onSubmit,
}: Props) {
  const [focused, setFocused] = useState(false);
  const charCount = content.length;
  const isOverLimit = charCount > MAX_CONTENT_LENGTH;
  const canSubmit = charCount >= 3 && !isOverLimit && !isLoading;

  const placeholder =
    mode === "text"
      ? "Paste a suspicious email, SMS, or message here…"
      : "Paste a full URL, e.g. https://example.com/suspicious?ref=…";

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && canSubmit) {
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${focused ? "rgba(211,47,47,0.4)" : "rgba(255,255,255,0.08)"}`,
        background: "rgba(10, 15, 18, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: focused
          ? "0 0 0 4px rgba(211,47,47,0.1), 0 20px 40px rgba(0,0,0,0.5)"
          : "0 20px 40px rgba(0,0,0,0.3)",
        transition: "all 0.3s var(--ease-out-expo)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Subtle top inner glow */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

      {/* ── Mode toggle ── */}
      <div
        style={{
          padding: "1rem 1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {/* Segmented control */}
        <div
          role="group"
          aria-label="Content type"
          style={{
            display: "flex",
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "var(--radius-pill)",
            padding: "4px",
            gap: "4px",
          }}
        >
          {(["text", "url"] as const).map((t) => (
            <button
              key={t}
              onClick={() => onModeChange(t)}
              aria-pressed={mode === t}
              style={{
                padding: "0.4rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                background: mode === t ? "rgba(255,255,255,0.1)" : "transparent",
                color: mode === t ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                boxShadow: mode === t ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
              }}
            >
              {t === "text" ? "TEXT / EMAIL" : "URL"}
            </button>
          ))}
        </div>

        {/* Hint */}
        <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "0.05em" }}>
          PRESS <kbd style={{ padding: "0.2em 0.5em", borderRadius: "4px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>⌘</kbd> + <kbd style={{ padding: "0.2em 0.5em", borderRadius: "4px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>ENTER</kbd> TO ANALYZE
        </span>
      </div>

      {/* ── Textarea ── */}
      <div style={{ position: "relative" }}>
        <textarea
          id="content-input"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={isLoading}
          style={{
            width: "100%",
            minHeight: "260px",
            padding: "1.5rem",
            border: "none",
            outline: "none",
            resize: "vertical",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-dm-sans)",
            color: "#FFFFFF",
            background: "transparent",
            boxSizing: "border-box",
          }}
        />
        <style>{`
          #content-input::placeholder { color: rgba(255,255,255,0.2); }
          #content-input:disabled { opacity: 0.5; cursor: not-allowed; }
        `}</style>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          padding: "1rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {/* Char count */}
        <span
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: isOverLimit ? "#FF5252" : "rgba(255,255,255,0.3)",
          }}
        >
          {charCount.toLocaleString()} / {MAX_CONTENT_LENGTH.toLocaleString()} CHARS
        </span>

        {/* Analyse button */}
        <button
          onClick={onSubmit}
          disabled={!canSubmit}
          className={canSubmit ? "btn-red-solid" : ""}
          style={canSubmit ? { padding: "0.75rem 2rem" } : {
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 2rem",
            borderRadius: "var(--radius-pill)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.02)",
            color: "rgba(255,255,255,0.2)",
            fontFamily: "var(--font-rajdhani)",
            fontSize: "0.875rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            cursor: "not-allowed",
            textTransform: "uppercase"
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderTopColor: "#FFFFFF",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                  flexShrink: 0,
                }}
              />
              ANALYZING...
            </>
          ) : (
            <>
              LAUNCH ANALYZER →
            </>
          )}
        </button>
      </div>

      {/* ── Error ── */}
      {error && (
        <div
          style={{
            padding: "1rem 1.5rem",
            borderTop: "1px solid rgba(211,47,47,0.3)",
            backgroundColor: "rgba(211,47,47,0.1)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5252" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <p style={{ fontSize: "0.8125rem", color: "#FF5252", fontWeight: 500, margin: 0 }}>
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
