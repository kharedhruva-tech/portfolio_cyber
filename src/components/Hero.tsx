"use client"

import { motion, Variants } from "framer-motion"
import { Shield, ChevronRight, Download, Code, Briefcase, MessageSquare, Mail } from "lucide-react"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow text-neon-red text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Securing Digital Assets. Building Trust.</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Hi, I&apos;m{" "}
            <span className="inline-block">
              {"Dhruva Khare".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-pink-500 to-blue-500 cursor-default"
                  initial={{ opacity: 0, y: 30, rotateX: 90 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12], // Continuous vertical wave bobbing
                    rotateX: 0,
                    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"], // Continuous color gradient cycling
                    textShadow: [
                      "0 0 4px rgba(255,0,60,0.3)",
                      "0 0 20px rgba(255,0,60,0.8)",
                      "0 0 4px rgba(255,0,60,0.3)",
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.0 + i * 0.06 },
                    y: {
                      duration: 1.8,
                      delay: 1.5 + i * 0.08,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    },
                    rotateX: { duration: 0.5, delay: 1.0 + i * 0.06 },
                    filter: {
                      duration: 6,
                      delay: 1.5 + i * 0.1,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    textShadow: { duration: 2.5, delay: 1.8 + i * 0.15, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3, delay: 1.8 + i * 0.15, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.3, textShadow: "0 0 30px rgba(255,0,60,1)" }}
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cybersecurity Researcher | Bug Bounty Hunter | Pentester <br />
            Ethical Hacker | Cybersecurity Analyst | Network Forensics
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 rounded-md bg-neon-red text-white font-medium hover:bg-neon-red/80 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,60,0.5)]">
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#certifications" className="px-8 py-3 rounded-md glass text-white font-medium hover:bg-white/5 transition-colors border border-neon-red/30 hover:border-neon-red/60 flex items-center gap-2">
              View Certifications
            </a>
            <a href="#contact" className="px-8 py-3 rounded-md glass text-white font-medium hover:bg-white/5 transition-colors border border-white/10 hover:border-white/30 flex items-center gap-2">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <SocialLink href="https://linkedin.com/in/dhruva-khare-6ba6b7391" icon={<Briefcase className="w-6 h-6" />} label="LinkedIn" />
            <SocialLink href="https://github.com/kharedhruva-tech" icon={<Code className="w-6 h-6" />} label="GitHub" />
            <SocialLink href="#" icon={<MessageSquare className="w-6 h-6" />} label="Twitter" />
            <SocialLink href="#" icon={<Shield className="w-6 h-6" />} label="HackerOne" />
            <SocialLink href="#" icon={<Shield className="w-6 h-6" />} label="Bugcrowd" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full glass text-gray-400 hover:text-neon-red hover:border-neon-red/50 hover:shadow-[0_0_15px_rgba(255,0,60,0.3)] transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
