"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import ServicesFlywheel from "@/components/ServicesFlywheel";
import { motion } from "framer-motion";
import {
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1f] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="geometric-orb w-[500px] h-[500px] top-40 -left-40 animate-drift" />
        <div className="geometric-orb w-[400px] h-[400px] bottom-40 right-20 animate-pulse-glow" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#f8f6f1]/70 text-lg max-w-3xl mx-auto"
          >
            Comprehensive AI solutions designed to transform your business operations, 
            drive efficiency, and deliver measurable ROI.
          </motion.p>
        </div>
      </section>

      {/* Services Flywheel */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesFlywheel />
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 relative z-10 border-t border-[#d4af37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#87CEEB] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent mb-4">
                Stay Ahead of the Curve
              </h2>

              <p className="text-[#f8f6f1]/70 mb-2 max-w-xl mx-auto">
                Get exclusive AI automation insights, case studies, and strategy frameworks
                delivered directly to your inbox.
              </p>

              <p className="text-[#f8f6f1]/50 text-sm mb-8">
                No spam. Unsubscribe at any time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors w-full"
                />
                <button className="px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-bold rounded-lg hover:bg-[#f4d03f] transition-all w-full sm:w-auto whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent mb-6">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-[#f8f6f1]/70 text-lg mb-8">
            Ready to see how AI can transform your business? Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/kuwKF2VrDuyvdfN9A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full hover:bg-[#f4d03f] transition-all duration-300"
            >
              <Calendar size={20} />
              <span>Schedule Consultation</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-8 py-4 border border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
