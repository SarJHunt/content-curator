"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AIImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")
  const [styleOptions] = useState(["Photorealistic", "Digital Art", "Watercolor", "3D Render", "Sketch"])
  const [selectedStyle, setSelectedStyle] = useState("Digital Art")

  const handleGenerate = () => {
    if (!prompt) return

    setIsGenerating(true)

    // Simulate image generation (replace with actual API call)
    setTimeout(() => {
      // In a real implementation, you would call an image generation API
      // For demo purposes, we'll use placeholder images
      const placeholderImages = [
        "/placeholder.svg?height=512&width=512",
        "/placeholder.svg?height=512&width=512",
        "/placeholder.svg?height=512&width=512",
      ]

      setGeneratedImage(placeholderImages[Math.floor(Math.random() * placeholderImages.length)])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/10">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle>AI Image Generator</CardTitle>
        </div>
        <CardDescription>Describe what you want to see, and AI will create it</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="prompt" className="text-sm font-medium">
            Your Description
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic AI assistant helping a person with a holographic interface..."
            className="w-full p-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Style</label>
          <div className="flex flex-wrap gap-2">
            {styleOptions.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedStyle === style ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Image
            </>
          )}
        </Button>

        {generatedImage && !isGenerating && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Generated Image:</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-lg overflow-hidden border"
            >
              <img
                src={generatedImage || "/placeholder.svg"}
                alt="AI Generated"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={() => handleGenerate()}
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Regenerate
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

