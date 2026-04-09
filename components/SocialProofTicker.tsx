"use client";

import { useEffect, useRef, useState } from "react";

interface ProofItem {
  text: string;
  detail: string;
  icon: string;
}

export default function SocialProofTicker() {
  const [items, setItems] = useState<ProofItem[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/social-proof.json")
      .then((r) => r.json())
      .then((data: ProofItem[]) => setItems([...data, ...data])) // duplicate for seamless loop
      .catch(() => {});
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className="w-full overflow-hidden border-y border-[#d4af37]/20 bg-[#0a0e1f]/80 backdrop-blur-sm py-3"
      aria-label="Recent client results"
    >
      <div
        ref={trackRef}
        className="flex gap-0 animate-ticker"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-8 whitespace-nowrap"
          >
            <span className="text-lg" role="img" aria-hidden="true">
              {item.icon}
            </span>
            <span className="font-bold text-[#d4af37]">{item.text}</span>
            <span className="text-[#f8f6f1]/50 text-sm">— {item.detail}</span>
            <span className="text-[#d4af37]/30 ml-6">◆</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
