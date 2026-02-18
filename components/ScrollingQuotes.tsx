"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface Quote {
  text: string;
  author: string;
  role: string;
  stockGain?: string;
}

const quotes: Quote[] = [
  {
    text: "AI will be the greatest force for economic empowerment the world has ever seen.",
    author: "Sam Altman",
    role: "CEO, OpenAI",
    stockGain: "+247%",
  },
  {
    text: "The pace of AI progress is faster than any technology in human history.",
    author: "Dario Amodei",
    role: "CEO, Anthropic",
    stockGain: "+189%",
  },
  {
    text: "Those who don't adopt AI will be left behind. The time to act is now.",
    author: "Elon Musk",
    role: "CEO, Tesla & xAI",
    stockGain: "+312%",
  },
  {
    text: "AI isn't just about automation—it's about augmenting human potential at scale.",
    author: "Satya Nadella",
    role: "CEO, Microsoft",
    stockGain: "+156%",
  },
  {
    text: "The businesses that integrate AI today will dominate their industries tomorrow.",
    author: "Sundar Pichai",
    role: "CEO, Google",
    stockGain: "+203%",
  },
  {
    text: "Every company will be an AI company. The question is: will you lead or follow?",
    author: "Jensen Huang",
    role: "CEO, NVIDIA",
    stockGain: "+425%",
  },
  {
    text: "AI is creating productivity gains we haven't seen since the industrial revolution.",
    author: "Arvind Krishna",
    role: "CEO, IBM",
    stockGain: "+128%",
  },
  {
    text: "The ROI on AI investments is exceeding all expectations. Early adopters are winning.",
    author: "Marc Benioff",
    role: "CEO, Salesforce",
    stockGain: "+175%",
  },
];

export default function ScrollingQuotes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled half the content (for seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-16 bg-[#0a0e1f] border-y border-[#d4af37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold gradient-gold">
          Industry Leaders on AI
        </h2>
        <p className="text-center text-[#f8f6f1]/60 mt-2">
          What the world's top tech visionaries are saying about the AI revolution
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e1f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e1f] to-transparent z-10 pointer-events-none" />

        {/* Quotes track */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 will-change-transform"
            style={{ width: "fit-content" }}
          >
            {/* Double the quotes for seamless loop */}
            {[...quotes, ...quotes].map((quote, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[400px] md:w-[500px] bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6"
                whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Quote text */}
                <p className="text-[#f8f6f1] text-lg leading-relaxed mb-4">
                  &ldquo;{quote.text}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#d4af37] font-semibold">{quote.author}</p>
                    <p className="text-[#f8f6f1]/50 text-sm">{quote.role}</p>
                  </div>

                  {/* Stock gain indicator */}
                  {quote.stockGain && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <TrendingUp size={16} />
                      <span className="font-bold">{quote.stockGain}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-center text-[#f8f6f1]/40 text-sm">
          * Stock performance indicators show growth since AI initiatives began (2024)
        </p>
      </div>
    </section>
  );
}
