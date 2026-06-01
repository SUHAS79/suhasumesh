"use client";

/*
  Background orbs update automatically with the active theme.
  The orb colors reference the same hue as the CSS --primary variable.

  Theme 1 (Monochrome):  gray/white orbs on pure black
  Theme 2 (Navy+Cyan):   swap orb HSL to 187 (cyan family)
  Theme 3 (Charcoal+Em): swap orb HSL to 152 (emerald family)
*/

export const Background = () => {
  return (
    <div className="top-0 fixed -z-10 h-full w-full overflow-hidden">
      {/* Base — bg-background */}
      <div className="absolute inset-0 bg-background" />

      {/* Orb 1 – top-left */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full floating-orb"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Orb 2 – right */}
      <div
        className="absolute top-[25%] right-[-15%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.09) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Orb 3 – bottom */}
      <div
        className="absolute bottom-[-8%] left-[15%] w-[700px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Orb 4 – center-right */}
      <div
        className="absolute top-[55%] left-[45%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
    </div>
  );
};
