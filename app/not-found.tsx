import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0e1f] text-[#f8f6f1] flex flex-col">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="geometric-orb w-[400px] h-[400px] top-20 -right-40 animate-drift opacity-40" />
      </div>

      <Header />

      <div className="flex-1 flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-lg">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4">
            404 — Page Not Found
          </p>
          <h1 className="text-6xl md:text-8xl font-bold gradient-gold mb-6">404</h1>
          <p className="text-2xl font-semibold text-[#f8f6f1] mb-4">
            This page doesn&apos;t exist yet.
          </p>
          <p className="text-[#f8f6f1]/60 mb-10">
            Even the best automation systems have gaps. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full hover:bg-[#f4d03f] transition-all duration-300"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
