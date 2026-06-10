"use client";

export interface ThemeOption {
  id: string;
  label: string;
  swatch: string;
}

interface ThemeSwitcherProps {
  themes: ThemeOption[];
  current: string;
  onSelect: (id: string) => void;
}

export function ThemeSwitcher({ themes, current, onSelect }: ThemeSwitcherProps) {
  return (
    <div
      className="floating-nav fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-2xl"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.45)" }}
    >
      <span
        className="text-xs mr-1 font-mono opacity-50"
        style={{ color: "hsl(var(--foreground))" }}
      >
        theme
      </span>

      {themes.map((t) => {
        const isActive = current === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t.id)}
            title={t.label}
            aria-label={`Switch to ${t.label} theme`}
            aria-pressed={isActive}
            className="flex items-center justify-center"
          >
            <span
              className="w-7 h-7 rounded-full border-2 transition-all duration-200"
              style={{
                background: t.swatch,
                borderColor: isActive ? "#ffffff" : "transparent",
                boxShadow: isActive ? `0 0 12px ${t.swatch}` : "none",
                transform: isActive ? "scale(1.25)" : "scale(1)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
