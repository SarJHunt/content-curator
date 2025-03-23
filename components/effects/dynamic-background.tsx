"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function DynamicBackground() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [isClient, setIsClient] = useState(false) // Track if the component is mounted on the client

  useEffect(() => {
    setIsClient(true) // Mark the component as mounted on the client

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e
        setMousePosition({ x: clientX, y: clientY })
      }
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

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

  const gradientPosition1 = isClient
    ? { x: (mousePosition.x / viewportWidth) * 100, y: (mousePosition.y / viewportHeight) * 100 }
    : { x: 50, y: 50 } // Default values for server rendering

  const gradientPosition2 = isClient
    ? { x: (mousePosition.x / viewportWidth) * 100, y: (mousePosition.y / viewportHeight) * 100 }
    : { x: 50, y: 50 } // Default values for server rendering

  const currentTheme = theme || "light" // Default to "light" if theme is undefined

  const primaryColor =
    currentTheme === "dark" ? "hsla(252, 59%, 54%, 0.15)" : "hsla(252, 59%, 48%, 0.2)"
  const secondaryColor =
    currentTheme === "dark" ? "hsla(186, 83%, 42%, 0.15)" : "hsla(186, 83%, 42%, 0.2)"

  const scrollPercentage = Math.min(scrollPosition / 1000, 1)
  const intensityFactor = 1 - scrollPercentage * 0.5

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 will-change-auto"
        animate={{
          background: `radial-gradient(circle at ${gradientPosition1.x}% ${gradientPosition1.y}%, ${primaryColor} 0%, transparent 60%),
                    radial-gradient(circle at ${gradientPosition2.x}% ${gradientPosition2.y}%, ${secondaryColor} 0%, transparent 60%)`,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ opacity: intensityFactor }}
      />
    </div>
  )
}