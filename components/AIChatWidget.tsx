"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Message {
  role: "bot" | "user";
  text: string;
}

interface QualifierData {
  industry?: string;
  companySize?: string;
  goal?: string;
}

const QUESTIONS = [
  {
    key: "industry" as const,
    text: "What industry are you in?",
    options: ["Technology", "Healthcare", "Finance", "Retail / E-commerce", "Manufacturing", "Professional Services", "Other"],
  },
  {
    key: "companySize" as const,
    text: "How large is your team?",
    options: ["Solo / Freelancer", "2–10 people", "11–50 people", "51–200 people", "200+ people"],
  },
  {
    key: "goal" as const,
    text: "What's your primary goal with AI?",
    options: [
      "Free up time for strategic work",
      "Increase revenue",
      "Improve company culture",
      "Prepare for acquisition / IPO",
      "Automate a specific workflow",
    ],
  },
];

const GOAL_MAP: Record<string, string> = {
  "Free up time for strategic work": "free_time",
  "Increase revenue": "revenue",
  "Improve company culture": "culture",
  "Prepare for acquisition / IPO": "acquisition",
  "Automate a specific workflow": "something_bigger",
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [data, setData] = useState<QualifierData>({});
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Open with greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: "Hey! I'm the MAB AI pre-qualifier. I'll ask 3 quick questions so we can tailor your consultation. Ready?",
        },
      ]);
    }
  }, [open, messages.length]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option: string) => {
    const q = QUESTIONS[step];
    const updatedData = { ...data, [q.key]: option };
    setData(updatedData);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: option },
    ]);

    if (step + 1 < QUESTIONS.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: QUESTIONS[step + 1].text },
        ]);
        setStep((s) => s + 1);
      }, 400);
    } else {
      // All questions answered
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: `Perfect. Based on what you've shared, I can already see a few high-impact automation opportunities. Let's get you connected with Mark — I'll pre-fill your info so you don't have to retype it.`,
          },
        ]);
        setDone(true);
      }, 400);
    }
  };

  const goToContactForm = () => {
    const params = new URLSearchParams();
    if (data.industry) params.set("industry", data.industry);
    if (data.companySize) params.set("companySize", data.companySize);
    if (data.goal) {
      params.set("endGoal", GOAL_MAP[data.goal] ?? "something_bigger");
      params.set("coreTask", data.goal);
    }
    router.push(`/contact?${params.toString()}`);
    setOpen(false);
  };

  const reset = () => {
    setStep(0);
    setMessages([]);
    setData({});
    setDone(false);
  };

  const currentOptions = !done && messages.length > 0 ? QUESTIONS[step]?.options : [];

  return (
    <>
      {/* Floating bubble */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-[9990] flex items-center gap-2 px-4 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-full shadow-lg hover:bg-[#f4d03f] transition-colors ${open ? "hidden" : ""}`}
        aria-label="Open AI pre-qualifier chat"
      >
        <MessageCircle size={20} />
        <span className="text-sm">Quick qualifier</span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[9990] w-[340px] max-h-[520px] flex flex-col bg-[#0a0e1f] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#d4af37]/20 bg-[#12183a]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#f8f6f1] font-semibold text-sm">MAB AI Qualifier</span>
              </div>
              <button
                onClick={() => { setOpen(false); reset(); }}
                className="text-[#f8f6f1]/40 hover:text-[#f8f6f1] transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#d4af37] text-[#0a0e1f] font-medium"
                        : "bg-[#12183a] text-[#f8f6f1]/90 border border-[#d4af37]/20"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Option buttons */}
              {!done && currentOptions && currentOptions.length > 0 && (
                <div className="space-y-2 pt-1">
                  {currentOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOption(opt)}
                      className="w-full text-left px-3 py-2 bg-[#12183a] border border-[#d4af37]/30 text-[#f8f6f1]/80 text-sm rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center justify-between group"
                    >
                      <span>{opt}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4af37]" />
                    </button>
                  ))}
                </div>
              )}

              {/* CTA after completion */}
              {done && (
                <div className="pt-2 space-y-2">
                  <button
                    onClick={goToContactForm}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-xl hover:bg-[#f4d03f] transition-all text-sm"
                  >
                    <Send size={14} />
                    Continue to Contact Form
                  </button>
                  <button
                    onClick={reset}
                    className="w-full text-[#f8f6f1]/40 text-xs hover:text-[#f8f6f1]/60 transition-colors py-1"
                  >
                    Start over
                  </button>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
