"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Lightbulb, Users, Target } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Strategic Integrity",
    description:
      "We provide honest, data-backed guidance. If a solution doesn't serve your long-term ROI, we don't build it.",
  },
  {
    icon: Lightbulb,
    title: "Iterative Innovation",
    description:
      "The AI landscape changes weekly. We stay at the cutting edge so our clients are always ahead of the curve, never playing catch-up.",
  },
  {
    icon: Users,
    title: "Client-Centricity",
    description:
      "Your business goals dictate our technical path. We listen first and build second, ensuring every strategy is a perfect fit for your culture.",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description:
      'We believe in "AI with a purpose"—delivering clean, efficient, and scalable systems that minimize friction and maximize output.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1f] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="geometric-orb w-[600px] h-[600px] top-20 -right-40 animate-drift" />
        <div className="geometric-orb w-[400px] h-[400px] bottom-40 left-20 animate-pulse-glow" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-gold">MAB AI Strategies</span>
            </h1>
          </motion.div>

          {/* About Content with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Bridging Innovation and Growth
              </h2>
              <div className="space-y-4 text-[#f8f6f1]/80 leading-relaxed">
                <p>
                  In an era defined by rapid technological shifts, MAB AI Strategies serves 
                  as the bridge between emerging innovation and sustainable business growth. 
                  We believe that Artificial Intelligence is more than a suite of tools—it 
                  is a foundational shift in how the world does business.
                </p>
                <p>
                  Our approach is rooted in <strong className="text-[#d4af37]">Strategic Precision</strong>. 
                  We don&apos;t just implement technology; we architect bespoke AI frameworks designed 
                  to integrate seamlessly into existing operations while opening new doors for 
                  scalability.
                </p>
                <p>
                  At MAB, our success is measured solely by the competitive advantage we secure 
                  for our clients. By combining high-level technical expertise with a deep 
                  understanding of corporate objectives, we turn the complexity of AI into your 
                  greatest strategic asset.
                </p>
              </div>
            </motion.div>

            {/* Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#d4af37]/30">
                <Image
                  src="/media/Professional Headshot.png"
                  alt="Mark Bockrath - Founder & CEO"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1f]/80 via-transparent to-transparent" />
              </div>
              
              {/* Name Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#12183a]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-xl p-4">
                <h3 className="text-xl font-bold text-white">Mark Bockrath</h3>
                <p className="text-[#d4af37]">Founder & CEO</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#d4af37]/20 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#d4af37]/20 rounded-xl" />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-gold">Core Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#d4af37]/20 rounded-lg">
                      <value.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#f8f6f1]/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder's Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                The <span className="gradient-gold">Founder&apos;s Note</span>
              </h2>

              <div className="space-y-6 text-[#f8f6f1]/80 leading-relaxed text-lg">
                <p className="text-[#d4af37] font-semibold text-xl">
                  To Our Partners and Future Collaborators,
                </p>

                <p>
                  The narrative around Artificial Intelligence often shifts between two 
                  extremes: hype and hesitation. At MAB AI Strategies, we operate in the 
                  space between—the space of practical, high-impact application.
                </p>

                <p>
                  I founded MAB because I saw a recurring gap in the market. Companies were 
                  eager to adopt AI but lacked a roadmap that aligned technology with their 
                  specific business DNA. We don&apos;t believe in &ldquo;AI for AI&apos;s sake.&rdquo; We believe 
                  in AI as a lever for competitive advantage, operational precision, and 
                  long-term scalability.
                </p>

                <p>
                  Our commitment to you is simple: We provide the strategic clarity needed 
                  to navigate this transition. We aren&apos;t just here to help you keep pace with 
                  the future; we are here to ensure you <strong className="text-[#d4af37]">lead it</strong>.
                </p>

                <div className="pt-6 border-t border-[#d4af37]/20">
                  <p className="text-white font-semibold text-xl">
                    — Mark Bockrath, Founder and CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work <span className="gradient-gold">Together?</span>
          </h2>
          <p className="text-[#f8f6f1]/70 text-lg mb-8">
            Let&apos;s discuss how MAB AI Strategies can help transform your business.
          </p>
          <a
            href="https://calendar.app.google/kuwKF2VrDuyvdfN9A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-[#d4af37] text-[#0a0e1f] font-bold text-lg rounded-full hover:bg-[#f4d03f] transition-all duration-300"
          >
            <span>Schedule a Consultation</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
