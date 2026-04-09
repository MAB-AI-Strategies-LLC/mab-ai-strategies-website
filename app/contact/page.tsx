"use client";

import { useState, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  Linkedin,
  Twitter,
  Loader2,
  CheckCircle,
  Zap,
  LayoutDashboard,
  HeadphonesIcon,
} from "lucide-react";
import { URLS, CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "portal">("contact");

  // Waitlist state
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistDone, setWaitlistDone] = useState(false);
  const [waitlistError, setWaitlistError] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitting(true);
    setWaitlistError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: waitlistName,
          email: waitlistEmail,
          company: "",
          position: "",
          phone: "",
          coreTask: "Member Portal Waitlist",
          endGoal: "something_bigger",
          alternateReason: "",
          timestamp: new Date().toISOString(),
          source: "MAB AI Website — Member Portal Waitlist",
        }),
      });
      if (!res.ok) throw new Error();
      setWaitlistDone(true);
    } catch {
      setWaitlistError("Something went wrong. Please try again.");
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail,     label: "Email",    value: CONTACT.supportEmail, href: `mailto:${CONTACT.supportEmail}` },
    { icon: Calendar, label: "Schedule", value: "Book a Consultation", href: URLS.calendarBooking },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with us",     href: URLS.linkedin },
    { icon: Twitter,  label: "Twitter",  value: "Follow us",           href: URLS.twitter },
  ];

  const portalFeatures = [
    { icon: LayoutDashboard, title: "Workflow Studio",    desc: "Access and manage your live automations" },
    { icon: HeadphonesIcon,  title: "Priority Support",  desc: "Dedicated support queue for active clients" },
    { icon: Zap,             title: "Automation Library", desc: "Download exclusive GPTs and workflow templates" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0e1f] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="geometric-orb w-[500px] h-[500px] top-40 -left-40 animate-drift" />
        <div className="geometric-orb w-[400px] h-[400px] bottom-40 right-20 animate-pulse-glow" />
      </div>

      <Header />

      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-[#f8f6f1]/70 text-lg max-w-2xl mx-auto">
              Ready to transform your business with AI? Reach out or schedule a consultation today.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-full p-1">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === "contact" ? "bg-[#d4af37] text-[#0a0e1f]" : "text-[#f8f6f1] hover:text-[#d4af37]"}`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab("portal")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === "portal" ? "bg-[#d4af37] text-[#0a0e1f]" : "text-[#f8f6f1] hover:text-[#d4af37]"}`}
              >
                Member Portal
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {activeTab === "contact" ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, i) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/40 transition-all group"
                      >
                        <div className="p-3 bg-[#d4af37]/20 rounded-lg group-hover:bg-[#d4af37]/30 transition-colors">
                          <item.icon className="w-5 h-5 text-[#d4af37]" />
                        </div>
                        <div>
                          <p className="text-[#f8f6f1]/50 text-sm">{item.label}</p>
                          <p className="text-[#f8f6f1] font-medium">{item.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  <div className="bg-[#12183a]/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-[#f8f6f1]/70">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                    <p className="text-[#f8f6f1]/50 text-sm mt-2">We typically respond within 24 hours.</p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Member Portal</h2>
                  <p className="text-[#f8f6f1]/60 mb-8">
                    We&apos;re building a comprehensive portal for active MAB AI clients. Join the waitlist for early access and an exclusive launch bonus.
                  </p>

                  {/* Feature previews */}
                  <div className="space-y-4 mb-8">
                    {portalFeatures.map((feat) => (
                      <div key={feat.title} className="flex items-start gap-4 p-4 bg-[#12183a]/50 border border-[#d4af37]/20 rounded-xl">
                        <div className="p-2.5 bg-[#d4af37]/20 rounded-lg shrink-0">
                          <feat.icon className="w-5 h-5 text-[#d4af37]" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{feat.title}</p>
                          <p className="text-[#f8f6f1]/50 text-sm">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Waitlist form */}
                  {waitlistDone ? (
                    <div className="flex items-center gap-3 p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                      <div>
                        <p className="text-white font-semibold">You&apos;re on the list!</p>
                        <p className="text-[#f8f6f1]/60 text-sm">We&apos;ll notify you as soon as early access opens.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleWaitlist} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text" placeholder="Your Name" required value={waitlistName}
                          onChange={(e) => setWaitlistName(e.target.value)}
                          className="px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                          maxLength={120}
                        />
                        <input
                          type="email" placeholder="Work Email" required value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          className="px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                          maxLength={254}
                        />
                      </div>
                      {waitlistError && <p className="text-red-400 text-sm">{waitlistError}</p>}
                      <button
                        type="submit" disabled={waitlistSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all disabled:opacity-50"
                      >
                        {waitlistSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Joining...</> : <>Join Waitlist — Get Early Access</>}
                      </button>
                      <p className="text-[#f8f6f1]/30 text-xs text-center">No spam. Notified when portal launches.</p>
                    </form>
                  )}
                </>
              )}
            </motion.div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              {activeTab === "contact" ? (
                <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <Suspense fallback={null}><ContactForm /></Suspense>
                </div>
              ) : (
                <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-56 h-56 mx-auto mb-8">
                      <div className="absolute inset-0 border-2 border-[#d4af37]/10 rounded-full animate-pulse" />
                      <div className="absolute inset-6 border-2 border-[#d4af37]/20 rounded-full" />
                      <div className="absolute inset-12 border-2 border-[#d4af37]/30 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-14 h-14 text-[#d4af37]/60" />
                      </div>
                    </div>
                    <p className="text-[#d4af37] font-semibold mb-2">Early Access Bonus</p>
                    <p className="text-[#f8f6f1]/60 text-sm max-w-xs mx-auto">
                      Waitlist members get a complimentary 30-min workflow audit when the portal launches.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
