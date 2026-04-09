"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Zap } from "lucide-react";
import { URLS } from "@/lib/constants";

const STORAGE_KEY = "mab_exit_intent_dismissed";
const COOLDOWN_DAYS = 7;

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check cooldown
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const days = (Date.now() - Number(dismissed)) / 86_400_000;
      if (days < COOLDOWN_DAYS) return;
    }

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      // Only trigger when mouse exits near the top (heading toward browser chrome/close)
      if (e.clientY <= 10) {
        triggered = true;
        // Small delay so it doesn't flash if user just briefly moves mouse up
        setTimeout(() => setVisible(true), 300);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,14,31,0.85)", backdropFilter: "blur(6px)" }}
          onClick={(e) => e.target === e.currentTarget && dismiss()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-lg w-full bg-[#0a0e1f] border border-[#d4af37]/40 rounded-2xl p-8 text-center overflow-hidden"
          >
            {/* Gold shimmer background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-br from-[#d4af37] via-transparent to-[#87CEEB]" />

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-2 text-[#f8f6f1]/40 hover:text-[#f8f6f1] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
              <Zap size={14} className="text-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-semibold tracking-wide">
                Before You Go
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Wait — grab a free{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                15-min strategy call
              </span>
            </h2>

            <p className="text-[#f8f6f1]/60 mb-8 leading-relaxed">
              Tell us where you&apos;re losing the most time. In 15 minutes we&apos;ll show
              you exactly where AI automation would hit hardest — no pitch, just clarity.
            </p>

            <a
              href={URLS.calendarBooking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-xl hover:bg-[#f4d03f] transition-all duration-300 mb-3"
            >
              <Calendar size={18} />
              Book Free Strategy Call
            </a>

            <button
              onClick={dismiss}
              className="text-[#f8f6f1]/40 text-sm hover:text-[#f8f6f1]/60 transition-colors"
            >
              No thanks, I&apos;ll figure it out myself
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
