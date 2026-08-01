"use client";

import { Hexagon, ChevronRight } from "lucide-react";
import ScrollVideo from "./components/ScrollVideo";
import Reveal from "./components/Reveal";
import Image from "next/image";

const PORTRAIT_URL = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Scroll Video Layer */}
      <ScrollVideo />

      {/* Foreground Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-[#0a0a0a]/50 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:px-12">
            
            {/* Logo */}
            <Reveal delay={0} className="flex items-center gap-2">
              <Hexagon size={24} strokeWidth={1.5} />
              <span className="text-lg sm:text-xl font-medium tracking-tight">novaai</span>
            </Reveal>

            {/* Links (md+) */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {["Projects", "About", "Blog", "Contact"].map((item, i) => (
                <Reveal key={item} delay={100 + i * 100}>
                  <a
                    href="#"
                    className="text-sm text-white/85 hover:text-white transition-colors duration-300 relative"
                  >
                    {item}
                    {item === "Projects" && (
                      <sup className="absolute -top-1 -right-2.5 font-mono text-[10px] text-white/60">6</sup>
                    )}
                  </a>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal delay={500}>
              <a
                href="#"
                className="rounded-md border border-white/20 bg-white/15 backdrop-blur-md px-4 py-2 text-xs sm:px-5 sm:text-sm transition-colors duration-300 hover:bg-white/25"
              >
                Get Free Consultation
              </a>
            </Reveal>
          </div>
        </nav>

        <main>
          {/* 
            Section One — Hero
          */}
          <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16">
            
            {/* Top row */}
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              {/* Left — service list */}
              <div className="flex flex-col gap-2">
                {["/ AI AUTOMATION", "/ AI INTEGRATION", "/ AI AGENT DEVELOPMENT"].map((svc, i) => (
                  <Reveal key={svc} delay={150 + i * 120}>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md">
                      {svc}
                    </span>
                  </Reveal>
                ))}
              </div>

              {/* Right — intro */}
              <Reveal delay={300} className="max-w-xs sm:text-right">
                <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md">
                  We design automation that brings clarity, precision, and efficiency to the way your company operates.
                </p>
              </Reveal>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              
              {/* Left */}
              <div>
                <Reveal delay={150}>
                  <div className="mb-5 inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                      We Automate 100+ Businesses
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
                    Clear. Precise.<br />Automated.
                  </h1>
                </Reveal>
              </div>

              {/* Right — glass contact card */}
              <Reveal delay={420}>
                <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md border border-white/15">
                  <Image
                    src={PORTRAIT_URL}
                    alt="Mitha, co-founder of NovaAI"
                    width={80}
                    height={96}
                    unoptimized
                    className="h-24 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <span className="text-sm font-medium text-white">Talk with Mitha</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      Co-founder of NovaAI
                    </span>
                    <button className="mt-1.5 flex items-center justify-between rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85">
                      Book 15-mins call
                      <ChevronRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 
            Mid spacer — scroll room for video scrub
          */}
          <div className="h-[80vh]" aria-hidden="true" />

          {/* 
            Section Two — Capability
          */}
          <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16">
            
            {/* Top row */}
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <Reveal delay={120}>
                <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                    Insight On Demand
                  </span>
                </div>
              </Reveal>

              <Reveal delay={220} className="max-w-sm sm:text-right">
                <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md">
                  Our AI doesn't just respond — it interprets, sharpens, and delivers the signal you need.
                </p>
              </Reveal>
            </div>

            {/* Bottom area */}
            <div className="flex-1 flex flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              
              {/* Left column */}
              <div className="max-w-xl">
                <Reveal delay={180}>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
                    Learn to see<br />brilliantly.
                  </h2>
                </Reveal>
                
                <Reveal delay={320}>
                  <p className="mt-6 max-w-md text-sm sm:text-base text-white/80 drop-shadow-md">
                    From the first sketch to the final render, Nova turns raw intent into decisions your team can act on — quietly, precisely, at speed.
                  </p>
                </Reveal>

                <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
                  <button className="flex items-center rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-black transition-colors duration-300 hover:bg-white/85">
                    Run the demo
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                  <button className="rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm text-white transition-colors duration-300 hover:bg-white/20">
                    Free consultation
                  </button>
                </Reveal>
              </div>

              {/* Right — frosted capability panel */}
              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-5 sm:px-6">
                {[
                  {
                    num: "01",
                    title: "Real-time vision",
                    body: "Reads context as it happens and surfaces what matters before you ask.",
                  },
                  {
                    num: "02",
                    title: "Layered insight",
                    body: "Moves from rough outline to sharp output without losing the thread.",
                  },
                  {
                    num: "03",
                    title: "Adaptive speed",
                    body: "Learns your cadence and tightens every pass as you work.",
                  },
                ].map((item, i, arr) => (
                  <Reveal key={item.num} delay={300 + i * 110}>
                    <div className={`flex gap-5 py-5 ${i !== arr.length - 1 ? "border-b border-white/15" : ""}`}>
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/55 shrink-0 pt-1">
                        {item.num}
                      </span>
                      <div className="group cursor-pointer">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-medium text-white">{item.title}</h3>
                          <ChevronRight size={16} className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
