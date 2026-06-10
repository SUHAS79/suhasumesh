"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("@/components/Antigravity"), { ssr: false });

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div className="min-h-screen relative">
      <Background />

      {/* Antigravity — fixed behind all content, mouse tracked via window events */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <Antigravity
          count={isMobile ? 60 : 300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={isMobile ? 1.2 : 2}
          lerpSpeed={0.1}
          color="#F97316"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
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
