"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function DynamicBackground() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e
        setMousePosition({ x: clientX, y: clientY })
      }
    }

    // Track scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    // Track viewport dimensions
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
      setViewportWidth(window.innerWidth)
    }

    // Initialize
    handleResize()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

 // Ensure the code only runs in a browser environment
const gradientPosition1 = {
  x: (mousePosition.x / viewportWidth) * 100,
  y: typeof document !== 'undefined' && document.body
    ? ((mousePosition.y + scrollPosition) / (viewportHeight + document.body.scrollHeight)) * 100
    : 0, // Fallback value for non-browser environments
};
  const gradientPosition2 = {
    x: 100 - (mousePosition.x / viewportWidth) * 100,
    y: 100 - ((mousePosition.y + scrollPosition) / (viewportHeight + document.body.scrollHeight)) * 100,
  }

  // Adjust colors based on theme and scroll position
  const primaryColor = theme === "dark" ? "hsla(252, 59%, 54%, 0.15)" : "hsla(252, 59%, 48%, 0.1)"
  const secondaryColor = theme === "dark" ? "hsla(186, 83%, 42%, 0.15)" : "hsla(186, 83%, 42%, 0.1)"

  // Adjust intensity based on scroll position
  const scrollPercentage = Math.min(scrollPosition / 1000, 1)
  const intensityFactor = 1 - scrollPercentage * 0.5 // Reduce intensity as user scrolls

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 will-change-auto"
        animate={{
          background: `radial-gradient(circle at ${gradientPosition1.x}% ${gradientPosition1.y}%, ${primaryColor} 0%, transparent 70%),
                    radial-gradient(circle at ${gradientPosition2.x}% ${gradientPosition2.y}%, ${secondaryColor} 0%, transparent 70%)`,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ opacity: intensityFactor }}
      />
    </div>
  )
}

