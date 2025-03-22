"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/common/animated-text"

// This would be populated from your CMS or content database
const contentPieces = [
  {
    id: 1,
    title: "Automating Content Creation",
    description: "How AI can help you create consistent, high-quality content without sacrificing your unique voice.",
    category: "content",
    readTime: 4,
  },
  {
    id: 2,
    title: "Building Smart Customer Service",
    description: "Using AI to enhance customer support while maintaining the human touch your clients expect.",
    category: "customer-service",
    readTime: 5,
  },
  {
    id: 3,
    title: "Data Analysis for Non-Technical Teams",
    description:
      "Simplifying complex data with AI to help your team make better decisions without needing a data science degree.",
    category: "data",
    readTime: 3,
  },
  {
    id: 4,
    title: "Streamlining Your Creative Process",
    description: "How creative professionals are using AI to handle repetitive tasks and focus on what they do best.",
    category: "creativity",
    readTime: 6,
  },
  {
    id: 5,
    title: "AI for Small Business Operations",
    description:
      "Practical ways small businesses can implement AI without enterprise-level budgets or technical teams.",
    category: "small-business",
    readTime: 4,
  },
]

export function SmartContentSection() {
  const [selectedContent, setSelectedContent] = useState<typeof contentPieces>([])
  const [userInterests, setUserInterests] = useState<string[]>([])
  const [hasInteracted, setHasInteracted] = useState(false)

  // Simulate AI analyzing user behavior
  useEffect(() => {
    // In a real implementation, this would be based on:
    // 1. User's scroll behavior and time spent on different sections
    // 2. Previous interactions with the site
    // 3. Referral source
    // 4. Geographic data

    // For demo purposes, we'll start with random interests
    const initialInterests = ["content", "creativity"]
    setUserInterests(initialInterests)

    // Select initial content based on these interests
    const initialRecommendations = contentPieces
      .filter((piece) => initialInterests.includes(piece.category))
      .slice(0, 2)

    setSelectedContent(initialRecommendations)
  }, [])

  // Simulate AI learning from user interactions
  const handleContentInteraction = (category: string) => {
    setHasInteracted(true)

    // Update user interests based on what they clicked
    setUserInterests((prev) => {
      if (prev.includes(category)) {
        return prev
      }
      return [...prev, category]
    })

    // Update content recommendations
    // In a real implementation, this would use a more sophisticated algorithm
    setTimeout(() => {
      const newRecommendations = contentPieces
        .filter((piece) => piece.category === category || userInterests.includes(piece.category))
        .sort(() => 0.5 - Math.random()) // Simple shuffle
        .slice(0, 3)

      setSelectedContent(newRecommendations)
    }, 300)
  }

  return (
    <div className="py-12">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-2 rounded-full mr-3">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold">
          <AnimatedText text="Insights For You" gradient={true} />
        </h3>
      </div>

      {hasInteracted && (
        <div className="text-center mb-6 text-sm text-muted-foreground">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Content updated based on your interests
          </motion.div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {selectedContent.map((content) => (
            <motion.div
              key={content.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-all border border-primary/10"
                onClick={() => handleContentInteraction(content.category)}
              >
                <CardContent className="p-6">
                  <div className="text-xs text-secondary font-medium mb-2">{content.readTime} MIN READ</div>
                  <h4 className="text-lg font-medium mb-2">{content.title}</h4>
                  <p className="text-muted-foreground text-sm">{content.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

