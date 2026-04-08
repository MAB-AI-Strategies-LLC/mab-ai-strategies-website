// Central source of truth for all external URLs and contact details.
// Import from here instead of hardcoding strings across components.

export const URLS = {
  calendarBooking:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ??
    "https://calendar.app.google/kuwKF2VrDuyvdfN9A",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/mark-bockrath-a5a1b2196/",
  twitter:
    process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com/mab_ai_CEO",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mabaistrategies.com",
} as const;

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_EMAIL ?? "mark@mabaistrategies.com",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "contact@mabaistrategies.com",
} as const;

export const BRAND = {
  name: "MAB AI Strategies",
  tagline: "Converting chaos into consistency, and consistency into currency.",
  description:
    "Custom AI agents, intelligent workflows, and automation systems that deliver measurable ROI — backed by $12M+ in proven B2B revenue impact.",
} as const;
