"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, FileText, Loader2, CheckCircle } from "lucide-react";

interface ROIData {
  hoursPerWeek: number;
  hourlyRate: number;
  numEmployees: number;
  efficiencyGain: number;
  weeklySavings: number;
  monthlySavings: number;
  yearlySavings: number;
  teamYearlySavings: number;
  roiPercentage: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  roiData: ROIData;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fmt(v: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
}

export default function ROIEmailModal({ open, onClose, roiData }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) { setError("Please enter a valid email."); return; }
    setSending(true);
    setError("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          position: "",
          phone: "",
          coreTask: "ROI Report Request",
          endGoal: "free_time",
          alternateReason: `ROI Report — Hours/wk: ${roiData.hoursPerWeek}, Rate: $${roiData.hourlyRate}/hr, Employees: ${roiData.numEmployees}, Efficiency gain: ${roiData.efficiencyGain}%, Annual savings: ${fmt(roiData.teamYearlySavings)}, ROI: +${roiData.roiPercentage.toFixed(0)}%`,
          hoursPerWeek: roiData.hoursPerWeek,
          hourlyRate: roiData.hourlyRate,
          numEmployees: roiData.numEmployees,
          efficiencyGain: roiData.efficiencyGain,
          annualSavings: roiData.teamYearlySavings,
          timestamp: new Date().toISOString(),
          source: "MAB AI Website — ROI Report Request",
        }),
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setName(""); setEmail(""); setCompany("");
    setSent(false); setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9995] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,14,31,0.85)", backdropFilter: "blur(6px)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-md w-full bg-[#0a0e1f] border border-[#d4af37]/40 rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-br from-[#d4af37] via-transparent to-transparent" />

            <button onClick={handleClose} className="absolute top-4 right-4 text-[#f8f6f1]/40 hover:text-[#f8f6f1] transition-colors" aria-label="Close">
              <X size={20} />
            </button>

            {sent ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-500/20 rounded-full">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Report Sent!</h3>
                <p className="text-[#f8f6f1]/60 mb-6">
                  Check your inbox — your personalised ROI breakdown is on its way. We&apos;ll also follow up with implementation ideas tailored to your numbers.
                </p>
                <button onClick={handleClose} className="px-6 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all">
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-[#d4af37]/20 rounded-lg">
                    <FileText className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Get Your ROI Report</h3>
                    <p className="text-[#f8f6f1]/50 text-sm">We&apos;ll email your personalised breakdown</p>
                  </div>
                </div>

                {/* Summary preview */}
                <div className="bg-[#12183a] border border-[#d4af37]/20 rounded-xl p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f8f6f1]/60">Team annual savings</span>
                    <span className="font-bold text-[#d4af37]">{fmt(roiData.teamYearlySavings)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f8f6f1]/60">Estimated ROI</span>
                    <span className="font-bold text-green-400">+{roiData.roiPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f8f6f1]/60">Payback period</span>
                    <span className="font-bold text-[#f8f6f1]">
                      ~{Math.ceil(15000 / (roiData.teamYearlySavings / 12))} months
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm mb-4">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" placeholder="Full Name *" required value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#12183a] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] text-sm"
                    maxLength={120}
                  />
                  <input
                    type="email" placeholder="Work Email *" required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#12183a] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] text-sm"
                    maxLength={254}
                  />
                  <input
                    type="text" placeholder="Company" value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-[#12183a] border border-[#d4af37]/30 rounded-lg text-[#f8f6f1] placeholder-[#f8f6f1]/30 focus:outline-none focus:border-[#d4af37] text-sm"
                    maxLength={200}
                  />
                  <button
                    type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all disabled:opacity-50"
                  >
                    {sending ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Mail className="w-4 h-4" />Email My Report</>}
                  </button>
                </form>
                <p className="text-[#f8f6f1]/30 text-xs text-center mt-3">No spam. Unsubscribe any time.</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
