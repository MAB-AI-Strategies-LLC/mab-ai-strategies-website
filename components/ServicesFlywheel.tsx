"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  Library,
  Globe,
  Bot,
  Mic,
  ExternalLink,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Audits",
    description: "Comprehensive assessment of your organization's AI readiness. We evaluate your current infrastructure, data quality, team capabilities, and identify high-impact opportunities for AI implementation.",
    features: [
      "Targeted process analysis",
      "Framework stress tests",
      "Scoring and gap identification",
      "Prioritized roadmap recommendations",
    ],
    color: "#d4af37",
  },
  {
    icon: Library,
    title: "Automation Library",
    description: "Access our full library of pre-built automation gems, GPTs, and AI-assisted workflows. From simple task automation to complex cross-platform integrations with API, MCP, and tool usage.",
    features: [
      "Pre-built GPTs and agents",
      "Machine automation templates",
      "Cross-platform integrations",
      "API/MCP/Tool usage patterns",
      "Agentic workflow blueprints",
      "Guaranteed efficiency & ROI",
    ],
    color: "#60a5fa",
  },
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Bespoke web solutions powered by AI. From personal portfolios to enterprise websites with integrated RAG (Retrieval-Augmented Generation) capabilities.",
    features: [
      "Personal portfolios",
      "Company website updates",
      "Blogs with AI content assistance",
      "RAG-enabled knowledge bases",
      "E-commerce (premium tier)",
    ],
    cta: {
      text: "Start Website Questionnaire",
      link: "/questionnaire/",
    },
    color: "#a78bfa",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Bespoke AI agents built from the ground up for your specific needs. Fully secure, containerized, with self-hosting options and zero-downtime deployment strategies.",
    features: [
      "Bespoke agent architecture",
      "API handling & integration",
      "Docker containerization",
      "Self-hosted options available",
      "Enterprise-grade security",
      "'Canary' testing & blue/green fallback",
      "Zero-downtime deployment",
    ],
    color: "#34d399",
  },
  {
    icon: Mic,
    title: "Speaking Opportunities",
    description: "Book Mark Bockrath to speak at your next event. From keynote presentations to workshops on AI strategy, implementation, and the future of business automation.",
    features: [
      "Keynote presentations",
      "AI strategy workshops",
      "Executive briefings",
      "Panel discussions",
      "Custom presentations",
    ],
    cta: {
      text: "Schedule Speaking Engagement",
      link: "https://calendar.app.google/kuwKF2VrDuyvdfN9A",
    },
    color: "#f472b6",
  },
];

export default function ServicesFlywheel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent mb-4">
          Our Services
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          <div className="relative px-8 py-3">
            {/* Animated ornate frame */}
            <div className="absolute inset-0 border border-[#d4af37]/50 rounded-lg" />
            <div className="absolute -inset-1 border border-[#d4af37]/20 rounded-lg blur-sm" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#d4af37]/5 rounded-lg"
            />
            <p className="relative text-[#f8f6f1]/80 text-lg">
              Comprehensive AI solutions designed to transform your business
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Vertical Flywheel Container */}
      <div className="relative h-[500px] flex items-center justify-center">
        {/* Central Pivot Pin */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37] to-[#d4af37]/50" />
          {/* Light reflection */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#12183a]/80 border border-[#d4af37]/50 rounded-full hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all disabled:opacity-50"
        >
          <ChevronUp className="w-6 h-6 text-[#d4af37]" />
        </button>
        <button
          onClick={nextCard}
          disabled={isAnimating}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#12183a]/80 border border-[#d4af37]/50 rounded-full hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all disabled:opacity-50"
        >
          <ChevronDown className="w-6 h-6 text-[#d4af37]" />
        </button>

        {/* Cards Container */}
        <div className="relative w-full max-w-lg perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ rotateX: -90, opacity: 0, z: -100 }}
              animate={{ rotateX: 0, opacity: 1, z: 0 }}
              exit={{ rotateX: 90, opacity: 0, z: -100 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Card - Thick book page style */}
              <div 
                className="relative bg-[#12183a] border-2 border-[#d4af37]/50 rounded-2xl p-8 shadow-2xl"
                style={{
                  boxShadow: `
                    inset 2px 0 10px rgba(212, 175, 55, 0.1),
                    inset -2px 0 10px rgba(0, 0, 0, 0.5),
                    0 20px 60px rgba(0, 0, 0, 0.5),
                    0 0 40px ${currentService.color}20
                  `,
                }}
              >
                {/* Gold trim that catches the light */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${currentService.color}40 0%, transparent 50%, ${currentService.color}20 100%)`,
                  }}
                />

                {/* Card thickness effect (side) */}
                <div 
                  className="absolute -right-3 top-4 bottom-4 w-6 rounded-r-lg"
                  style={{
                    background: `linear-gradient(to right, #0a0e1f, ${currentService.color}30)`,
                    transform: "translateX(100%) skewY(5deg)",
                  }}
                />

                {/* Icon with raised effect */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-6"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-lg"
                    style={{ 
                      backgroundColor: `${currentService.color}20`,
                      boxShadow: `0 4px 20px ${currentService.color}40, inset 0 2px 4px ${currentService.color}30`,
                      transform: "translateZ(10px)",
                    }}
                  >
                    <currentService.icon 
                      size={32} 
                      style={{ color: currentService.color }}
                    />
                  </div>
                </motion.div>

                {/* Title - Raised lettering effect */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-white text-center mb-4"
                  style={{
                    textShadow: `2px 2px 4px rgba(0,0,0,0.5), 0 0 20px ${currentService.color}40`,
                    transform: "translateZ(5px)",
                  }}
                >
                  {currentService.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#f8f6f1]/70 text-center mb-6 leading-relaxed"
                >
                  {currentService.description}
                </motion.p>

                {/* Features */}
                <motion.ul
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-6"
                >
                  {currentService.features.slice(0, 4).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-[#f8f6f1]/80"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: currentService.color }}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                {/* CTA */}
                {currentService.cta && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <a
                      href={currentService.cta.link}
                      target={currentService.cta.link.startsWith("http") ? "_blank" : undefined}
                      rel={currentService.cta.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full text-[#d4af37] hover:bg-[#d4af37]/30 transition-all"
                    >
                      <span>{currentService.cta.text}</span>
                      <ExternalLink size={16} />
                    </a>
                  </motion.div>
                )}

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#d4af37]/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#d4af37]/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#d4af37]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#d4af37]/30" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating && i !== currentIndex) {
                  setIsAnimating(true);
                  setCurrentIndex(i);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex 
                  ? "bg-[#d4af37] w-6" 
                  : "bg-[#d4af37]/30 hover:bg-[#d4af37]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Click instruction */}
      <p className="text-center text-[#f8f6f1]/50 text-sm mt-8">
        Click the arrows to spin through our services
      </p>
    </div>
  );
}
