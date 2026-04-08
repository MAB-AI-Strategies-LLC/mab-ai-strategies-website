"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0e1f] text-[#f8f6f1] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4">
            500 — Something Went Wrong
          </p>
          <h1 className="text-5xl md:text-7xl font-bold gradient-gold mb-6">Oops.</h1>
          <p className="text-xl font-semibold text-[#f8f6f1] mb-4">
            An unexpected error occurred.
          </p>
          <p className="text-[#f8f6f1]/60 mb-10">
            Our systems are designed to recover automatically. Try again, or reach out if
            the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full hover:bg-[#f4d03f] transition-all duration-300"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-4 border border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
