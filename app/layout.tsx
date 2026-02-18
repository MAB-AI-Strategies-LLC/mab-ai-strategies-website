import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAB AI Strategies | Enterprise AI Automation",
  description: "Custom AI agents, intelligent workflows, and automation systems that deliver measurable ROI — backed by $12M+ in proven B2B revenue impact.",
  keywords: ["AI automation", "enterprise AI", "custom AI agents", "business automation", "AI consulting"],
  openGraph: {
    title: "MAB AI Strategies | Enterprise AI Automation",
    description: "Converting chaos into consistency, and consistency into currency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e1f] text-[#f8f6f1]`}
      >
        {children}
      </body>
    </html>
  );
}
