import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";
import ExitIntentModal from "@/components/ExitIntentModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mabaistrategies.com"),
  title: {
    default: "MAB AI Strategies | Enterprise AI Automation",
    template: "%s | MAB AI Strategies",
  },
  description:
    "Custom AI agents, intelligent workflows, and automation systems that deliver measurable ROI — backed by $12M+ in proven B2B revenue impact.",
  keywords: [
    "AI automation",
    "enterprise AI",
    "custom AI agents",
    "business automation",
    "AI consulting",
    "workflow automation",
    "AI readiness audit",
  ],
  authors: [{ name: "MAB AI Strategies" }],
  creator: "MAB AI Strategies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mabaistrategies.com",
    siteName: "MAB AI Strategies",
    title: "MAB AI Strategies | Enterprise AI Automation",
    description:
      "Converting chaos into consistency, and consistency into currency. Enterprise AI automation built for businesses ready to lead the future.",
    images: [
      {
        url: "/media/OfficialCompanyLogo.jpg",
        width: 1200,
        height: 630,
        alt: "MAB AI Strategies — Enterprise AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mab_ai_CEO",
    creator: "@mab_ai_CEO",
    title: "MAB AI Strategies | Enterprise AI Automation",
    description:
      "Converting chaos into consistency, and consistency into currency.",
    images: ["/media/OfficialCompanyLogo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://mabaistrategies.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAB AI Strategies",
  url: "https://mabaistrategies.com",
  logo: "https://mabaistrategies.com/media/OfficialCompanyLogo.jpg",
  description:
    "Enterprise AI automation consultancy specialising in custom AI agents, intelligent workflows, and measurable ROI-driven automation.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@mabaistrategies.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.linkedin.com/in/mark-bockrath-a5a1b2196/",
    "https://x.com/mab_ai_CEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e1f] text-[#f8f6f1]`}
      >
        {children}
        <AIChatWidget />
        <ExitIntentModal />
      </body>
    </html>
  );
}
