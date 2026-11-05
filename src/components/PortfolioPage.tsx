"use client";

import { useState, useEffect } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import {
  Hero,
  About,
  Skills,
  Education,
  Experience,
  Projects,
  Contact,
} from "@/components/sections";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

// Accent is fixed to white and lives in globals.css (--accent-h/s/l).
const BEAM_COLOR = "#FFFFFF";

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  // Honours the OS "reduce motion" setting. When it is on we drop the
  // animated canvas entirely rather than merely slowing it.
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <PreLoader />;

  return (
    // reducedMotion="user" makes every Framer Motion animation on the site
    // respect the same OS setting; CSS animations are handled in globals.css.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative">
        <Background />

        {/* Beams — fixed behind all content */}
        {!prefersReducedMotion && (
          <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
            <Beams
              beamWidth={2}
              beamHeight={19}
              beamNumber={20}
              lightColor={BEAM_COLOR}
              speed={2.6}
              noiseIntensity={1.5}
              scale={0.25}
              rotation={0}
            />
          </div>
        )}

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
}
