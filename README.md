# MAB AI Strategies Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-EFEFEF?style=flat-square&logo=framer)](https://www.framer.com/motion/)

> **Enterprise AI Automation** — Converting chaos into consistency, and consistency into currency.

## Overview

This is the official website for MAB AI Strategies LLC, featuring:

- Cinematic intro experience with video
- Dynamic hero backgrounds with randomized cycling
- Interactive 3D geometric card animations with unlock effects
- Garage door slide-reveal problem cards
- Comprehensive tech stack showcase
- Scrolling ticker quotes from AI industry leaders
- Full multi-page structure (Home, Services, About, Contact)
- ROI Calculator integration
- Google Calendar scheduling integration

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **UI Components:** Custom + shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Project Structure

```
my-app/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home/Landing page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section with cycling backgrounds
│   ├── IntroVideo.tsx    # Cinematic intro video
│   ├── GeometricCard.tsx # 3D animated stat cards
│   ├── GarageDoorCard.tsx # Slide-reveal problem cards
│   ├── TechStack.tsx     # Tech stack showcase
│   ├── ScrollingQuotes.tsx # Ticker quotes section
│   ├── ROICalculator.tsx # ROI calculator component
│   └── ContactForm.tsx   # Contact form
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
│   ├── media/            # Images, videos, logos
│   │   ├── Intro Video 1.mp4
│   │   ├── OfficialCompanyLogo.jpg
│   │   ├── Hero cycle 1-5.png
│   │   ├── problem 1-3.jpg
│   │   └── ...
│   └── favicon.ico
├── dist/                 # Build output (generated)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mab-ai-website.git
cd mab-ai-website/my-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates the static site in the `/dist` folder, ready for deployment.

## Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: Next.js
4. Deploy

### Option 2: Manual Upload

Upload the contents of the `/dist` folder to any static hosting provider (Netlify, Cloudflare Pages, AWS S3, etc.)

## Customization

### Updating Content

- **Hero images:** Replace files in `public/media/Hero cycle 1-5.png`
- **Logo:** Replace `public/media/OfficialCompanyLogo.jpg`
- **Intro video:** Replace `public/media/Intro Video 1.mp4`
- **Colors:** Edit CSS variables in `app/globals.css`
- **Copy/Text:** Edit directly in component files

### Calendar Integration

Update the Google Calendar link in:
- `app/page.tsx` (Hero CTA)
- `components/Hero.tsx`
- `app/services/page.tsx`

## Performance

- Static site generation (SSG) for optimal load times
- Image optimization with Next.js Image component
- Lazy loading for below-fold content
- Optimized animations with Framer Motion

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and confidential. See [LICENSE](./LICENSE) for details.

## Contact

**MAB AI Strategies LLC**  
Website: [mabaistrategies.com](https://mabaistrategies.com)  
Email: contact@mabaistrategies.com  
Calendar: [Schedule a Consultation](https://calendar.app.google/kuwKF2VrDuyvdfN9A)

---

Built with passion and AI-powered precision.
