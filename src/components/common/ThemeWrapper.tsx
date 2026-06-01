"use client";

import { useEffect } from "react";

interface ThemeWrapperProps {
  themeId: string;
  children: React.ReactNode;
}

export function ThemeWrapper({ themeId, children }: ThemeWrapperProps) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeId);
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [themeId]);

  return <>{children}</>;
}
