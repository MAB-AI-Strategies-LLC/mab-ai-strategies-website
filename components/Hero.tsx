"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const heroImages = [
  "/media/Hero cycle 1.png",
  "/media/Hero cycle 2.png",
  "/media/Hero cycle 3.png",
  "/media/Hero cycle 4.png",
  "/media/Hero cycle 5.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Randomly select a hero image on mount (client-side only)
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setCurrentImage(randomIndex);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[currentImage]}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1f]/80 via-[#0a0e1f]/60 to-[#0a0e1f]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="geometric-orb w-96 h-96 top-20 -left-20 animate-drift" />
        <div className="geometric-orb w-64 h-64 bottom-40 right-10 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="geometric-ring w-80 h-80 top-1/3 right-1/4 animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Placard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="bg-[#12183a]/60 backdrop-blur-md border border-[#d4af37]/30 rounded-xl px-8 py-4 hover:scale-105 transition-transform duration-300">
              <p className="text-[#d4af37] font-bold tracking-[0.3em] text-sm uppercase mb-1">
                The AI Advantage
              </p>
              <p className="text-[#f8f6f1] text-lg md:text-xl font-light">
                Simplify with Automation. Scale with Intelligence.
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            Converting chaos into consistency,
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent">and consistency into currency.</span>
          </motion.h1>

          {/* Mission Statement with Ornate Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            {/* Ornate Frame Container */}
            <div className="relative p-8 md:p-10">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#d4af37] rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#d4af37] rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#d4af37] rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#d4af37] rounded-br-lg" />
              
              {/* Inner Glow Effect */}
              <div className="absolute inset-2 bg-[#d4af37]/5 rounded-lg blur-sm" />
              
              {/* Mission Text */}
              <p className="relative text-[#f8f6f1] text-lg md:text-xl leading-relaxed font-light tracking-wide">
                <span className="text-[#d4af37] text-2xl font-bold">"</span>
                To lead the evolution of business intelligence by integrating cutting-edge AI 
                frameworks into sustainable corporate strategies. MAB AI Strategies is committed 
                to securing our clients&apos; competitive advantage through innovation, integrity, 
                and a relentless focus on ROI.
                <span className="text-[#d4af37] text-2xl font-bold">"</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://calendar.app.google/kuwKF2VrDuyvdfN9A"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full hover:bg-[#f4d03f] transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </a>
            <Link
              href="/services"
              className="group flex items-center space-x-2 px-8 py-4 border border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              <span>View Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
