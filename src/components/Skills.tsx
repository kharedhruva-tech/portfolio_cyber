"use client"

import { motion } from "framer-motion"
import { Shield, Wrench, Code2, Globe } from "lucide-react"

const categories = [
  {
    title: "Offensive Security",
    icon: <Shield className="w-5 h-5" />,
    color: "from-red-600/20 to-rose-900/10",
    borderColor: "border-red-500/30 hover:border-red-500/70",
    badgeColor: "bg-red-500/10 border-red-500/30 hover:bg-red-500/20 hover:border-red-500 text-red-300",
    titleColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/30",
    skills: [
      "Web Application Pentesting", "Bug Bounty Hunting", "API Security Testing",
      "Authentication Testing", "OWASP Top 10", "XSS",
      "SQL Injection", "SSRF", "CSRF"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-blue-600/20 to-indigo-900/10",
    borderColor: "border-blue-500/30 hover:border-blue-500/70",
    badgeColor: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500 text-blue-300",
    titleColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    skills: [
      "Burp Suite", "Nmap", "RustScan", "Metasploit",
      "SQLMap", "Wireshark", "Linux", "Kali Linux",
      "Parrot OS", "BlackArch Linux", "Tails OS", "Kali Purple"
    ]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-purple-600/20 to-violet-900/10",
    borderColor: "border-purple-500/30 hover:border-purple-500/70",
    badgeColor: "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500 text-purple-300",
    titleColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    skills: [
      "Python", "JavaScript", "TypeScript", "Bash",
      "HTML", "CSS", "Java", "C", "C++", "C#", "Ruby", "SQL"
    ]
  },
  {
    title: "Development & Tech",
    icon: <Globe className="w-5 h-5" />,
    color: "from-emerald-600/20 to-teal-900/10",
    borderColor: "border-emerald-500/30 hover:border-emerald-500/70",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500 text-emerald-300",
    titleColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    skills: [
      "Web Developer", "App Developer", "Malware Developer",
      "Game Developer", "Software Developer", "AI / ML",
      "React", "Next.js", "Tailwind CSS", "Node.js",
      "FastAPI", "PostgreSQL", "Docker", "AWS"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            Technical <span className="text-neon-red">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 bg-gradient-to-br ${category.color} ${category.borderColor}`}
              style={{ background: `linear-gradient(135deg, rgba(10,10,10,0.9), rgba(10,10,10,0.95))` }}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color.replace('/20', '').replace('/10', '')}`} />

              {/* Background glow blob */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${category.color}`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl border ${category.iconBg} ${category.titleColor}`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-space-grotesk font-bold ${category.titleColor}`}>
                  {category.title}
                </h3>
                <span className="ml-auto text-xs font-mono text-gray-600">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-5" />

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + sIdx * 0.03 }}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-all duration-200 ${category.badgeColor}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
