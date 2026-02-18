"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ExternalLink, Calculator, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

interface GarageDoorCardProps {
  problemNumber: number;
  title: string;
  backgroundImage: string;
  caption: string;
  revealedContent: {
    title: string;
    description: string;
  };
  buttonText: string;
  buttonLink: string;
  buttonIcon?: "external" | "calculator" | "login" | "arrow";
  delay?: number;
}

export default function GarageDoorCard({
  problemNumber,
  title,
  backgroundImage,
  caption,
  revealedContent,
  buttonText,
  buttonLink,
  buttonIcon = "arrow",
}: GarageDoorCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const iconMap = {
    external: ExternalLink,
    calculator: Calculator,
    login: LogIn,
    arrow: ArrowRight,
  };

  const IconComponent = iconMap[buttonIcon];

  const isExternalLink = buttonLink.startsWith("http");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: problemNumber * 0.15 }}
      className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Problem Number */}
      <div className="absolute top-6 left-6">
        <span className="text-[#d4af37] text-sm font-bold uppercase tracking-widest">
          Problem {problemNumber}
        </span>
      </div>

      {/* Closed State Content */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col justify-end p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {title}
            </h3>
            <div className="flex items-center space-x-2 text-[#d4af37]">
              <span className="text-lg">{caption}</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronUp size={24} />
              </motion.div>
            </div>
            <p className="text-[#f8f6f1]/60 text-sm mt-2">
              Click to reveal solution
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Garage Door Animation */}
      <motion.div
        className="absolute inset-0 bg-[#0a0e1f] border-2 border-[#d4af37]/30"
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Revealed Content */}
        <div className="absolute inset-0 p-8 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                Solution
              </span>
              <h3 className="text-2xl font-bold gradient-gold mt-1">
                {revealedContent.title}
              </h3>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-2 text-[#f8f6f1]/50 hover:text-[#d4af37] transition-colors"
            >
              <ChevronUp size={24} className="rotate-180" />
            </button>
          </div>

          {/* Description */}
          <p className="text-[#f8f6f1]/80 leading-relaxed flex-grow">
            {revealedContent.description}
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            {isExternalLink ? (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300 group/btn"
              >
                <span>{buttonText}</span>
                <IconComponent size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            ) : (
              <Link
                href={buttonLink}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300 group/btn"
              >
                <span>{buttonText}</span>
                <IconComponent size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute top-4 left-4 right-4 h-px bg-[#d4af37]/20" />
        <div className="absolute bottom-4 left-4 right-4 h-px bg-[#d4af37]/20" />
      </motion.div>
    </motion.div>
  );
}
