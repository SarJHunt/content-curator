"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: scrolled ? 0 : 1,
        y: scrolled ? 20 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 text-primary" />
      </motion.div>
    </motion.div>
  )
}

