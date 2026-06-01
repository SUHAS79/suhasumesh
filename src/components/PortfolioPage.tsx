"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer, PreLoader, Background } from "@/components/common";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";

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
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
