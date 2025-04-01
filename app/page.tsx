"use client"
import { useState } from "react"
import { ArrowRight, BookOpenCheck } from "lucide-react";
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
import TestimonialWall from "@/components/features/testimonial-wall";
import EmblaCarousel from "@/components/features/carousel";
import AboutSchoolOfCode from "@/components/features/school-of-code"; 
import { ParallaxSection } from "@/components/intelligent-scroll-animations";

// Dynamically import DynamicBackground with SSR disabled
const DynamicBackgroundWrapper = dynamic(() => import("@/components/effects/DynamicBackgroundWrapper"));

export default function Home() {
  const [showSchoolOfCode, setShowSchoolOfCode] = useState(false);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* AI-enhanced navigation */}
      <Header />

      {/* Dynamic background */}
      <DynamicBackgroundWrapper />

      {/* Hero section */}
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
              <span className="gradient-text font-medium">Consultancy | Training | Public speaking</span>
            </FloatingElement>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              <AnimatedText text="Unlocking the" delay={0.1} />
              <br />
              <AnimatedText text="potential of AI" gradient={true} delay={0.3} />
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
              Hi, I'm Chris. I build, train and speak about AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#services">
                  Explore AI solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary hover:bg-primary/40 transition-colors"
              >
                <Link href="#about">About me</Link>
              </Button>
            </div>
          </div>
        </div>
        </section>
        <ScrollIndicator />
        <section id="about" className="py-20 md:py-32 relative">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Toggle between about me and about the School of Code */}
      {!showSchoolOfCode ? (
        // About me Section
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4">
            About me
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            I build, research and help people learn AI, using my 10 years' experience as an educator.
          My aim is to push technology forwards to benefit everyone. </p>
          <p className="text-muted-foreground mb-6 text-lg">I founded the School of Code in 2014 to help people gain the confidence, capability, and community to help them thrive in the future.
          </p>
          <p className="text-muted-foreground mb-6 text-lg">
            Get in touch if you would like to chat, you're looking for a speaker on AI or technology, or you think I can help you.
          </p>
          <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
  <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
    <BookOpenCheck className="h-6 w-6" />
  </div>
  <div>
    <h3 className="font-medium">Founder & CEO, School of Code</h3>
    <p className="text-sm text-muted-foreground">
      xxxxxxxxxxxx
    </p>
  </div>
</div>
            <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
  <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
    <BookOpenCheck className="h-6 w-6" />
  </div>
  <div>
    <h3 className="font-medium">UK Digital Leader of the Year 2022</h3>
    <p className="text-sm text-muted-foreground">
      xxxxxxxxxxxxxx
    </p>
  </div>
</div>
            <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
  <div className="rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mt-1">
    <BookOpenCheck className="h-6 w-6" />
  </div>
  <div>
    <h3 className="font-medium">Creator, Zoom Hide & Seek</h3>
    <p className="text-sm text-muted-foreground">
      "Best thing I ever created"
    </p>
  </div>
</div>
            </div>
            </div>
            </div>
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            onClick={() => setShowSchoolOfCode(true)}
          >
            About the School of Code <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        // About the School of Code section
        <AboutSchoolOfCode onBack={() => setShowSchoolOfCode(false)} />
      )}

      {/* About image with parallax */}
      {!showSchoolOfCode && (
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
      )}
    </div>
  </div>
</section>
<TestimonialWall />

      {/* Services section */}
      <ServicesSection />

      {/* Smart content section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <SmartContentSection />
        </div>
      </section>

      {/* Contact section */}
      <ContactSection />

      {/* AI chat widget */}
      <AIChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}


