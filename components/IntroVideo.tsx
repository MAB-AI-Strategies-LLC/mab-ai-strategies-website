"use client";

import { useState, useRef, useEffect } from "react";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked, show play button
      });
    }
  }, []);

  const handleVideoEnd = () => {
    // Fade out then complete
    const container = document.getElementById("intro-container");
    if (container) {
      container.style.opacity = "0";
      setTimeout(onComplete, 800);
    }
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  const handleSkip = () => {
    const container = document.getElementById("intro-container");
    if (container) {
      container.style.opacity = "0";
      setTimeout(onComplete, 500);
    }
  };

  return (
    <div
      id="intro-container"
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/media/Intro Video 1.mp4"
        onEnded={handleVideoEnd}
        onCanPlay={handleCanPlay}
        playsInline
        muted
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-3 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/50 rounded-full text-[#d4af37] text-sm font-medium hover:bg-[#d4af37]/30 transition-all duration-300 z-10"
      >
        Skip Intro
      </button>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#d4af37] text-sm">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Lock/unlock hint */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-3 text-[#f8f6f1]/50 text-sm">
        <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
        <span>Unlocking the future of business...</span>
      </div>
    </div>
  );
}
