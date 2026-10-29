"use client"

import { motion } from "framer-motion"
import { SocialIcons } from "@/components/social-icons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-5 sm:px-6 text-center text-light-slate border-t border-lightest-navy/20">
      <div className="md:hidden mb-5 sm:mb-6 flex justify-center">
        <SocialIcons />
      </div>
      <motion.div
        className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <div className="flex items-center space-x-3">
          <Link
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors duration-300 text-xs sm:text-sm"
          >
            Design inspired by Brittany Chiang
          </Link>
          <span className="text-lightest-navy">•</span>
          <ThemeToggle />
        </div> */}
        <p className="font-mono text-xs">
          Built with{" "}
          <Link
            href="https://nextjs.org"
            className="text-green hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com"
            className="text-green hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
          , and{" "}
          <Link
            href="https://www.framer.com/motion"
            className="text-green hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer Motion
          </Link>
        </p>
        <p className="text-xs text-slate/70">© 2026 B Sri Nanditha. All Rights Reserved.</p>
      </motion.div>
    </footer>
  )
}
