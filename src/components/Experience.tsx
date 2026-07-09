"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ShieldAlert } from "lucide-react"

const timeline = [
  {
    title: "Security Research & Bug Bounty",
    company: "Freelance",
    date: "2023 - Present",
    description: "Hunting for vulnerabilities on platforms like HackerOne and Bugcrowd. Conducted independent research on modern WAF evasion techniques.",
    icon: <ShieldAlert className="w-5 h-5" />
  },
  {
    title: "Penetration Tester",
    company: "Cyber Security Firm",
    date: "2022 - 2024",
    description: "Performed comprehensive vulnerability assessments and penetration tests on web applications, internal networks, and cloud infrastructure.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Network forensics",
    company: "Tech Solutions Inc",
    date: "2021 - 2022",
    description: "Gained hands-on experience in Network Forensics by capturing, analyzing, and investigating network traffic to identify suspicious activities and potential security threats. Utilized tools such as Wireshark, TCPdump, and NetworkMiner to inspect packets, analyze network protocols, and trace communication patterns..",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Cybersecurity Learning Path",
    company: "Self-Taught & Certifications",
    date: "2020 - 2021",
    description: "Mastered the fundamentals of networking, operating systems, and offensive security techniques through hands-on labs and rigorous study.",
    icon: <GraduationCap className="w-5 h-5" />
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            Professional <span className="text-neon-red">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full box-shadow-[0_0_10px_rgba(255,0,60,0.5)]"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-[118px] top-0 bottom-0 w-px bg-white/10 group-hover:bg-neon-red/30 transition-colors"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-[9px] sm:left-[103px] top-8 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-neon-red flex items-center justify-center z-10 box-shadow-[0_0_10px_rgba(255,0,60,0.5)] group-hover:scale-110 transition-transform">
                <div className="text-neon-red">
                  {item.icon}
                </div>
              </div>

              {/* Date (Desktop) */}
              <div className="hidden sm:block absolute left-0 top-9 w-[80px] text-right text-sm font-space-grotesk text-neon-red font-semibold">
                {item.date}
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors ml-4 sm:ml-0">
                {/* Date (Mobile) */}
                <div className="sm:hidden text-sm font-space-grotesk text-neon-red font-semibold mb-2">
                  {item.date}
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-gray-400 text-sm font-medium mb-4">
                  {item.company}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
