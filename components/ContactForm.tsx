"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Mic } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    coreTask: "",
    endGoal: "",
    alternateReason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "MAB AI Website Contact Form v2",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#12183a] border border-[#d4af37]/30 rounded-2xl p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-green-500/20 rounded-full">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold gradient-gold mb-2">Message Sent!</h3>
        <p className="text-[#f8f6f1]/70">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[#f8f6f1] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-[#f8f6f1] mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      {/* Row 2: Position & Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="position" className="block text-[#f8f6f1] mb-2">
            Position/Title *
          </label>
          <input
            type="text"
            id="position"
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
            placeholder="Director of Operations"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[#f8f6f1] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[#f8f6f1] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
          placeholder="john@company.com"
        />
      </div>

      {/* Core Task */}
      <div>
        <label htmlFor="coreTask" className="block text-[#f8f6f1] mb-2">
          If you had to funnel your job responsibility down to one core task, what is it? *
        </label>
        <input
          type="text"
          id="coreTask"
          name="coreTask"
          required
          value={formData.coreTask}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
          placeholder="e.g., Managing vendor relationships, Strategic planning, Operations oversight..."
        />
      </div>

      {/* End Goal */}
      <div>
        <label htmlFor="endGoal" className="block text-[#f8f6f1] mb-2">
          What is the &quot;end&quot; goal with AI in your company? *
        </label>
        <select
          id="endGoal"
          name="endGoal"
          required
          value={formData.endGoal}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] focus:outline-none focus:border-[#d4af37] transition-colors"
        >
          <option value="">Select your primary goal...</option>
          <option value="free_time">Free up time for strategic work</option>
          <option value="culture">Improve company culture</option>
          <option value="revenue">Increase revenue</option>
          <option value="acquisition">Prepare for acquisition</option>
          <option value="new_branch">Open new branch/department</option>
          <option value="ipo">Going public (IPO)</option>
          <option value="something_bigger">Something bigger</option>
        </select>
      </div>

      {/* Alternate Reason */}
      <div>
        <label htmlFor="alternateReason" className="block text-[#f8f6f1] mb-2">
          Alternate reason for reaching out? (Optional)
        </label>
        <textarea
          id="alternateReason"
          name="alternateReason"
          rows={3}
          value={formData.alternateReason}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#0a0e1f] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
          placeholder="Tell us more about your specific needs or situation..."
        />
      </div>

      {/* Multi-modal indicator */}
      <div className="flex items-center space-x-2 text-[#f8f6f1]/50 text-sm">
        <Mic className="w-4 h-4" />
        <span>Voice input available on supported devices</span>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
