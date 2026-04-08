"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Mic } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  coreTask: string;
  endGoal: string;
  alternateReason: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  position?: string;
  coreTask?: string;
  endGoal?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.company.trim()) errors.company = "Company name is required.";
  if (!data.position.trim()) errors.position = "Position/title is required.";
  if (!data.coreTask.trim()) errors.coreTask = "Please describe your core task.";
  if (!data.endGoal) errors.endGoal = "Please select your primary goal.";
  return errors;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  position: "",
  phone: "",
  coreTask: "",
  endGoal: "",
  alternateReason: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name as keyof FormData]) {
      const newErrors = validateForm(updated);
      setErrors(newErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateForm(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof FormData, boolean>
    );
    setTouched(allTouched);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _hp: honeypot,
          timestamp: new Date().toISOString(),
          source: "MAB AI Website Contact Form v2",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to submit form.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
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

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-[#0a0e1f] border rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none transition-colors ${
      hasError
        ? "border-red-500/70 focus:border-red-500"
        : "border-[#d4af37]/30 focus:border-[#d4af37]"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from humans, filled by bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", tabIndex: -1 }}>
        <label htmlFor="_hp">Leave this field empty</label>
        <input
          type="text"
          id="_hp"
          name="_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {submitError && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
          {submitError}
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[#f8f6f1] mb-2">
            Full Name <span className="text-[#d4af37]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass(!!errors.name && !!touched.name)}
            placeholder="John Doe"
            maxLength={120}
          />
          {errors.name && touched.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-[#f8f6f1] mb-2">
            Company Name <span className="text-[#d4af37]">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass(!!errors.company && !!touched.company)}
            placeholder="Acme Inc."
            maxLength={200}
          />
          {errors.company && touched.company && (
            <p className="mt-1 text-sm text-red-400">{errors.company}</p>
          )}
        </div>
      </div>

      {/* Row 2: Position & Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="position" className="block text-[#f8f6f1] mb-2">
            Position/Title <span className="text-[#d4af37]">*</span>
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass(!!errors.position && !!touched.position)}
            placeholder="Director of Operations"
            maxLength={200}
          />
          {errors.position && touched.position && (
            <p className="mt-1 text-sm text-red-400">{errors.position}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-[#f8f6f1] mb-2">
            Phone Number <span className="text-[#f8f6f1]/40 text-sm">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass(false)}
            placeholder="+1 (555) 123-4567"
            maxLength={30}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[#f8f6f1] mb-2">
          Email Address <span className="text-[#d4af37]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldClass(!!errors.email && !!touched.email)}
          placeholder="john@company.com"
          maxLength={254}
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Core Task */}
      <div>
        <label htmlFor="coreTask" className="block text-[#f8f6f1] mb-2">
          If you had to funnel your job responsibility down to one core task, what is it?{" "}
          <span className="text-[#d4af37]">*</span>
        </label>
        <input
          type="text"
          id="coreTask"
          name="coreTask"
          value={formData.coreTask}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldClass(!!errors.coreTask && !!touched.coreTask)}
          placeholder="e.g., Managing vendor relationships, Strategic planning, Operations oversight..."
          maxLength={500}
        />
        {errors.coreTask && touched.coreTask && (
          <p className="mt-1 text-sm text-red-400">{errors.coreTask}</p>
        )}
      </div>

      {/* End Goal */}
      <div>
        <label htmlFor="endGoal" className="block text-[#f8f6f1] mb-2">
          What is the &quot;end&quot; goal with AI in your company?{" "}
          <span className="text-[#d4af37]">*</span>
        </label>
        <select
          id="endGoal"
          name="endGoal"
          value={formData.endGoal}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldClass(!!errors.endGoal && !!touched.endGoal)}
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
        {errors.endGoal && touched.endGoal && (
          <p className="mt-1 text-sm text-red-400">{errors.endGoal}</p>
        )}
      </div>

      {/* Alternate Reason */}
      <div>
        <label htmlFor="alternateReason" className="block text-[#f8f6f1] mb-2">
          Anything else you&apos;d like us to know?{" "}
          <span className="text-[#f8f6f1]/40 text-sm">(optional)</span>
        </label>
        <textarea
          id="alternateReason"
          name="alternateReason"
          rows={3}
          value={formData.alternateReason}
          onChange={handleChange}
          className={fieldClass(false)}
          placeholder="Tell us more about your specific needs or situation..."
          maxLength={2000}
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
