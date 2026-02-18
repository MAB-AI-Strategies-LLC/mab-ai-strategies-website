"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, X } from "lucide-react";

interface GeometricCardProps {
  title: string;
  value: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function GeometricCard({
  title,
  value,
  subtitle,
  description,
  icon,
  delay = 0,
}: GeometricCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLockAnimation, setShowLockAnimation] = useState(false);

  const handleClick = () => {
    if (!isUnlocked) {
      setShowLockAnimation(true);
      // After lock animation completes, show the modal
      setTimeout(() => {
        setIsUnlocked(true);
        setShowLockAnimation(false);
      }, 1500);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsUnlocked(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <motion.div
        className={`relative cursor-pointer perspective-1000 ${
          isUnlocked || showLockAnimation ? "pointer-events-none" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={!isUnlocked && !showLockAnimation ? { scale: 1.02, y: -5 } : {}}
        whileTap={!isUnlocked && !showLockAnimation ? { scale: 0.98 } : {}}
      >
        {/* Card Container */}
        <div className="relative bg-[#12183a]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 overflow-hidden group">
          {/* Animated geometric border */}
          <div className="absolute inset-0 rounded-2xl">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <motion.rect
                x="2"
                y="2"
                width="396"
                height="296"
                rx="16"
                fill="none"
                stroke="url(#gold-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: isHovered ? 1 : 0.3,
                  strokeDasharray: isHovered ? "10 5" : "5 10",
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f4d03f" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#d4af37]/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#d4af37]/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#d4af37]/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#d4af37]/50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            {icon && (
              <div className="mb-4 text-[#d4af37]">
                {icon}
              </div>
            )}

            {/* Title */}
            <p className="text-[#a0a8c0] text-sm font-medium uppercase tracking-wider mb-2">
              {title}
            </p>

            {/* Value */}
            <h3 className="text-4xl md:text-5xl font-bold gradient-gold mb-2">
              {value}
            </h3>

            {/* Subtitle */}
            <p className="text-[#f8f6f1]/70 text-sm">{subtitle}</p>

            {/* Lock indicator */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Lock size={20} className="text-[#d4af37]/60" />
            </motion.div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#d4af37]/5 pointer-events-none"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Lock Pop-out Animation */}
      <AnimatePresence>
        {showLockAnimation && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: 3, 
              opacity: 0,
              x: "-50%",
              y: "-50%",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed top-1/2 left-1/2 z-[60] pointer-events-none"
          >
            <motion.div
              animate={{ rotate: [0, -15, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              <Lock size={80} className="text-[#d4af37]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unlock Overlay */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Unlock Modal - Larger Size */}
            <motion.div
              initial={{ scale: 0.8, rotateX: 20 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.8, rotateX: -20 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative bg-[#12183a] border border-[#d4af37]/50 rounded-2xl p-10 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-[#f8f6f1]/50 hover:text-[#d4af37] transition-colors"
              >
                <X size={24} />
              </button>

              {/* Unlock animation */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-[#d4af37]/20 flex items-center justify-center"
                >
                  <Unlock size={40} className="text-[#d4af37]" />
                </motion.div>
              </div>

              {/* Content */}
              <h4 className="text-3xl font-bold gradient-gold text-center mb-4">
                {title}
              </h4>
              <p className="text-[#f8f6f1]/80 text-lg text-center leading-relaxed mb-6">
                {description}
              </p>

              {/* Provocative closing */}
              <div className="border-t border-[#d4af37]/30 pt-4 mt-4">
                <p className="text-[#d4af37] text-center text-sm font-semibold italic">
                  "The future belongs to those who build it."
                </p>
              </div>

              {/* Geometric decorations */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
