"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = 700
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle properties
    const particleCount = 120
    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulseSpeed: number
      pulseDirection: number
      maxSize: number
      minSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.minSize = Math.random() * 2 + 1
        this.maxSize = this.minSize + Math.random() * 2
        this.size = this.minSize
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.pulseSpeed = Math.random() * 0.1
        this.pulseDirection = 1

        // Create a mix of primary and secondary colors
        const colorType = Math.random()
        if (isDark) {
          if (colorType < 0.5) {
            this.color = `hsla(252, 59%, 54%, ${Math.random() * 0.3 + 0.1})` // Primary
          } else {
            this.color = `hsla(186, 83%, 42%, ${Math.random() * 0.3 + 0.1})` // Secondary
          }
        } else {
          if (colorType < 0.5) {
            this.color = `hsla(252, 59%, 48%, ${Math.random() * 0.2 + 0.1})` // Primary
          } else {
            this.color = `hsla(186, 83%, 42%, ${Math.random() * 0.2 + 0.1})` // Secondary
          }
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulse size
        this.size += this.pulseSpeed * this.pulseDirection
        if (this.size > this.maxSize || this.size < this.minSize) {
          this.pulseDirection *= -1
        }

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 180

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Gradient lines
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)

            if (isDark) {
              gradient.addColorStop(0, `hsla(252, 59%, 54%, ${opacity * 0.15})`)
              gradient.addColorStop(1, `hsla(186, 83%, 42%, ${opacity * 0.15})`)
            } else {
              gradient.addColorStop(0, `hsla(252, 59%, 48%, ${opacity * 0.15})`)
              gradient.addColorStop(1, `hsla(186, 83%, 42%, ${opacity * 0.15})`)
            }

            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}

