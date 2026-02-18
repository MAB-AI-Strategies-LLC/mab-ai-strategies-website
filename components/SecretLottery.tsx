"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Gift } from "lucide-react";

const discounts = [
  "$50 off your first order",
  "Half price speaking event",
  "Free one-on-one consultation",
  "25% off custom website",
  "Free AI readiness audit ($2K value)",
  "Buy one automation, get one 50% off",
  "Free month of Workflow Studio access",
  "Priority support for 6 months (free)",
  "$100 off any service over $1K",
  "Free quarterly strategy session for 1 year",
];

interface SecretLotteryProps {
  page: string;
}

export default function SecretLottery({ page }: SecretLotteryProps) {
  const [position, setPosition] = useState<{ top: string; left?: string; right?: string }>({ top: "20%", left: "10%" });
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);

  // Random positions for the secret button
  const positions: { top: string; left?: string; right?: string }[] = [
    { top: "15%", left: "5%" },
    { top: "25%", right: "8%" },
    { top: "40%", left: "3%" },
    { top: "60%", right: "5%" },
    { top: "75%", left: "7%" },
    { top: "85%", right: "10%" },
    { top: "35%", left: "85%" },
    { top: "55%", right: "3%" },
  ];

  useEffect(() => {
    // Randomly select position based on page
    const pageSeed = page.length;
    const randomIndex = (pageSeed + Math.floor(Math.random() * 100)) % positions.length;
    setPosition(positions[randomIndex]);

    // 30% chance to show on any given page load
    setIsVisible(Math.random() > 0.7);
  }, [page]);

  const handleClick = () => {
    setIsOpen(true);
    setIsVisible(false); // Hide the secret button once clicked
  };

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Simulate spinning
    setTimeout(() => {
      const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];
      setSelectedDiscount(randomDiscount);
      setIsSpinning(false);
    }, 3000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedDiscount(null);
    setIsSpinning(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Secret Button - Hidden in plain sight as a decoration */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={handleClick}
        className="fixed z-40 w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 hover:border-[#d4af37] hover:from-[#d4af37]/40 hover:to-[#d4af37]/20 transition-all duration-300 cursor-pointer group"
        style={position}
        title="?"
      >
        <Sparkles className="w-4 h-4 text-[#d4af37]/50 group-hover:text-[#d4af37] mx-auto transition-colors" />
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Lottery Wheel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative bg-[#12183a] border-2 border-[#d4af37] rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-[#f8f6f1]/50 hover:text-[#d4af37] transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block p-4 bg-[#d4af37]/20 rounded-full mb-4"
                >
                  <Gift className="w-12 h-12 text-[#d4af37]" />
                </motion.div>
                <h2 className="text-3xl font-bold gradient-gold mb-2">
                  Secret Unlocked!
                </h2>
                <p className="text-[#f8f6f1]/70">
                  You found the hidden lottery. Spin for a chance at exclusive savings.
                </p>
              </div>

              {/* Wheel */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]/30" />
                
                {/* Spinning wheel */}
                <motion.div
                  animate={isSpinning ? { rotate: 720 + Math.random() * 360 } : { rotate: 0 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1e2a5a] to-[#0a0e1f] border-2 border-[#d4af37]/50 overflow-hidden"
                  style={{
                    background: `conic-gradient(
                      from 0deg,
                      #1e2a5a 0deg 36deg,
                      #12183a 36deg 72deg,
                      #1e2a5a 72deg 108deg,
                      #12183a 108deg 144deg,
                      #1e2a5a 144deg 180deg,
                      #12183a 180deg 216deg,
                      #1e2a5a 216deg 252deg,
                      #12183a 252deg 288deg,
                      #1e2a5a 288deg 324deg,
                      #12183a 324deg 360deg
                    )`
                  }}
                >
                  {/* Prize segments */}
                  {discounts.map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ transform: `rotate(${i * 36}deg)` }}
                    >
                      <div className="w-1 h-1 bg-[#d4af37] rounded-full mt-2" />
                    </div>
                  ))}
                </motion.div>

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg">
                    <span className="text-[#0a0e1f] font-bold text-2xl">?</span>
                  </div>
                </div>

                {/* Pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-[#d4af37] clip-triangle" 
                  style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
                />
              </div>

              {/* Result or Spin Button */}
              {selectedDiscount ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="bg-[#d4af37]/20 border border-[#d4af37] rounded-xl p-6 mb-4">
                    <p className="text-[#f8f6f1]/70 text-sm mb-2">You won:</p>
                    <p className="text-[#d4af37] text-xl font-bold">{selectedDiscount}</p>
                  </div>
                  <p className="text-[#f8f6f1]/50 text-sm mb-4">
                    Screenshot this and mention it in your consultation!
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full hover:bg-[#f4d03f] transition-colors"
                  >
                    Claim Prize
                  </button>
                </motion.div>
              ) : (
                <div className="text-center">
                  <button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className="px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-bold text-lg rounded-full hover:bg-[#f4d03f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#d4af37]/30"
                  >
                    {isSpinning ? "Spinning..." : "SPIN THE WHEEL"}
                  </button>
                  <p className="text-[#f8f6f1]/50 text-sm mt-4">
                    Decision makers only. Must be present at meeting.
                  </p>
                </div>
              )}

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#d4af37] rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#d4af37] rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#d4af37] rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#d4af37] rounded-br-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
