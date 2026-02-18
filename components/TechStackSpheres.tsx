"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "LLMs",
    items: ["GPT-4", "Claude", "Gemini", "Llama"],
    color: "#d4af37",
  },
  {
    title: "Agents",
    items: ["LangChain", "AutoGen", "CrewAI", "ReAct"],
    color: "#87CEEB",
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer"],
    color: "#f4d03f",
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
    color: "#1E90FF",
  },
  {
    title: "Cloud",
    items: ["AWS", "GCP", "Azure", "Docker"],
    color: "#d4af37",
  },
  {
    title: "Security",
    items: ["SOC 2", "GDPR", "Encryption", "OAuth"],
    color: "#87CEEB",
  },
];

export default function TechStackSpheres() {
  return (
    <section className="py-20 bg-[#0a0e1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-gold mb-4">
            Technology Stack
          </h2>
          <p className="text-[#f8f6f1]/70 max-w-2xl mx-auto">
            Enterprise-grade technologies powering our AI solutions
          </p>
        </motion.div>

        {/* Spheres Container */}
        <div className="relative flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* 3D Sphere */}
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                {/* Spinning Sphere */}
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 15, -15, 0],
                  }}
                  transition={{
                    rotateY: {
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    rotateX: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${category.color}40, ${category.color}20, transparent 70%)`,
                    boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px ${category.color}30, 0 0 30px ${category.color}20`,
                  }}
                >
                  {/* Inner glow */}
                  <div 
                    className="absolute inset-2 rounded-full opacity-50"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, ${category.color}60, transparent 60%)`,
                    }}
                  />
                  
                  {/* Surface lines for 3D effect */}
                  <div className="absolute inset-0 rounded-full border border-[#d4af37]/20" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
                </motion.div>

                {/* Floating particles around sphere */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + index * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-20%]"
                >
                  <div 
                    className="absolute top-0 left-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <div 
                    className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full opacity-50"
                    style={{ backgroundColor: category.color }}
                  />
                </motion.div>
              </div>

              {/* Shield Label - King Arthur style */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  {/* Shield shape */}
                  <div 
                    className="px-4 py-1 rounded-t-lg"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}30, transparent)`,
                      borderTop: `2px solid ${category.color}`,
                      borderLeft: `1px solid ${category.color}50`,
                      borderRight: `1px solid ${category.color}50`,
                    }}
                  >
                    <span className="text-xs md:text-sm font-bold text-[#f8f6f1] whitespace-nowrap">
                      {category.title}
                    </span>
                  </div>
                  {/* Shield point */}
                  <div 
                    className="w-full h-3"
                    style={{
                      background: `linear-gradient(to bottom, ${category.color}30, transparent)`,
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Hover tooltip with items */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <div className="bg-[#12183a] border border-[#d4af37]/50 rounded-lg px-3 py-2 whitespace-nowrap">
                  <p className="text-[#d4af37] text-xs font-semibold mb-1">{category.title}</p>
                  <p className="text-[#f8f6f1]/70 text-xs">{category.items.join(" • ")}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#87CEEB]/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
