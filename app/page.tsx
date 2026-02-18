"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroVideo from "@/components/IntroVideo";
import Hero from "@/components/Hero";
import GeometricCard from "@/components/GeometricCard";
import GarageDoorCard from "@/components/GarageDoorCard";
import TechStackSpheres from "@/components/TechStackSpheres";
import ScrollingQuotes from "@/components/ScrollingQuotes";
import SecretLottery from "@/components/SecretLottery";
import { Zap, Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);

  const stats = [
    {
      title: "Custom AI Solutions",
      value: "250+",
      subtitle: "Built for businesses like yours",
      description: "From automations, to AI-assisted workflows, and now to autonomous agents, the evolution has been staggering. Businesses that have adapted to native AI usage within their systems are achieving an increase of almost 20% efficiency in enterprise and 35% in the mid-markets. Those that haven't adapted or don't have a structure in place are finding they are falling behind or worse, they've put their business at risk.",
      icon: <Zap size={32} />,
    },
    {
      title: "Enterprise Experience",
      value: "16+",
      subtitle: "Years in Mid-Markets & Enterprise Tech",
      description: "Every solution starts with a proven structure. Intimate discovery, identifying and framing the most impactful opportunities, and blueprinting the buildout. The most important aspect is ensuring that the 'solution' will have an actionable, measureable and repeatable benefit for you and your company.",
      icon: <Award size={32} />,
    },
    {
      title: "Revenue Impact",
      value: "$12M+",
      subtitle: "Proven B2B results",
      description: "Over $12 million in proven B2B revenue impact through strategic AI implementations and automation solutions. Our clients don't just save money—they create new revenue streams, capture market share, and build competitive moats that compound over time. The question isn't whether you can afford AI. It's whether you can afford to wait.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Time Savings",
      value: "15+",
      subtitle: "Hours saved per week, per deployment",
      description: "Time is the only resource you can't scale. Every hour your team spends on repetitive tasks is an hour not spent on strategy, innovation, or growth. Our solutions don't just automate—they liberate. One client saved 15 hours weekly on staffing alone. Another reclaimed entire days of executive focus. What would you do with 60+ hours back per month?",
      icon: <Users size={32} />,
    },
  ];

  const problems = [
    {
      number: 1,
      title: "Agents YOU control",
      image: "/media/problem 1.jpg",
      caption: "Take control of your automation",
      revealedTitle: "AI Agent Solutions",
      revealedDescription: "Build custom AI agents that work exactly how you need them. From simple task automation to complex multi-step workflows, our agents integrate seamlessly with your existing tools and processes.",
      buttonText: "Learn More",
      buttonLink: "#roi-section",
      buttonIcon: "calculator" as const,
    },
    {
      number: 2,
      title: "Drowning in repetitive tasks?",
      image: "/media/problem 2.jpg",
      caption: "Workflows that run 24/7",
      revealedTitle: "Workflow Automation",
      revealedDescription: "Director of Staff at prominent business was drowning in unqualified candidates until we built an autonomous agent that handled the vetting of incoming applications, while also searching for qualified candidates, sending them an 'are you interested' email, and handling the basic onboarding steps so Director of Staff could focus on training of new hires. In the end, she said we saved her almost 15 hours on staffing per week so she could dial in on training and education. Which then resulted in much more equipped employees that produced measurably higher MoM and YoY outputs by almost 10% than the previous year's candidates. Her educated guess was about $40,000 in annual net liquidity.",
      buttonText: "Workflow Studio",
      buttonLink: "https://workspace-flow-repo-v1.pages.dev/app",
      buttonIcon: "login" as const,
    },
    {
      number: 3,
      title: "Ready to transform your business?",
      image: "/media/problem 3.jpg",
      caption: "Comprehensive AI services",
      revealedTitle: "Full-Service AI",
      revealedDescription: "From strategy to implementation, we provide comprehensive AI services tailored to your business needs. AI readiness audits, custom development, and ongoing support.",
      buttonText: "The Services",
      buttonLink: "/services",
      buttonIcon: "arrow" as const,
    },
  ];

  return (
    <>
      {showIntro && <IntroVideo onComplete={() => setShowIntro(false)} />}
      
      <main className="min-h-screen bg-[#0a0e1f] relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="geometric-orb w-[600px] h-[600px] -top-40 -right-40 animate-drift" />
          <div className="geometric-orb w-[400px] h-[400px] bottom-20 left-20 animate-pulse-glow" style={{ animationDelay: "3s" }} />
        </div>

        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Stats Section with Geometric Cards */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-gold mb-4">
                Proven Results
              </h2>
              <p className="text-[#f8f6f1]/70 max-w-2xl mx-auto">
                Click any card to unlock detailed insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <GeometricCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  subtitle={stat.subtitle}
                  description={stat.description}
                  icon={stat.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Page Break */}
        <div className="relative z-10 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
          </div>
        </div>

        {/* Problem Cards Section */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-gold mb-4">
                Solutions to Your Challenges
              </h2>
              <p className="text-[#f8f6f1]/70 max-w-2xl mx-auto">
                Click on any card to reveal how we can help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem) => (
                <GarageDoorCard
                  key={problem.number}
                  problemNumber={problem.number}
                  title={problem.title}
                  backgroundImage={problem.image}
                  caption={problem.caption}
                  revealedContent={{
                    title: problem.revealedTitle,
                    description: problem.revealedDescription,
                  }}
                  buttonText={problem.buttonText}
                  buttonLink={problem.buttonLink}
                  buttonIcon={problem.buttonIcon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section - 3D Spheres */}
        <TechStackSpheres />

        {/* Scrolling Quotes Section */}
        <ScrollingQuotes />

        {/* CTA Section */}
        <section id="roi-section" className="py-24 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-gold">Change Your Business?</span>
            </h2>
            <p className="text-[#f8f6f1]/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how AI can transform your operations and drive measurable ROI.
            </p>
            <a
              href="https://calendar.app.google/kuwKF2VrDuyvdfN9A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-[#d4af37] text-[#0a0e1f] font-bold text-lg rounded-full hover:bg-[#f4d03f] transition-all duration-300 shadow-lg shadow-[#d4af37]/20"
            >
              <span>Schedule Your Consultation</span>
            </a>
          </div>
        </section>

        <Footer />
        
        {/* Secret Lottery Easter Egg */}
        <SecretLottery page="landing" />
      </main>
    </>
  );
}
