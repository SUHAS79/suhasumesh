"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

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

      {/* Beams — fixed behind all content */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <Beams
          beamWidth={2}
          beamHeight={19}
          beamNumber={20}
          lightColor="#ffffff"
          speed={6.4}
          noiseIntensity={2.25}
          scale={0.25}
          rotation={0}
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
