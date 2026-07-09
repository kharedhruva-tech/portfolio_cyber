"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ParticleBackground from "@/components/ParticleBackground"
import LoadingScreen from "@/components/LoadingScreen"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen relative flex flex-col selection:bg-neon-red/30"
          >
            <ParticleBackground />
            <Navbar />

            <div className="flex-1 flex flex-col overflow-hidden">
              <Hero />
              <About />
              <Skills />
              <Certifications />
              <Projects />
              <Achievements />
              <Experience />
              <Contact />
            </div>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
