"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

interface IntelligentScrollAnimationsProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
}

export function IntelligentScrollAnimations({
  children,
  threshold = 0.2,
  delay = 0,
}: IntelligentScrollAnimationsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const [hasViewed, setHasViewed] = useState(false)

  // Track user scroll behavior
  const [scrollSpeed, setScrollSpeed] = useState<"slow" | "medium" | "fast">("medium")
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    if (isInView && !hasViewed) {
      setHasViewed(true)
    }

    // Track scroll speed to adjust animations
    const handleScroll = () => {
      const now = Date.now()
      const timeDiff = now - lastScrollTime.current

      if (timeDiff > 50) {
        // Only measure every 50ms to avoid too many calculations
        const scrollDiff = Math.abs(window.scrollY - lastScrollY.current)
        const scrollRate = scrollDiff / timeDiff

        // Classify scroll speed
        if (scrollRate > 1) {
          setScrollSpeed("fast")
        } else if (scrollRate > 0.3) {
          setScrollSpeed("medium")
        } else {
          setScrollSpeed("slow")
        }

        lastScrollY.current = window.scrollY
        lastScrollTime.current = now
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isInView, hasViewed])

  // Adjust animation duration based on scroll speed
  const getDuration = () => {
    switch (scrollSpeed) {
      case "fast":
        return 0.3
      case "slow":
        return 0.8
      default:
        return 0.5
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: getDuration(),
        delay,
        ease: "easeOut",
      }}
      className="overflow-hidden" // Add this line to contain animations
    >
      {children}
    </motion.div>
  )
}

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values based on scroll position
  const y = useTransform(smoothProgress, [0, 1], [100, -100])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} className="relative overflow-hidden" style={{ opacity }}>
      <motion.div
        style={{ y }}
        className="will-change-transform" // Add this line for better performance
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

