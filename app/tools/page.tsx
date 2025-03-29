import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AIImageGenerator } from "@/components/ai-image-generator"
import { AITextAnalyzer } from "@/components/ai-text-analyzer"
import AnimatedText from "@/components/common/animated-text"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-secondary font-medium mb-2">AI TOOLS</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            <AnimatedText text="Build something powerful" gradient={true} />
          </h1>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            Experience the power of AI with these interactive tools. These are just a sample of what we can build
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AIImageGenerator />
          <AITextAnalyzer />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/20 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">Want a custom AI tool?</h2>
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Link href="ContactSection">
              Let's build something together <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

