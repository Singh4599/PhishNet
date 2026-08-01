"use client";

/**
 * app/page.tsx — Landing Page
 */

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BottomFeaturesBar from "./components/BottomFeaturesBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main style={{ minHeight: "calc(100vh - 70px)", display: "flex", flexDirection: "column" }}>
        <HeroSection />
        <BottomFeaturesBar />
      </main>

      <Footer />
    </>
  );
}
