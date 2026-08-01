"use client";

/**
 * components/InputPanel.tsx
 *
 * The primary analysis input interface:
 * - Text / URL segmented toggle
 * - Large textarea with char count
 * - Analyze button (default, loading, disabled states)
 * - Error display
 * - 3 sample preset buttons (populate only — no auto-submit)
 * - Safety note
 * - Accessible: labels, aria attributes, keyboard support
 */

import type { AnalysisType } from "@/lib/types";
import { MAX_CONTENT_LENGTH } from "@/lib/validation";

// ─── Presets ──────────────────────────────────────────────────────────────────

const PRESETS = [
  {
    id: "preset-bank",
    label: "🏦 Fake bank alert",
    type: "text" as const,
    content:
      "Dear Customer, your SBI account has been locked due to suspicious activity. Verify immediately at https://sbi-secure-verify.xyz/login or your account will be permanently closed within 24 hours. Enter your OTP and password to restore access.",
  },
  {
    id: "preset-delivery",
    label: "📦 Delivery scam",
    type: "url" as const,
    content: "https://fedex-delivery-confirm.click/track?pkg=A9921&action=confirm",
  },
  {
    id: "preset-safe",
    label: "✅ Safe message",
    type: "text" as const,
    content:
      "Hi Sarah, just a reminder that our team sync is at 3 PM today. The agenda doc is in the shared drive. See you there!",
  },
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface InputPanelProps {
  content: string;
  mode: AnalysisType;
  isLoading: boolean;
  error: string | null;
  onContentChange: (value: string) => void;
  onModeChange: (mode: AnalysisType) => void;
  onSubmit: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function InputPanel({
  content,
  mode,
  isLoading,
  error,
  onContentChange,
  onModeChange,
  onSubmit,
}: InputPanelProps) {
  const charCount = content.length;
  const isOverLimit = charCount > MAX_CONTENT_LENGTH;
  const canSubmit = charCount >= 3 && !isOverLimit && !isLoading;

  const textareaPlaceholder =
    mode === "text"
      ? "Paste a suspicious email, SMS, or message here…"
      : "Paste a full URL, e.g. https://example.com/login?ref=…";

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && canSubmit) {
      e.preventDefault();
      onSubmit();
    }
  }

  function applyPreset(preset: (typeof PRESETS)[number]) {
    onModeChange(preset.type);
    onContentChange(preset.content);
  }

  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
      }}
    >
      {/* ── Toggle + preset strip ── */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {/* Segmented toggle */}
        <div
          role="group"
          aria-label="Content type"
          style={{
            display: "flex",
            backgroundColor: "var(--color-background)",
            borderRadius: "0.5rem",
            padding: "3px",
            border: "1px solid var(--color-border)",
          }}
        >
          {(["text", "url"] as const).map((t) => (
            <button
              key={t}
              id={`mode-${t}`}
              onClick={() => onModeChange(t)}
              aria-pressed={mode === t}
              style={{
                padding: "0.3125rem 0.875rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                transition: "all 0.15s ease",
                backgroundColor:
                  mode === t ? "var(--color-primary)" : "transparent",
                color:
                  mode === t ? "#fff" : "var(--color-text-secondary)",
                fontFamily: "inherit",
              }}
            >
              {t === "text" ? "Text / Email" : "URL"}
            </button>
          ))}
        </div>

        {/* Sample presets */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              id={preset.id}
              onClick={() => applyPreset(preset)}
              disabled={isLoading}
              title={`Load preset: ${preset.label}`}
              style={{
                padding: "0.25rem 0.625rem",
                borderRadius: "0.375rem",
                border: "1px solid var(--color-border)",
                cursor: isLoading ? "not-allowed" : "pointer",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--color-text-secondary)",
                backgroundColor: "transparent",
                transition: "all 0.15s ease",
                fontFamily: "inherit",
                opacity: isLoading ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--color-primary)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-primary)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--color-border)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-text-secondary)";
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Textarea ── */}
      <div style={{ padding: "0" }}>
        <label htmlFor="content-input" className="sr-only">
          {mode === "text" ? "Message or email content" : "URL to analyse"}
        </label>
        <textarea
          id="content-input"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={textareaPlaceholder}
          disabled={isLoading}
          aria-label={mode === "text" ? "Message or email content" : "URL to analyse"}
          aria-describedby="char-count content-error"
          style={{
            width: "100%",
            minHeight: "180px",
            padding: "1.125rem 1.25rem",
            border: "none",
            resize: "vertical",
            fontSize: "0.9375rem",
            lineHeight: 1.65,
            fontFamily: "inherit",
            color: "var(--color-text-primary)",
            backgroundColor: isLoading ? "var(--color-background)" : "var(--color-surface)",
            outline: "none",
            transition: "background-color 0.2s ease",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* ── Footer: char count + submit ── */}
      <div
        style={{
          padding: "0.875rem 1.25rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Character count */}
        <span
          id="char-count"
          style={{
            fontSize: "0.75rem",
            color: isOverLimit ? "var(--color-danger)" : "var(--color-text-secondary)",
            fontWeight: isOverLimit ? 600 : 400,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {charCount.toLocaleString()} / {MAX_CONTENT_LENGTH.toLocaleString()}
        </span>

        {/* Analyze button */}
        <button
          id="analyze-button"
          onClick={onSubmit}
          disabled={!canSubmit}
          aria-label="Analyze content for phishing"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.625rem 1.5rem",
            borderRadius: "var(--radius-btn)",
            border: "none",
            cursor: canSubmit ? "pointer" : "not-allowed",
            fontSize: "0.9375rem",
            fontWeight: 600,
            fontFamily: "inherit",
            letterSpacing: "-0.01em",
            backgroundColor: canSubmit
              ? "var(--color-primary)"
              : "var(--color-border)",
            color: canSubmit ? "#fff" : "var(--color-text-secondary)",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            if (canSubmit) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-primary-hover)";
            }
          }}
          onMouseLeave={(e) => {
            if (canSubmit) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-primary)";
            }
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  display: "inline-block",
                  width: "14px",
                  height: "14px",
                  border: "2px solid rgba(255,255,255,0.4)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                }}
                aria-hidden="true"
              />
              Analysing…
            </>
          ) : (
            <>
              <span aria-hidden="true">→</span>
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
            padding: "0.75rem 1.25rem",
            borderTop: "1px solid var(--color-danger)",
            backgroundColor: "var(--color-danger-bg)",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <span
            style={{ fontSize: "0.875rem", flexShrink: 0, marginTop: "1px" }}
            aria-hidden="true"
          >
            ⚠️
          </span>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-danger)",
              lineHeight: 1.5,
            }}
          >
            {error}
          </p>
        </div>
      )}

      {/* ── Safety note ── */}
      <p
        style={{
          padding: "0.625rem 1.25rem",
          fontSize: "0.75rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.5,
          borderTop: error ? "none" : "1px solid var(--color-border)",
          backgroundColor: "var(--color-background)",
        }}
      >
        <strong>Tip:</strong> Press{" "}
        <kbd
          style={{
            padding: "0.1em 0.4em",
            borderRadius: "3px",
            border: "1px solid var(--color-border)",
            fontSize: "0.7em",
            fontFamily: "monospace",
          }}
        >
          ⌘ Enter
        </kbd>{" "}
        or{" "}
        <kbd
          style={{
            padding: "0.1em 0.4em",
            borderRadius: "3px",
            border: "1px solid var(--color-border)",
            fontSize: "0.7em",
            fontFamily: "monospace",
          }}
        >
          Ctrl Enter
        </kbd>{" "}
        to submit. Content is analysed in real time and never stored.
      </p>

      {/* Spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }
      `}</style>
    </div>
  );
}
