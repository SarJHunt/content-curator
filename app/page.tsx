import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/common/animated-text";
import { HeroParticles } from "@/components/effects/hero-particles";
import FloatingElement from "@/components/animations/floating-element";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import dynamic from "next/dynamic";
import { SmartContentSection } from "@/components/features/smart-content-section";
import { AIChatWidget } from "@/components/ai-chat-widget";
import ServicesSection from "@/components/features/services-section";
import ContactSection from "@/components/features/contact-section";
import { ParallaxSection } from "@/components/intelligent-scroll-animations";

// Dynamically import DynamicBackground with SSR disabled
const DynamicBackgroundWrapper = dynamic(() => import("@/components/effects/DynamicBackgroundWrapper"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* AI-Enhanced Navigation */}
      <Header />

      {/* Dynamic Background */}
      <DynamicBackgroundWrapper />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <HeroParticles />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            <FloatingElement
              className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm mb-4"
              delay={0.5}
              duration={4}
              yOffset={8}
            >
              <span className="gradient-text font-medium">The future of AI. Today.</span>
            </FloatingElement>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              <AnimatedText text="Ready to harness" delay={0.1} />
              <br />
              <AnimatedText text="the power of AI?" gradient={true} delay={0.3} />
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
              Hi, I'm Chris and I help people harness the power of AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#contact">
                  Explore AI solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary hover:bg-primary/40 transition-colors"
              >
                <Link href="#services">About me</Link>
              </Button>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <section id="about" className="py-20 md:py-32">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* About Content */}
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4">
          <AnimatedText text="Hi, I'm Chris" gradient={true} />
        </h2>
        <p className="text-muted-foreground mb-6 text-lg">
          I'm an independent AI consultant who believes technology should work for people, not the other way around.
          I help individuals and businesses implement AI solutions that solve real problems.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Human-First Approach</h3>
              <p className="text-sm text-muted-foreground">
                I focus on how AI can enhance human capabilities, not replace them.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">No Unnecessary Complexity</h3>
              <p className="text-sm text-muted-foreground">
                I believe in simple, effective solutions that you can actually understand and use.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Ethical AI Advocate</h3>
              <p className="text-sm text-muted-foreground">
                I'm committed to responsible AI that respects privacy and promotes fairness.
              </p>
            </div>
          </div>
        </div>
        <Button
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          asChild
        >
          <Link href="#contact">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* About Image with Parallax */}
      <div className="order-1 lg:order-2 flex justify-center">
        <ParallaxSection>
          <div className="relative">
            <div className="blob absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl"></div>
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <img
                src="/Chris-Meah.png"
                alt="AI Consultant"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </ParallaxSection>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <ServicesSection />

      {/* Smart Content Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <SmartContentSection />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* AI Chat Widget */}
      <AIChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}