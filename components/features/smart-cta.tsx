"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type CTAVariant = {
  heading: string
  subheading: string
  buttonText: string
  buttonLink: string
}

const ctaVariants: Record<string, CTAVariant> = {
  default: {
    heading: "Ready to make AI work for you?",
    subheading: "Let's discuss how AI can help your specific situation.",
    buttonText: "Get Started",
    buttonLink: "#contact",
  },
  creative: {
    heading: "Transform your creative process",
    subheading: "See how AI can enhance your creativity, not replace it.",
    buttonText: "Boost Your Creativity",
    buttonLink: "#contact",
  },
  business: {
    heading: "Streamline your business operations",
    subheading: "Discover practical AI solutions that save time and reduce costs.",
    buttonText: "Improve Efficiency",
    buttonLink: "#contact",
  },
  technical: {
    heading: "Build smarter systems",
    subheading: "Integrate AI into your existing tech stack with expert guidance.",
    buttonText: "Explore Solutions",
    buttonLink: "#contact",
  },
  returning: {
    heading: "Welcome back!",
    subheading: "Ready to continue our conversation about AI solutions?",
    buttonText: "Pick Up Where We Left Off",
    buttonLink: "#contact",
  },
}

export function SmartCTA() {
  const [variant, setVariant] = useState<CTAVariant>(ctaVariants.default)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // In a real implementation, this would analyze:
    // 1. User's scroll behavior and sections they spent time on
    // 2. Previous visits to the site (stored in cookies/localStorage)
    // 3. Referral source
    // 4. Time spent on specific content categories

    // For demo purposes, we'll simulate this with a timeout
    // and randomly select a variant (except for returning)
    const timer = setTimeout(() => {
      const isReturningUser = localStorage.getItem("previousVisit") === "true"

      if (isReturningUser) {
        setVariant(ctaVariants.returning)
      } else {
        // Analyze which sections the user spent most time on
        // This would be tracked with actual analytics in production
        const variants = ["creative", "business", "technical"]
        const selectedVariant = variants[Math.floor(Math.random() * variants.length)]
        setVariant(ctaVariants[selectedVariant])
      }

      // Mark this visit for future reference
      localStorage.setItem("previousVisit", "true")

      setHasAnimated(true)
    }, 5000) // After 5 seconds of page interaction

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 text-center"
      animate={
        hasAnimated
          ? {
              y: [10, 0],
              opacity: [0.8, 1],
            }
          : {}
      }
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-3"
        key={variant.heading} // Force re-animation when content changes
        initial={hasAnimated ? { opacity: 0, y: 10 } : false}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {variant.heading}
      </motion.h2>

      <motion.p
        className="text-muted-foreground mb-6 max-w-2xl mx-auto"
        key={variant.subheading}
        initial={hasAnimated ? { opacity: 0 } : false}
        animate={hasAnimated ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {variant.subheading}
      </motion.p>

      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
        <Link href={variant.buttonLink}>
          {variant.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  )
}

