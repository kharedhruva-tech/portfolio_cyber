import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-neon-red" />
          <span className="font-space-grotesk font-bold tracking-wider uppercase text-glow">
            Dhruva<span className="text-neon-red">.</span>
          </span>
        </div>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Dhruva Khare. All Rights Reserved.
        </p>
        
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-neon-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-red transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
