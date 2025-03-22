"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Brain, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from "@/components/theme-toggle-button"

// This would be populated from analytics in a real implementation
const popularSections = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function AdaptiveNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldHideNav, setShouldHideNav] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [navItems, setNavItems] = useState(popularSections)
  const [hasAdapted, setHasAdapted] = useState(false)

  // Handle scroll behavior
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

      // Determine active section
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Simulate AI adapting navigation based on user behavior
  useEffect(() => {
    // In a real implementation, this would analyze:
    // 1. Most visited sections
    // 2. Time spent on each section
    // 3. User's click patterns
    // 4. Previous visits

    // For demo purposes, we'll simulate this with a timeout
    const timer = setTimeout(() => {
      // Add "AI Tools" to navigation if user has scrolled past services
      if (lastScrollY > 500 && !hasAdapted) {
        setNavItems([
          { name: "Services", href: "#services" },
          { name: "About", href: "#about" },
          { name: "AI Tools", href: "/tools" },
          { name: "Contact", href: "#contact" },
        ])
        setHasAdapted(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [lastScrollY, hasAdapted])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b transition-all duration-300`}
      initial={{ y: 0 }}
      animate={{ y: shouldHideNav ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl z-50">
          <Brain className="h-6 w-6 text-primary" />
          <span className="gradient-text">AI Wizard</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <AnimatePresence mode="popLayout">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={hasAdapted ? { opacity: 0, x: 20 } : false}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && <div className="h-0.5 bg-primary mt-0.5 w-full" />}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggleButton />

          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">Let's Talk</Link>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t overflow-hidden"
          >
            <div className="container py-4 px-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg py-2 ${activeSection === item.href ? "text-primary font-medium" : "text-foreground"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

