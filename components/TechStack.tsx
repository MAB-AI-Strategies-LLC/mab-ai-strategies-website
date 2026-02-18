"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Layers,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

const techStack = {
  llms: {
    title: "Large Language Models",
    icon: Cpu,
    items: [
      "OpenAI GPT-4 / GPT-4o / o1",
      "Anthropic Claude 3.5 Sonnet / Opus",
      "Google Gemini Pro / Ultra",
      "Meta Llama 3 / 70B",
      "Mistral Large / Medium",
    ],
  },
  agents: {
    title: "Agent Frameworks",
    icon: Zap,
    items: [
      "LangChain & LangGraph",
      "AutoGen (Microsoft)",
      "CrewAI",
      "Semantic Kernel",
      "Custom ReAct Agents",
      "Tool-Using Agents",
    ],
  },
  frontend: {
    title: "Frontend Technologies",
    icon: Globe,
    items: [
      "React / Next.js 14+",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/UI",
      "Three.js / WebGL",
    ],
  },
  backend: {
    title: "Backend & Infrastructure",
    icon: Database,
    items: [
      "Node.js / Python",
      "FastAPI / Express",
      "PostgreSQL / MongoDB",
      "Redis / Vector DBs",
      "Docker / Kubernetes",
      "AWS / GCP / Azure",
    ],
  },
  apis: {
    title: "APIs & Integrations",
    icon: Layers,
    items: [
      "REST / GraphQL",
      "WebSocket / SSE",
      "MCP (Model Context Protocol)",
      "OAuth 2.0 / JWT",
      "Stripe / Payment APIs",
      "CRM Integrations",
    ],
  },
  security: {
    title: "Security & Compliance",
    icon: Shield,
    items: [
      "SOC 2 Type II",
      "GDPR Compliance",
      "End-to-End Encryption",
      "API Key Management",
      "Audit Logging",
      "Blue/Green Deployment",
    ],
  },
};

const certifications = [
  { name: "Google Cloud Certified", provider: "Google" },
  { name: "AWS Solutions Architect", provider: "Amazon" },
  { name: "Google Developer Expert", provider: "Google" },
  { name: "OpenAI Developer", provider: "OpenAI" },
  { name: "Anthropic Developer", provider: "Anthropic" },
  { name: "University of Maryland", provider: "UMD" },
  { name: "Anne Arundel - Google DeepMind", provider: "AACC" },
  { name: "Outskill Generalist Master", provider: "Outskill" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#0a0e1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold gradient-gold mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#f8f6f1]/70 max-w-2xl mx-auto"
          >
            Enterprise-grade technologies powering our AI solutions
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {Object.entries(techStack).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <category.icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f8f6f1]">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[#f8f6f1]/70 text-sm flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#12183a]/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="p-3 bg-[#d4af37]/20 rounded-lg">
              <Code2 className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-2xl font-bold gradient-gold">Certifications</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#0a0e1f] border border-[#d4af37]/20 rounded-lg p-4 text-center hover:border-[#d4af37]/40 transition-colors"
              >
                <Cloud className="w-6 h-6 text-[#d4af37] mx-auto mb-2" />
                <p className="text-[#f8f6f1] text-sm font-medium">{cert.name}</p>
                <p className="text-[#f8f6f1]/50 text-xs">{cert.provider}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
