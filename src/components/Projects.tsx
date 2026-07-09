"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code, Terminal, Shield, Search, BarChart2, FileSearch } from "lucide-react"

const projects = [
  {
    title: "Vulnerability Scanner",
    description: "An automated security scanner that detects common web vulnerabilities including XSS, SQLi, and misconfigurations. Built with advanced threading for rapid execution.",
    tech: ["Python", "Go", "Bash"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <Search className="w-10 h-10" />,
    color: "from-red-600/20 to-rose-900/5",
    borderColor: "border-red-500/20 hover:border-red-500/60",
    badgeColor: "bg-red-500/10 text-red-300 border-red-500/30",
    titleColor: "text-red-400",
    iconColor: "text-red-400 group-hover:text-red-300",
    glowColor: "rgba(239,68,68,0.15)",
    accentBar: "from-red-600 to-rose-400",
  },
  {
    title: "Recon Automation Tool",
    description: "A comprehensive reconnaissance framework that automates subdomain enumeration, port scanning, and directory brute-forcing, consolidating results into a unified dashboard.",
    tech: ["Bash", "Python", "React"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <Terminal className="w-10 h-10" />,
    color: "from-blue-600/20 to-indigo-900/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/60",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    titleColor: "text-blue-400",
    iconColor: "text-blue-400 group-hover:text-blue-300",
    glowColor: "rgba(59,130,246,0.15)",
    accentBar: "from-blue-600 to-cyan-400",
  },
  {
    title: "Bug Bounty Toolkit",
    description: "A collection of custom scripts and payloads designed to aid in the discovery of high-impact vulnerabilities during bug bounty hunting on HackerOne & Bugcrowd.",
    tech: ["JavaScript", "Python", "Bash"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <Shield className="w-10 h-10" />,
    color: "from-purple-600/20 to-violet-900/5",
    borderColor: "border-purple-500/20 hover:border-purple-500/60",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    titleColor: "text-purple-400",
    iconColor: "text-purple-400 group-hover:text-purple-300",
    glowColor: "rgba(139,92,246,0.15)",
    accentBar: "from-purple-600 to-violet-400",
  },
  {
    title: "Security Dashboard",
    description: "A centralized real-time monitoring solution ingesting logs from various sources, applying ML algorithms to detect anomalous behaviour and trigger alerts.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <BarChart2 className="w-10 h-10" />,
    color: "from-emerald-600/20 to-teal-900/5",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/60",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    titleColor: "text-emerald-400",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
    glowColor: "rgba(16,185,129,0.15)",
    accentBar: "from-emerald-600 to-teal-400",
  },
  {
    title: "Log Analysis Platform",
    description: "Enterprise-grade log ingestion and correlation engine. Provides pattern matching, threat intelligence feeds, and forensic timeline reconstruction.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <FileSearch className="w-10 h-10" />,
    color: "from-orange-600/20 to-amber-900/5",
    borderColor: "border-orange-500/20 hover:border-orange-500/60",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    titleColor: "text-orange-400",
    iconColor: "text-orange-400 group-hover:text-orange-300",
    glowColor: "rgba(249,115,22,0.15)",
    accentBar: "from-orange-600 to-amber-400",
  },
  {
    title: "Network Packet Analyzer",
    description: "Deep-packet inspection tool that decodes raw network traffic, identifies suspicious payloads, and generates forensic reports with visual flow graphs.",
    tech: ["Python", "Wireshark API", "C"],
    github: "https://github.com/kharedhruva-tech",
    live: "#",
    icon: <Code className="w-10 h-10" />,
    color: "from-cyan-600/20 to-sky-900/5",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/60",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    titleColor: "text-cyan-400",
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    glowColor: "rgba(6,182,212,0.15)",
    accentBar: "from-cyan-600 to-sky-400",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            Featured <span className="text-neon-red">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className={`group relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 bg-[#0a0a0a] ${project.borderColor}`}
              style={{ boxShadow: `0 0 0 0 ${project.glowColor}`, transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${project.glowColor}`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${project.glowColor}`
              }}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${project.accentBar}`} />

              {/* Card visual header */}
              <div className={`relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* Corner glow */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl bg-gradient-to-br ${project.color} opacity-60`} />
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`z-10 transition-colors duration-300 ${project.iconColor}`}
                >
                  {project.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-space-grotesk font-bold mb-3 transition-colors duration-300 ${project.titleColor}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${project.badgeColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Code className="w-4 h-4" /> Source Code
                  </a>
                  <a
                    href={project.live}
                    className={`ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${project.titleColor}`}
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
