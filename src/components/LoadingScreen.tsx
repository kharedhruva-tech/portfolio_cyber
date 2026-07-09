"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BOOT_LINES = [
  "> Initializing secure connection...",
  "> Loading cryptographic modules... [OK]",
  "> Scanning network interfaces...",
  "> Bypassing firewall protocols... [OK]",
  "> Establishing encrypted tunnel...",
  "> Loading OSINT modules... [OK]",
  "> Running vulnerability assessments...",
  "> Injecting payload... [OK]",
  "> Access GRANTED.",
  "> Welcome, Dhruva Khare.",
]

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]#@$%^&*"

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
        // Neon red for leading chars, dark red for trail
        const progress = drops[i] / (canvas.height / fontSize)
        ctx.fillStyle = progress < 0.05
          ? "#ffffff"
          : progress < 0.2
          ? "#ff003c"
          : `rgba(180, 0, 30, ${0.6 - progress * 0.4})`
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 30)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  )
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [show, setShow] = useState(true)

  // Type out lines one character at a time
  useEffect(() => {
    if (currentLine >= BOOT_LINES.length) {
      setTimeout(() => {
        setDone(true)
        setTimeout(() => {
          setShow(false)
          onComplete()
        }, 300)
      }, 150)
      return
    }

    const line = BOOT_LINES[currentLine]
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] ?? "") + line[currentChar]
          return next
        })
        setCurrentChar(c => c + 1)
        setProgress(Math.round(((currentLine * line.length + currentChar) / (BOOT_LINES.length * line.length)) * 100))
      }, 8)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 40)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <MatrixRain />

          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />

          {/* Center terminal */}
          <div className="relative z-20 w-full max-w-2xl mx-4">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border border-neon-red/30 rounded-t-lg">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-500 font-mono tracking-widest">
                Dhruva@kali:~$ — bash
              </span>
            </div>

            {/* Terminal body */}
            <div className="bg-black/90 border border-t-0 border-neon-red/30 rounded-b-lg p-6 min-h-[260px] font-mono text-sm">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-1 ${
                    line.includes("[OK]")
                      ? "text-green-400"
                      : line.includes("GRANTED") || line.includes("Welcome")
                      ? "text-neon-red font-bold"
                      : "text-gray-300"
                  }`}
                >
                  {line}
                  {/* Blinking cursor on the last active line */}
                  {i === currentLine && !done && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className="inline-block ml-0.5 w-2 h-4 bg-neon-red align-middle"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-mono text-gray-500 mb-1">
                <span>LOADING SYSTEMS</span>
                <span className="text-neon-red">{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-red/80 via-neon-red to-red-400 rounded-full"
                  style={{ boxShadow: "0 0 10px rgba(255,0,60,0.8)" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* Glitch logo */}
            <motion.div
              className="mt-6 text-center font-mono font-bold tracking-[0.3em] text-neon-red text-xs uppercase"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ▓▓▓ DHRUVA KHARE ▓▓▓
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
