"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import { ThemeSwitcher, type ThemeOption } from "@/components/common/ThemeSwitcher";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

// Each theme drives the CSS accent (hue + saturation + lightness) and the beam light color together.
const THEMES: (ThemeOption & { h: number; s: string; l: string; beam: string })[] = [
  { id: "lime",   label: "Lime",   swatch: "#84CC16", h: 82,  s: "80%", l: "50%", beam: "#84CC16" },
  { id: "cyan",   label: "Cyan",   swatch: "#06B6D4", h: 189, s: "90%", l: "50%", beam: "#06B6D4" },
  { id: "blue",   label: "Blue",   swatch: "#3B82F6", h: 217, s: "91%", l: "55%", beam: "#3B82F6" },
  { id: "amber",  label: "Amber",  swatch: "#F59E0B", h: 38,  s: "92%", l: "50%", beam: "#F59E0B" },
  { id: "golden", label: "Golden", swatch: "#EAB308", h: 45,  s: "93%", l: "50%", beam: "#EAB308" },
  { id: "rose",   label: "Rose",   swatch: "#F43F5E", h: 350, s: "89%", l: "60%", beam: "#F43F5E" },
  { id: "white",  label: "White",  swatch: "#FFFFFF", h: 0,   s: "0%",  l: "96%", beam: "#FFFFFF" },
];

const DEFAULT_THEME = "lime";

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [themeId, setThemeId] = useState(DEFAULT_THEME);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // Restore a previously chosen theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && THEMES.some((t) => t.id === saved)) setThemeId(saved);
  }, []);

  // Apply the accent hue/saturation/lightness to the document root whenever the theme changes
  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-h", String(theme.h));
    root.style.setProperty("--accent-s", theme.s);
    root.style.setProperty("--accent-l", theme.l);
  }, [theme.h, theme.s, theme.l]);

  const handleSelect = (id: string) => {
    setThemeId(id);
    localStorage.setItem("theme", id);
  };

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
          lightColor={theme.beam}
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
      <ThemeSwitcher themes={THEMES} current={themeId} onSelect={handleSelect} />
    </div>
  );
}
