"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, Users, TrendingUp, ExternalLink, Info, Mail } from "lucide-react";
import ROIEmailModal from "./ROIEmailModal";

interface ROICalculatorProps {
  variant?: "landing" | "services";
}

const sourceLinks = [
  { title: "McKinsey: The State of AI", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  { title: "Deloitte: AI ROI Report", url: "https://www2.deloitte.com/us/en/insights/focus/cognitive-technologies/ai-adoption-in-the-workplace.html" },
  { title: "Gartner: AI Investment Analysis", url: "https://www.gartner.com/en/information-technology/insights/artificial-intelligence" },
  { title: "Industry Average: $15K-$50K for mid-market automation", url: "#" },
];

export default function ROICalculator({ variant = "services" }: ROICalculatorProps) {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [numEmployees, setNumEmployees] = useState(5);
  const [efficiencyGain, setEfficiencyGain] = useState(40);
  const [showSources, setShowSources] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  // Calculate ROI
  const weeklySavings = hoursPerWeek * hourlyRate * (efficiencyGain / 100);
  const monthlySavings = weeklySavings * 4.33;
  const yearlySavings = monthlySavings * 12;
  const teamYearlySavings = yearlySavings * numEmployees;
  const roiPercentage = ((yearlySavings - 15000) / 15000) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const sliderVars = [
    { label: "Hours per week", value: hoursPerWeek, unit: "hrs", min: 5, max: 60, setter: setHoursPerWeek, icon: Clock },
    { label: "Hourly rate", value: hourlyRate, unit: "$", min: 25, max: 250, step: 5, setter: setHourlyRate, icon: DollarSign },
    { label: "Employees", value: numEmployees, unit: "", min: 1, max: 100, setter: setNumEmployees, icon: Users },
    { label: "Efficiency gain", value: efficiencyGain, unit: "%", min: 10, max: 80, setter: setEfficiencyGain, icon: TrendingUp },
  ];

  const roiData = {
    hoursPerWeek,
    hourlyRate,
    numEmployees,
    efficiencyGain,
    weeklySavings,
    monthlySavings,
    yearlySavings,
    teamYearlySavings,
    roiPercentage,
  };

  return (
    <div className="relative">
      {/* Electric Frame Effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-50"
        style={{
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0%", "-200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="relative bg-[#12183a]/90 backdrop-blur-sm border border-[#d4af37]/50 rounded-2xl p-8">
        {/* Header with gradient */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-[#d4af37]/20 rounded-lg">
            <Calculator className="w-6 h-6 text-[#d4af37]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d4af37] via-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent">
            ROI Calculator
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-8">
            {sliderVars.map((variable, index) => (
              <div key={variable.label} className="relative">
                {/* Separator line */}
                {index > 0 && (
                  <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                )}
                
                <label className="flex items-center space-x-2 text-[#f8f6f1] mb-3">
                  <variable.icon size={18} className="text-[#d4af37]" />
                  <span>{variable.label}</span>
                </label>
                
                {/* Slider with gold line */}
                <div className="relative">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#1e2a5a] rounded-full" />
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full"
                    style={{ width: `${((variable.value - variable.min) / (variable.max - variable.min)) * 100}%` }}
                  />
                  <input
                    type="range"
                    min={variable.min}
                    max={variable.max}
                    step={variable.step || 1}
                    value={variable.value}
                    onChange={(e) => variable.setter(Number(e.target.value))}
                    className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
                    style={{
                      accentColor: "#d4af37",
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-[#a0a8c0] mt-2">
                  <span>{variable.unit}{variable.min}</span>
                  <span className="text-[#d4af37] font-semibold">
                    {variable.unit}{variable.value}{variable.unit === "" ? "" : ""}
                    {variable.label.includes("Employees") ? " employees" : variable.label.includes("Efficiency") ? "%" : ""}
                  </span>
                  <span>{variable.unit}{variable.max}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results Section */}
          <div className="bg-[#0a0e1f] rounded-xl p-6 border border-[#d4af37]/30 relative overflow-hidden">
            {/* Electric border effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, #d4af37, #87CEEB, transparent)",
                backgroundSize: "300% 100%",
              }}
              animate={{
                backgroundPosition: ["300% 0%", "-300% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-[#f8f6f1] mb-6">Projected Savings</h4>

              <div className="space-y-4">
                {/* Weekly savings */}
                <div className="flex items-center justify-between p-4 bg-[#12183a] rounded-lg border border-[#d4af37]/10">
                  <span className="text-[#f8f6f1]/70">Weekly savings</span>
                  <motion.span
                    key={weeklySavings}
                    initial={{ scale: 1.1, color: "#f4d03f" }}
                    animate={{ scale: 1, color: "#d4af37" }}
                    className="text-xl font-bold"
                  >
                    {formatCurrency(weeklySavings)}
                  </motion.span>
                </div>

                {/* Monthly savings */}
                <div className="flex items-center justify-between p-4 bg-[#12183a] rounded-lg border border-[#d4af37]/10">
                  <span className="text-[#f8f6f1]/70">Monthly savings</span>
                  <motion.span
                    key={monthlySavings}
                    initial={{ scale: 1.1, color: "#f4d03f" }}
                    animate={{ scale: 1, color: "#d4af37" }}
                    className="text-xl font-bold"
                  >
                    {formatCurrency(monthlySavings)}
                  </motion.span>
                </div>

                {/* Yearly savings - Individual */}
                <div className="flex items-center justify-between p-4 bg-[#12183a] rounded-lg border border-[#d4af37]/10">
                  <span className="text-[#f8f6f1]/70">Yearly savings (per person)</span>
                  <motion.span
                    key={yearlySavings}
                    initial={{ scale: 1.1, color: "#f4d03f" }}
                    animate={{ scale: 1, color: "#d4af37" }}
                    className="text-xl font-bold"
                  >
                    {formatCurrency(yearlySavings)}
                  </motion.span>
                </div>

                {/* Total team savings */}
                <div className="flex items-center justify-between p-4 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-lg">
                  <span className="text-[#f8f6f1] font-semibold">Total team yearly savings</span>
                  <motion.span
                    key={teamYearlySavings}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold gradient-gold"
                  >
                    {formatCurrency(teamYearlySavings)}
                  </motion.span>
                </div>
              </div>

              {/* ROI Indicator with Source Button */}
              <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#f8f6f1]/70">Estimated ROI</span>
                  <span className="text-green-400 font-bold text-lg">
                    +{roiPercentage.toFixed(0)}%
                  </span>
                </div>
                
                {/* Source button */}
                <div className="flex items-center justify-between">
                  <p className="text-[#f8f6f1]/50 text-sm">
                    * Based on typical $15K AI automation investment
                  </p>
                  <button
                    onClick={() => setShowSources(!showSources)}
                    className="flex items-center space-x-1 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm hover:bg-[#d4af37]/20 transition-colors"
                  >
                    <Info size={14} />
                    <span>Source</span>
                  </button>
                </div>

                {/* Source links popup */}
                {showSources && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-[#12183a] border border-[#d4af37]/30 rounded-lg"
                  >
                    <p className="text-[#f8f6f1]/70 text-sm mb-3">Data sources and industry benchmarks:</p>
                    <ul className="space-y-2">
                      {sourceLinks.map((source, i) => (
                        <li key={i}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-[#d4af37] text-sm hover:text-[#f4d03f] transition-colors"
                          >
                            <ExternalLink size={12} />
                            <span>{source.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Email My Report CTA */}
              <div className="mt-4">
                <button
                  onClick={() => setEmailModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#d4af37] text-[#0a0e1f] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300"
                >
                  <Mail size={16} />
                  Email My Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ROIEmailModal
        open={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        roiData={roiData}
      />
    </div>
  );
}
