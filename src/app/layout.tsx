import type { Metadata } from "next";
import { Toaster } from "sonner";
import { inter, mono, nasalization, quentine } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhas Umesh | IT Project Management · M.Sc. Student, WHZ Zwickau",
  description:
    "IT project management and Agile delivery. M.Sc. Management and Information Technology at WHZ Zwickau, Germany. IEEE-published author, certified in Scrum (IBM) and project management (Google). Open to Werkstudent roles — 20 h/week.",
  authors: [{ name: "Suhas Umesh" }],
  creator: "Suhas Umesh",
  keywords: [
    "Suhas Umesh", "IT Project Management", "Werkstudent", "Working Student",
    "Scrum", "Agile", "Zwickau", "WHZ", "Germany", "IEEE", "Sentinel", "Portfolio",
  ],
  openGraph: {
    title: "Suhas Umesh | IT Project Management · M.Sc. Student, WHZ Zwickau",
    description: "Agile delivery and IT project management. Based in Zwickau, Germany. Open to Werkstudent roles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhas Umesh | IT Project Management · WHZ Zwickau",
    description: "Agile delivery and IT project management. Based in Zwickau, Germany. Open to Werkstudent roles.",
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
