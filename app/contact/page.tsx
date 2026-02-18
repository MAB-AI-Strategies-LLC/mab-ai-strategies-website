"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Linkedin,
  Twitter,
  Lock,
  User,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "login">("contact");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    setLoginError("");

    // Simulate login attempt - this would connect to your auth system
    setTimeout(() => {
      setIsLoginLoading(false);
      setLoginError("Member portal coming soon. Please contact us for access.");
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@mabaistrategies.com",
      href: "mailto:contact@mabaistrategies.com",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a Consultation",
      href: "https://calendar.app.google/kuwKF2VrDuyvdfN9A",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with us",
      href: "#",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "Follow us",
      href: "#",
    },
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-[#f8f6f1]/70 text-lg max-w-2xl mx-auto">
              Ready to transform your business with AI? We&apos;d love to hear from you.
              Reach out or schedule a consultation today.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-full p-1">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "contact"
                    ? "bg-[#d4af37] text-[#0a0e1f]"
                    : "text-[#f8f6f1] hover:text-[#d4af37]"
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-[#d4af37] text-[#0a0e1f]"
                    : "text-[#f8f6f1] hover:text-[#d4af37]"
                }`}
              >
                Member Login
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info or Login */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {activeTab === "contact" ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/40 transition-all duration-300 group"
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

                  {/* Additional Info */}
                  <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Office Hours
                    </h3>
                    <p className="text-[#f8f6f1]/70">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-[#f8f6f1]/50 text-sm mt-2">
                      We typically respond to inquiries within 24 hours.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Member Portal
                  </h2>
                  <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-[#d4af37]/20 rounded-full">
                        <Lock className="w-8 h-8 text-[#d4af37]" />
                      </div>
                    </div>

                    {loginError && (
                      <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-start space-x-2">
                        <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-yellow-400 text-sm">{loginError}</p>
                      </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label className="block text-[#f8f6f1] mb-2">Email</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f8f6f1]/30" />
                          <input
                            type="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] focus:outline-none focus:border-[#d4af37] transition-colors"
                            placeholder="member@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#f8f6f1] mb-2">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f8f6f1]/30" />
                          <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] focus:outline-none focus:border-[#d4af37] transition-colors"
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoginLoading}
                        className="w-full py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoginLoading ? "Signing in..." : "Sign In"}
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-[#d4af37]/20 text-center">
                      <a
                        href="#"
                        className="text-[#d4af37] hover:text-[#f4d03f] text-sm transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  {/* Portal Features */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-[#12183a]/50 border border-[#d4af37]/20 rounded-lg p-4 text-center">
                      <h4 className="text-[#d4af37] font-semibold">Workflow Studio</h4>
                      <p className="text-[#f8f6f1]/50 text-sm">Access your automations</p>
                    </div>
                    <div className="bg-[#12183a]/50 border border-[#d4af37]/20 rounded-lg p-4 text-center">
                      <h4 className="text-[#d4af37] font-semibold">Support</h4>
                      <p className="text-[#f8f6f1]/50 text-sm">Priority assistance</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Right Side - Form or Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {activeTab === "contact" ? (
                <div className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-64 h-64 mx-auto mb-8">
                      <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-full animate-pulse" />
                      <div className="absolute inset-4 border-2 border-[#d4af37]/30 rounded-full" />
                      <div className="absolute inset-8 border-2 border-[#d4af37]/40 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="w-16 h-16 text-[#d4af37]/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Member Portal Coming Soon
                    </h3>
                    <p className="text-[#f8f6f1]/70 max-w-sm mx-auto">
                      We&apos;re building a comprehensive member portal with access to 
                      Workflow Studio, support tickets, and exclusive resources.
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
