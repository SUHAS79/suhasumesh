import { Inter, Cutive_Mono, Orbitron, Dancing_Script } from "next/font/google";

// Inter for all paragraph text and body content
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Mono for subheadings and smaller descriptive text
export const mono = Cutive_Mono({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Orbitron as substitute for Nasalization (techno/futuristic headings)
export const nasalization = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nasalization",
  subsets: ["latin"],
  display: "swap",
});

// Dancing Script as substitute for Quentin (script/signature font for name)
export const quentine = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quentine",
  subsets: ["latin"],
  display: "swap",
});
