"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, BarChart, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AITextAnalyzer() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<null | {
    sentiment: "positive" | "neutral" | "negative"
    sentimentScore: number
    keyPhrases: string[]
    readability: "easy" | "medium" | "complex"
    wordCount: number
    tone: string
  }>(null)

  const handleAnalyze = () => {
    if (!text) return

    setIsAnalyzing(true)

    // Simulate text analysis (replace with actual API call)
    setTimeout(() => {
      // In a real implementation, you would call a text analysis API
      const sentiments = ["positive", "neutral", "negative"]
      const tones = ["Professional", "Casual", "Enthusiastic", "Formal", "Technical"]
      const readability = ["easy", "medium", "complex"]

      setAnalysis({
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)] as "positive" | "neutral" | "negative",
        sentimentScore: Math.random() * 100,
        keyPhrases: text
          .split(/[,.!?]/)
          .filter((phrase) => phrase.trim().length > 10)
          .slice(0, 3),
        readability: readability[Math.floor(Math.random() * readability.length)] as "easy" | "medium" | "complex",
        wordCount: text.split(/\s+/).filter((word) => word.length > 0).length,
        tone: tones[Math.floor(Math.random() * tones.length)],
      })

      setIsAnalyzing(false)
    }, 1500)
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-500"
      case "negative":
        return "text-red-500"
      default:
        return "text-yellow-500"
    }
  }

  const getReadabilityColor = (readability: string) => {
    switch (readability) {
      case "easy":
        return "text-green-500"
      case "complex":
        return "text-red-500"
      default:
        return "text-yellow-500"
    }
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/10">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle>AI Text Analyzer</CardTitle>
        </div>
        <CardDescription>Analyze text to understand sentiment, readability, and key phrases</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="text" className="text-sm font-medium">
            Your Text
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here to analyze sentiment, readability, and extract key information..."
            className="w-full p-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
            rows={5}
          />
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={!text || isAnalyzing}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <BarChart className="mr-2 h-4 w-4" />
              Analyze Text
            </>
          )}
        </Button>

        {analysis && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-3">
                <div className="text-sm text-muted-foreground mb-1">Sentiment</div>
                <div className={`font-medium capitalize ${getSentimentColor(analysis.sentiment)}`}>
                  {analysis.sentiment} ({Math.round(analysis.sentimentScore)}%)
                </div>
              </div>

              <div className="bg-muted rounded-lg p-3">
                <div className="text-sm text-muted-foreground mb-1">Readability</div>
                <div className={`font-medium capitalize ${getReadabilityColor(analysis.readability)}`}>
                  {analysis.readability}
                </div>
              </div>

              <div className="bg-muted rounded-lg p-3">
                <div className="text-sm text-muted-foreground mb-1">Word Count</div>
                <div className="font-medium">{analysis.wordCount} words</div>
              </div>

              <div className="bg-muted rounded-lg p-3">
                <div className="text-sm text-muted-foreground mb-1">Tone</div>
                <div className="font-medium">{analysis.tone}</div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <div className="text-sm text-muted-foreground mb-2">Key Phrases</div>
              <ul className="space-y-1">
                {analysis.keyPhrases.map((phrase, index) => (
                  <li key={index} className="text-sm bg-background/50 p-2 rounded">
                    "{phrase.trim()}"
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

