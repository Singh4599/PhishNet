"use client";

/**
 * app/page.tsx — PhishNet main page
 *
 * State machine:
 *   idle → loading → result (or error) → idle (reset)
 *
 * Manages: content, mode, isLoading, result, error
 *
 * Features:
 * - Ctrl/Cmd+Enter keyboard submission
 * - Auto-scroll to result after analysis
 * - Reset: clears result, error, input, scrolls back up, returns focus
 */

import { useCallback, useRef, useState } from "react";
import type { AnalysisType, FinalAnalysis } from "@/lib/types";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InputPanel from "./components/InputPanel";
import LoadingResult from "./components/LoadingResult";
import ResultCard from "./components/ResultCard";
import HowItWorks from "./components/HowItWorks";
import TrustStrip from "./components/TrustStrip";
import Footer from "./components/Footer";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [content, setContent] = useState("");
  const [mode, setMode] = useState<AnalysisType>("text");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FinalAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  // ── Submit handler ──────────────────────────────────────────────────────────

  const handleSubmit = useCallback(async () => {
    if (isLoading) return;
    if (content.trim().length < 3) {
      setError("Please paste some content before starting the analysis.");
      return;
    }

    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: content.trim(), type: mode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error ??
            "Something went wrong. Please try again."
        );
        return;
      }

      setResult(data as FinalAnalysis);

      // Scroll to result after a short paint delay
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch {
      setError(
        "Unable to reach the analysis service. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [content, mode, isLoading]);

  // ── Reset handler ───────────────────────────────────────────────────────────

  const handleReset = useCallback(() => {
    setResult(null);
    setError(null);
    setContent("");
    setMode("text");

    // Scroll back to top, then focus the textarea
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const textarea = document.getElementById("content-input");
      textarea?.focus();
    }, 100);
  }, []);

  // ── Mode change handler (also clears content on switch) ────────────────────

  const handleModeChange = useCallback(
    (newMode: AnalysisType) => {
      setMode(newMode);
      setError(null);
      // Don't clear content on mode switch — let user keep what they typed
    },
    []
  );

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* Sticky header */}
      <Header />

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <div className="content-width">
          {/* Hero */}
          <HeroSection />

          {/* Analysis zone */}
          <div
            ref={inputRef}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              maxWidth: "760px",
              marginInline: "auto",
              paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            {/* Input panel — always visible */}
            <InputPanel
              content={content}
              mode={mode}
              isLoading={isLoading}
              error={error}
              onContentChange={setContent}
              onModeChange={handleModeChange}
              onSubmit={handleSubmit}
            />

            {/* Trust strip — shown only when idle */}
            {!isLoading && !result && <TrustStrip />}

            {/* Loading skeleton */}
            {isLoading && <LoadingResult />}

            {/* Result card */}
            {result && !isLoading && (
              <div ref={resultRef}>
                <ResultCard analysis={result} onReset={handleReset} />
              </div>
            )}
          </div>

          {/* How it works — shown when idle */}
          {!isLoading && !result && <HowItWorks />}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
