"use client"

import { motion } from "framer-motion"
import { Bug, Target, Award, ShieldCheck } from "lucide-react"

const stats = [
  { label: "Vulnerabilities Found", value: "150+", icon: <Bug className="w-8 h-8 text-neon-red" /> },
  { label: "Labs Completed", value: "300+", icon: <Target className="w-8 h-8 text-blue-500" /> },
  { label: "Certifications", value: "10+", icon: <Award className="w-8 h-8 text-yellow-500" /> },
  { label: "Security Reports", value: "85+", icon: <ShieldCheck className="w-8 h-8 text-green-500" /> },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            Impact & <span className="text-neon-red">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full box-shadow-[0_0_10px_rgba(255,0,60,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-neon-red/30 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-space-grotesk font-semibold mb-6 border-b border-white/10 pb-4">Security Research</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>Responsible Disclosure Reports to Fortune 500 companies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>Discovered Critical IDOR and RCE vulnerabilities in leading SaaS platforms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>Published write-ups on bypass techniques for modern WAFs.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-space-grotesk font-semibold mb-6 border-b border-white/10 pb-4">CTF & Competitions</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>Top 100 globally on TryHackMe / HackTheBox.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>1st Place at National Cyber Defense Competition.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-red font-bold mt-1">▹</span>
                <span>Consistent participant in DEF CON Quals and Google CTF.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
