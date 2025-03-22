"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  yOffset?: number
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  className = "",
  yOffset = 10,
}: FloatingElementProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Ensure this component only renders on the client
  }, [])

  if (!isClient) return null // Avoid rendering on the server

  return (
    <motion.div
      className={`will-change-transform ${className}`}
      animate={{
        y: [0, yOffset, 0], // Example animation
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

