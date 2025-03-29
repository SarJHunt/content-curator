"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/common/animated-text"

// This would be populated from content database
const contentPieces = [
  {
    id: 1,
    title: "Thoughts on the future",
    description: "Chris Meah's thoughts in March 2025 on the future of AI.",
    category: "content",
    readTime: 4,
    image: "/boy future.png", 
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

  // Simulate AI analysing user behaviour
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
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-2 rounded-full mr-3">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold">
          <AnimatedText text="Insights" gradient={true} />
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
                className="h-80 cursor-pointer hover:shadow-md transition-all border border-primary/10 overflow-hidden"
                onClick={() => handleContentInteraction(content.category)}
              >
                {/* Image Section */}
                <div className="h-2/3 bg-cover bg-center" style={{ backgroundImage: `url('/nadeem.jpg')` }}>
                  {/* Replace '/placeholder.jpg' with dynamic image URLs if available */}
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