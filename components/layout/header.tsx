"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Wand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from "@/components/common/theme-toggle-button"

export function Header() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldHideNav, setShouldHideNav] = useState(false)

  // Handle scroll behaviour
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShouldHideNav(true)
      } else {
        setShouldHideNav(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b transition-all duration-300`}
      initial={{ y: 0 }}
      animate={{ y: shouldHideNav ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl z-50">
          <Wand className="h-10 w-10 text-secondary" />
          <span className="text-primary">CurioHub</span>
        </Link>

        {/* Right-side buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <Button asChild className="btn-tertiary text-white rounded">
  <Link href="#contact">About CurioHub</Link>
</Button>
        </div>
      </div>
    </motion.header>
  )
}