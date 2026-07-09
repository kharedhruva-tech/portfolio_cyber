"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Download, X, CheckCircle2 } from "lucide-react"

const certs = [
  {
    title: "AV/EDR Evasion Practical Techniques",
    issued: "May 31, 2026",
    recipient: "Dhruva Khare",
    id: "CERT-001",
    color: "from-red-600/35 to-rose-950/10",
    borderColor: "border-red-500/30 hover:border-red-500/80 shadow-[0_0_12px_rgba(255,0,60,0.03)]",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/30",
    badgeColor: "bg-red-500",
    glowColor: "rgba(255,0,60,0.2)",
    accentBar: "from-red-600 to-rose-400",
  },
  {
    title: "Foundations of Log Analysis for Cyber Defense",
    issued: "May 31, 2026",
    recipient: "Dhruva Khare",
    id: "CERT-002",
    color: "from-blue-600/35 to-indigo-950/10",
    borderColor: "border-blue-500/30 hover:border-blue-500/80 shadow-[0_0_12px_rgba(59,130,246,0.03)]",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    badgeColor: "bg-blue-500",
    glowColor: "rgba(59,130,246,0.2)",
    accentBar: "from-blue-600 to-cyan-400",
  },
  {
    title: "Fundamentals of Game Hacking Development",
    issued: "May 31, 2026",
    recipient: "Dhruva Khare",
    id: "CERT-003",
    color: "from-emerald-600/35 to-teal-950/10",
    borderColor: "border-emerald-500/30 hover:border-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.03)]",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    badgeColor: "bg-emerald-500",
    glowColor: "rgba(16,185,129,0.2)",
    accentBar: "from-emerald-600 to-teal-400",
  },
  {
    title: "DCSC Certification",
    issued: "08-05-2026",
    recipient: "Dhruva Khare",
    id: "DCSC-RARA0126",
    color: "from-purple-600/35 to-violet-950/10",
    borderColor: "border-purple-500/30 hover:border-purple-500/80 shadow-[0_0_12px_rgba(139,92,246,0.03)]",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    badgeColor: "bg-purple-500",
    glowColor: "rgba(139,92,246,0.2)",
    accentBar: "from-purple-600 to-violet-400",
  }
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null)

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
            Licenses & <span className="text-neon-red">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: `0 0 30px ${cert.glowColor}`
              }}
              onClick={() => setSelectedCert(cert)}
              className={`relative rounded-2xl border overflow-hidden cursor-pointer group transition-all duration-300 bg-[#0a0a0a] ${cert.borderColor}`}
              style={{ boxShadow: `0 0 10px ${cert.glowColor.replace('0.2', '0.05')}` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.accentBar}`} />

              {/* Background glow blob */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-all duration-300 bg-gradient-to-br ${cert.color}`} />

              {/* Background watermark */}
              <div className={`absolute top-4 right-2 opacity-5 group-hover:opacity-15 transition-all duration-300 ${cert.iconColor}`}>
                <Award className="w-28 h-28" />
              </div>

              <div className="p-6 relative z-10 flex flex-col h-full min-h-[220px]">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${cert.iconBg} ${cert.iconColor} transition-colors`}>
                  <Award className="w-6 h-6" />
                </div>

                <h3 className={`text-lg font-space-grotesk font-semibold mb-2 text-white group-hover:${cert.iconColor} transition-colors duration-300`}>{cert.title}</h3>

                {/* Badge */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                  <span className={`w-2 h-2 rounded-full ${cert.badgeColor} animate-pulse`}></span>
                  <p className="text-sm text-gray-400">Issued: {cert.issued}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-2xl rounded-2xl overflow-hidden border bg-[#0a0a0a] relative ${selectedCert.borderColor}`}
              style={{ boxShadow: `0 0 60px ${selectedCert.glowColor}` }}
            >
              {/* Modal accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${selectedCert.accentBar}`} />

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Background glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[100px] opacity-25 bg-gradient-to-br ${selectedCert.color}`} />
              
              <div className="p-8 md:p-12 text-center border-b border-white/10 relative z-10">
                <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center border ${selectedCert.iconBg}`}
                  style={{ boxShadow: `0 0 30px ${selectedCert.glowColor}` }}
                >
                  <Award className={`w-10 h-10 ${selectedCert.iconColor}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-2 text-white">
                  {selectedCert.title}
                </h3>
                <p className={`text-lg mb-6 tracking-widest uppercase font-semibold ${selectedCert.iconColor}`}>Certificate of Completion</p>
                
                <div className="text-gray-300">
                  <p className="mb-1">This certifies that</p>
                  <p className="text-xl text-white font-semibold mb-6">{selectedCert.recipient}</p>
                  <p className="text-sm">Has successfully completed the requirements.</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                <div className="text-sm text-gray-400 text-left">
                  <p>Date: {selectedCert.issued}</p>
                  <p>ID: <span className="font-mono text-white">{selectedCert.id}</span></p>
                </div>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-sm text-gray-300 hover:text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verify
                  </button>
                  <button className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r ${selectedCert.accentBar} hover:opacity-90 shadow-lg transition-all text-white text-sm font-semibold`}>
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
