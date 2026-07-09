"use client"

import { motion } from "framer-motion"
import { Code, ShieldAlert, Cpu } from "lucide-react"

const aboutCards = [
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Cybersecurity Engineering",
    description: "Proficient in vulnerability assessment, penetration testing methodologies, IAM, and implementing zero-trust architectures to protect sensitive data assets.",
    color: "from-red-600/30 to-rose-950/10",
    borderColor: "border-red-500/30 hover:border-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.05)]",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/30",
    glowColor: "rgba(239,68,68,0.18)",
    accentBar: "from-red-600 to-rose-400",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack Development",
    description: "Expert in designing and deploying end-to-end solutions using modern frameworks. Skilled in architecting secure RESTful APIs and optimizing front-end performance.",
    color: "from-blue-600/30 to-indigo-950/10",
    borderColor: "border-blue-500/30 hover:border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.05)]",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    glowColor: "rgba(59,130,246,0.18)",
    accentBar: "from-blue-600 to-cyan-400",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Secure Development Lifecycle (SDLC)",
    description: "Dedicated to integrating security best practices into the CI/CD pipeline, ensuring that security is a continuous process rather than an afterthought.",
    color: "from-purple-600/30 to-violet-950/10",
    borderColor: "border-purple-500/30 hover:border-purple-500/80 shadow-[0_0_15px_rgba(139,92,246,0.05)]",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    glowColor: "rgba(139,92,246,0.18)",
    accentBar: "from-purple-600 to-violet-400",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            About <span className="text-neon-red">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed glass-card p-8 rounded-2xl relative overflow-hidden border border-neon-red/10"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-red via-purple-500 to-blue-500" />
            
            {/* Subtle background color blobs */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-neon-red/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <p className="relative z-10">
              To architect and engineer <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">resilient, high-performance digital ecosystems</span> that marry seamless user experiences with <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-300">uncompromising security</span>. My goal is to leverage a dual-disciplinary approach to build software that is inherently <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300">secure-by-design</span>, effectively identifying and neutralizing vulnerabilities before they reach production.
            </p>
            <p className="relative z-10">
              I am dedicated to advancing the state of secure software development by bridging the gap between rapid feature development and rigorous security protocols, and engineering resilience through <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-300">proactive strategies</span>.
            </p>

            {/* Colorful Specialty Chips */}
            <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)] hover:bg-red-500/20 hover:scale-105 transition-all cursor-default">
                🛡️ Bug Bounty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 hover:scale-105 transition-all cursor-default">
                💻 Cybersecurity Analyst
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:bg-purple-500/20 hover:scale-105 transition-all cursor-default">
                ☣️ Network forensics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-default">
                🚀 DevSecOps
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {aboutCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-xl border overflow-hidden p-6 transition-all duration-300 bg-[#0a0a0a] group ${card.borderColor}`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${card.glowColor}`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none"
                }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.accentBar}`} />

                {/* Background glow */}
                <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-all duration-300 bg-gradient-to-br ${card.color}`} />

                <div className="flex gap-4 items-start relative z-10">
                  <div className={`p-3 rounded-xl border ${card.iconBg} ${card.iconColor} transition-colors`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 font-space-grotesk ${card.iconColor}`}>{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
