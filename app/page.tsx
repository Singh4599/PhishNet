"use client";

/**
 * app/page.tsx — Main orchestrator
 * Single-page premium dark UI layout
 */

import { useState } from "react";
import type { AnalysisType, FinalAnalysis } from "@/lib/types";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InputPanel from "./components/InputPanel";
import LoadingResult from "./components/LoadingResult";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

type ViewState = "idle" | "loading" | "result";

export default function Home() {
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
    
    // Focus the textarea after scrolling back up
    setTimeout(() => {
      document.getElementById("content-input")?.focus();
    }, 400);
  }

  return (
    <>
      <Header />
      
      <main style={{ minHeight: "calc(100vh - 70px)", display: "flex", flexDirection: "column" }}>
        
        {/* Hero Section — always visible at top */}
        <HeroSection />

        {/* Dynamic Content Area */}
        <div 
          className="content-width" 
          style={{ 
            marginTop: "-3rem", // Pull up over the hero slightly
            position: "relative",
            zIndex: 10,
            paddingBottom: "5rem",
            flexGrow: 1 
          }}
        >
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
