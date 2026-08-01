"use client";

/**
 * app/page.tsx — Landing Page
 */

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main style={{ minHeight: "calc(100vh - 70px)", display: "flex", flexDirection: "column" }}>
        {/* The HeroSection now acts as the primary landing page content with a CTA to /scan */}
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}
