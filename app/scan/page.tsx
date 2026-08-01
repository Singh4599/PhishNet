"use client";

/**
 * app/scan/page.tsx — Tool orchestrator
 * Dedicated route for the phishing scanner
 */

import { useState } from "react";
import type { AnalysisType, FinalAnalysis } from "@/lib/types";

import Header from "../components/Header";
import InputPanel from "../components/InputPanel";
import LoadingResult from "../components/LoadingResult";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";

type ViewState = "idle" | "loading" | "result";

export default function ScanPage() {
  const [content, setContent] = useState("");
  const [mode, setMode] = useState<AnalysisType>("text");
  const [viewState, setViewState] = useState<ViewState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FinalAnalysis | null>(null);

  async function handleAnalyze() {
    if (!content.trim() || content.length < 3) {
      setError("Please enter some content to analyse.");
      return;
    }
    
    setError(null);
    setViewState("loading");
    setResult(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, type: mode }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyse content.");
      }

      setResult(data);
      setViewState("result");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
      setViewState("idle");
    }
  }

  function handleReset() {
    setResult(null);
    setError(null);
    setContent("");
    setViewState("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    setTimeout(() => {
      document.getElementById("content-input")?.focus();
    }, 400);
  }

  return (
    <>
      <Header />
      
      <main style={{ position: "relative", minHeight: "calc(100vh - 72px)", display: "flex", flexDirection: "column", paddingTop: "4rem", backgroundColor: "#050505", overflow: "hidden" }}>
        {/* Subtle grid and glow */}
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(211,47,47,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        
        <div className="content-width" style={{ flexGrow: 1, paddingBottom: "5rem", position: "relative", zIndex: 1, maxWidth: "1000px" }}>
          
          <div style={{ marginBottom: "3rem", textAlign: "center", animation: "fadeInUp 0.6s var(--ease-out-expo) both" }}>
            <div className="section-badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(211,47,47,0.1)", border: "1px solid rgba(211,47,47,0.25)" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--red)", animation: "pulseRed 2s infinite" }} />
              THREAT INTELLIGENCE ENGINE
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontFamily: "var(--font-rajdhani)", fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1 }}>
              INITIATE <span style={{ color: "var(--red)" }}>ANALYSIS</span>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Paste any suspicious message, email, or URL. Our 8 specialized AI engines will analyze the content in real-time and return a comprehensive threat verdict.
            </p>
          </div>

          {viewState === "idle" && (
            <div style={{ animation: "fadeUp 0.4s ease forwards" }}>
              <InputPanel
                content={content}
                mode={mode}
                isLoading={false}
                error={error}
                onContentChange={setContent}
                onModeChange={setMode}
                onSubmit={handleAnalyze}
              />
            </div>
          )}

          {viewState === "loading" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <LoadingResult />
            </div>
          )}

          {viewState === "result" && result && (
            <ResultCard analysis={result} onReset={handleReset} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
