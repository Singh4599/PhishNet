"use client";

/**
 * app/page.tsx — Landing Page
 */

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import BottomFeaturesBar from "./components/BottomFeaturesBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <BottomFeaturesBar />
      </main>
      <Footer />
    </>
  );
}
