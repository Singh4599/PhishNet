"use client";

/**
 * components/InputPanel.tsx — Dark premium input panel
 * - Text/URL toggle (pill segmented control)
 * - Large textarea with glow border on focus
 * - Animated analyse button with glow
 * - Error state
 * - NO demo presets (removed per spec)
 * - Character count
 */

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
        borderRadius: "var(--radius-card)",
        border: `1px solid ${focused ? "var(--primary)" : "var(--glass-border)"}`,
        background: "var(--glass)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: focused
          ? "0 0 0 3px var(--primary-glow-2), 0 20px 60px rgba(0,0,0,0.5)"
          : "0 20px 60px rgba(0,0,0,0.3)",
        transition: "border-color 0.2s ease, box-shadow 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* ── Mode toggle ── */}
      <div
        style={{
          padding: "0.875rem 1.125rem",
          borderBottom: "1px solid var(--glass-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Segmented control */}
        <div
          role="group"
          aria-label="Content type"
          style={{
            display: "flex",
            background: "var(--bg-3)",
            borderRadius: "0.5rem",
            padding: "3px",
            gap: "2px",
          }}
        >
          {(["text", "url"] as const).map((t) => (
            <button
              key={t}
              id={`mode-${t}`}
              onClick={() => onModeChange(t)}
              aria-pressed={mode === t}
              style={{
                padding: "0.3rem 0.875rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                fontSize: "0.8125rem",
                fontWeight: 600,
                fontFamily: "inherit",
                letterSpacing: "0.01em",
                transition: "all 0.15s ease",
                background: mode === t ? "var(--primary)" : "transparent",
                color: mode === t ? "#fff" : "var(--text-3)",
                boxShadow: mode === t ? "0 0 16px var(--primary-glow)" : "none",
              }}
            >
              {t === "text" ? "Text / Email" : "URL"}
            </button>
          ))}
        </div>

        {/* Hint */}
        <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
          <kbd style={{
            padding: "0.15em 0.45em",
            borderRadius: "4px",
            border: "1px solid var(--glass-border-2)",
            fontSize: "0.7em",
            fontFamily: "monospace",
            color: "var(--text-2)",
          }}>⌘</kbd>
          {" "}
          <kbd style={{
            padding: "0.15em 0.45em",
            borderRadius: "4px",
            border: "1px solid var(--glass-border-2)",
            fontSize: "0.7em",
            fontFamily: "monospace",
            color: "var(--text-2)",
          }}>↵</kbd>
          {" "}to submit
        </span>
      </div>

      {/* ── Textarea ── */}
      <div style={{ position: "relative" }}>
        <label htmlFor="content-input" className="sr-only">
          {mode === "text" ? "Message or email content" : "URL to analyse"}
        </label>
        <textarea
          id="content-input"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={isLoading}
          aria-label={mode === "text" ? "Message or email content" : "URL to analyse"}
          aria-describedby="char-count content-error"
          style={{
            width: "100%",
            minHeight: "200px",
            padding: "1.25rem 1.25rem",
            border: "none",
            outline: "none",
            resize: "vertical",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            fontFamily: "inherit",
            color: "var(--text-1)",
            background: "transparent",
            transition: "background 0.2s",
            boxSizing: "border-box",
          }}
        />

        {/* Placeholder styling via CSS */}
        <style>{`
          #content-input::placeholder { color: var(--text-3); }
          #content-input:disabled { opacity: 0.5; cursor: not-allowed; }
        `}</style>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          padding: "0.875rem 1.125rem",
          borderTop: "1px solid var(--glass-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Char count */}
        <span
          id="char-count"
          style={{
            fontSize: "0.75rem",
            fontVariantNumeric: "tabular-nums",
            color: isOverLimit ? "var(--danger)" : "var(--text-3)",
            fontWeight: isOverLimit ? 600 : 400,
          }}
        >
          {charCount.toLocaleString()} / {MAX_CONTENT_LENGTH.toLocaleString()}
        </span>

        {/* Analyse button */}
        <button
          id="analyze-button"
          onClick={onSubmit}
          disabled={!canSubmit}
          aria-label="Analyse content for phishing"
          className={canSubmit ? "btn-primary" : ""}
          style={canSubmit ? {} : {
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6875rem 1.5rem",
            borderRadius: "var(--radius-btn)",
            border: "1px solid var(--glass-border)",
            background: "var(--bg-3)",
            color: "var(--text-3)",
            fontFamily: "inherit",
            fontSize: "0.9375rem",
            fontWeight: 600,
            cursor: "not-allowed",
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              Analysing…
            </>
          ) : (
            <>
              <span aria-hidden="true" style={{ fontSize: "1.1em" }}>→</span>
              Analyse
            </>
          )}
        </button>
      </div>

      {/* ── Error ── */}
      {error && (
        <div
          id="content-error"
          role="alert"
          aria-live="polite"
          style={{
            padding: "0.75rem 1.125rem",
            borderTop: "1px solid var(--danger-border)",
            backgroundColor: "var(--danger-bg)",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.875rem", flexShrink: 0 }} aria-hidden="true">⚠</span>
          <p style={{ fontSize: "0.875rem", color: "var(--danger)", lineHeight: 1.5 }}>
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
