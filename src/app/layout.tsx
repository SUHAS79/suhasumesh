import type { Metadata } from "next";
import { Toaster } from "sonner";
import { inter, mono, nasalization, quentine } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhas Umesh | CS Graduate · AI/ML Researcher · Aspiring PM",
  description:
    "CS Graduate from NIE Mysuru. AI/ML Researcher, IEEE published author, and aspiring Product Manager. Building systems at the intersection of AI, governance, and human decision-making.",
  authors: [{ name: "Suhas Umesh" }],
  creator: "Suhas Umesh",
  keywords: [
    "Suhas Umesh", "AI/ML", "Product Manager", "Data Science",
    "IEEE", "Sentinel", "NIE Mysuru", "Human-in-the-Loop", "Portfolio",
  ],
  openGraph: {
    title: "Suhas Umesh | CS Graduate · AI/ML Researcher · Aspiring PM",
    description: "Building systems at the intersection of AI, governance, and human decision-making.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhas Umesh | CS Graduate · AI/ML Researcher",
    description: "IEEE published researcher. Aspiring PM. Building at the intersection of AI and governance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
