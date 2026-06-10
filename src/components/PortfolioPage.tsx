"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import dynamic from "next/dynamic";

const Waves = dynamic(() => import("@/components/Waves"), { ssr: false });

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div className="min-h-screen relative">
      <Background />

      {/* Waves — fixed behind all content, responds to mouse/touch via window events */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <Waves
          lineColor="#F97316"
          backgroundColor="transparent"
          waveSpeedX={0.055}
          waveSpeedY={0.06}
          waveAmpX={40}
          waveAmpY={40}
          friction={0.7}
          tension={0.02}
          maxCursorMove={80}
          xGap={12}
          yGap={36}
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
