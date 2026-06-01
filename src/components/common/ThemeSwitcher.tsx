"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const themes = [
  { id: "1", label: "Mono",    color: "#e8e8e8", bg: "#0a0a0a" },
  { id: "2", label: "Navy",    color: "#38bdf8", bg: "#05080f" },
  { id: "3", label: "Emerald", color: "#34d399", bg: "#0d110e" },
  { id: "4", label: "Orange",  color: "#fb923c", bg: "#0f0c0a" },
  { id: "5", label: "Light",   color: "#0ea5e9", bg: "#ffffff" },
];

export function ThemeSwitcher() {
  const pathname = usePathname();

  // Default (/) is Theme 4
  const activeId = pathname.startsWith("/theme/")
    ? pathname.split("/theme/")[1]
    : "4";

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl border"
      style={{
        background: "hsl(var(--glass-bg))",
        backdropFilter: "blur(20px)",
        borderColor: "hsl(var(--glass-border))",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      }}
    >
      <span
        className="text-xs mr-1 font-mono opacity-50"
        style={{ color: "hsl(var(--foreground))" }}
      >
        themes
      </span>

      {themes.map((t) => {
        const isActive = activeId === t.id;
        const href = t.id === "4" ? "/" : `/theme/${t.id}`;
        return (
          <Link
            key={t.id}
            href={href}
            title={`Theme ${t.id} — ${t.label}`}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className="w-7 h-7 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
              style={{
                background: t.bg,
                borderColor: isActive ? t.color : "transparent",
                boxShadow: isActive ? `0 0 10px ${t.color}80` : "none",
                transform: isActive ? "scale(1.25)" : "scale(1)",
              }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: t.color }} />
            </div>
            <span
              className="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {t.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
