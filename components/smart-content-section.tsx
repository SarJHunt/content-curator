"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/animated-text"

// This would be populated from your CMS or content database
const contentPieces = [
  {
    id: 1,
    title: "Automating Content Creation",
    description: "How AI can help you create consistent, high-quality content without sacrificing your unique voice.",
    category: "content",
    readTime: 4,
    image: "/nadeem.jpg", // Add image URLs here
  },
  {
    id: 2,
    title: "Building Smart Customer Service",
    description: "Using AI to enhance customer support while maintaining the human touch your clients expect.",
    category: "customer-service",
    readTime: 5,
    image: "/images/customer-service.jpg",
  },
  {
    id: 3,
    title: "Data Analysis for Non-Technical Teams",
    description:
      "Simplifying complex data with AI to help your team make better decisions without needing a data science degree.",
    category: "data",
    readTime: 3,
    image: "/images/data-analysis.jpg",
  },
];

export function SmartContentSection() {
  const [selectedContent, setSelectedContent] = useState<typeof contentPieces>([]);
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Simulate AI analyzing user behavior
  useEffect(() => {
    const initialInterests = ["content", "creativity"];
    setUserInterests(initialInterests);

    const initialRecommendations = contentPieces
      .filter((piece) => initialInterests.includes(piece.category))
      .slice(0, 2);

    setSelectedContent(initialRecommendations);
  }, []);

  const handleContentInteraction = (category: string) => {
    setHasInteracted(true);

    setUserInterests((prev) => {
      if (prev.includes(category)) {
        return prev;
      }
      return [...prev, category];
    });

    setTimeout(() => {
      const newRecommendations = contentPieces
        .filter((piece) => piece.category === category || userInterests.includes(piece.category))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      setSelectedContent(newRecommendations);
    }, 300);
  };

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-2 rounded-full mr-3">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold">
          <AnimatedText text="Insights" gradient={true} />
        </h3>
      </div>

      {/* Interaction Message */}
      {hasInteracted && (
        <div className="text-center mb-6 text-sm text-muted-foreground">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Content updated based on your interests
          </motion.div>
        </div>
      )}

      {/* Content Grid */}
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
                className="h-96 cursor-pointer hover:shadow-lg transition-all border border-primary/10 overflow-hidden"
                onClick={() => handleContentInteraction(content.category)}
              >
                {/* Image Section */}
                <div
                  className="h-2/3 bg-cover bg-center"
                  style={{ backgroundImage: `url('${content.image}')` }}
                >
                  {/* Dynamic image */}
                </div>

                {/* Title Section */}
                <CardContent className="h-1/3 flex items-center justify-center p-4 bg-background">
                  <h4 className="text-lg font-medium text-center">{content.title}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}