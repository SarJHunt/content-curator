import { ArrowRight, Brain, Code, MessageSquare, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedText from "@/components/common/animated-text"
import { HeroParticles } from "@/components/effects/hero-particles"
import FloatingElement from "@/components/animations/floating-element"
import { ScrollIndicator } from "@/components/common/scroll-indicator"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import DynamicBackgroundWrapper from "@/components/effects/DynamicBackgroundWrapper"
import { SmartContentSection } from "@/components/features/smart-content-section"
import { SmartCTA } from "@/components/features/smart-cta"
import { IntelligentScrollAnimations, ParallaxSection } from "@/components/animations/intelligent-scroll-animations"

// Dynamically import DynamicBackground with SSR disabled
// Dynamically import DynamicBackground with SSR disabled

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* AI-Enhanced Navigation */}
      <Header />

      {/* Dynamic Background that responds to user movement */}
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
              <span className="gradient-text font-medium">Independent AI Consultant</span>
            </FloatingElement>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              <AnimatedText text="Making AI" delay={0.1} />
              <br />
              <AnimatedText text="Work for" delay={0.2} />
              <br />
              <AnimatedText text="Humans" gradient={true} delay={0.3} />
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
              I help creators, startups, and businesses harness the power of AI without the corporate jargon and
              complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#contact">
                  Work With Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary hover:bg-primary/10 transition-colors"
              >
                <Link href="#services">See What I Do</Link>
              </Button>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Services Section with Intelligent Scroll Animations */}
      <section id="services" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container px-4 md:px-6">
          <IntelligentScrollAnimations>
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-secondary font-medium mb-2">WHAT I OFFER</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                <AnimatedText text="AI Solutions That" />
                <br />
                <AnimatedText text="Actually Make Sense" gradient={true} />
              </h2>
              <p className="text-muted-foreground text-lg max-w-[700px]">
                No buzzwords, no hype—just practical AI applications tailored to your unique needs
              </p>
            </div>
          </IntelligentScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IntelligentScrollAnimations delay={0.1}>
              <FloatingElement delay={0} yOffset={6} duration={5}>
                <ServiceCard
                  icon={<Brain className="h-8 w-8" />}
                  title="AI Strategy"
                  description="Let's figure out how AI can actually help your specific situation, not just what's trendy."
                  gradient="from-primary/20 to-primary/5"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.2}>
              <FloatingElement delay={0.2} yOffset={6} duration={5.5}>
                <ServiceCard
                  icon={<Code className="h-8 w-8" />}
                  title="Custom AI Development"
                  description="Bespoke AI solutions built for your specific needs, whether it's automation, analysis, or creative tools."
                  gradient="from-secondary/20 to-secondary/5"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.3}>
              <FloatingElement delay={0.4} yOffset={6} duration={5.2}>
                <ServiceCard
                  icon={<MessageSquare className="h-8 w-8" />}
                  title="AI Chatbots & Assistants"
                  description="Conversational AI that actually understands your customers and represents your brand properly."
                  gradient="from-primary/20 to-secondary/20"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.4}>
              <FloatingElement delay={0.1} yOffset={6} duration={4.8}>
                <ServiceCard
                  icon={<Sparkles className="h-8 w-8" />}
                  title="Content Generation"
                  description="AI tools that help you create better content faster, while keeping your unique voice and style."
                  gradient="from-secondary/20 to-primary/20"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.5}>
              <FloatingElement delay={0.3} yOffset={6} duration={5.3}>
                <ServiceCard
                  icon={<Zap className="h-8 w-8" />}
                  title="Workflow Automation"
                  description="Identify and automate the tedious parts of your work so you can focus on what matters."
                  gradient="from-primary/20 to-primary/5"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.6}>
              <FloatingElement delay={0.5} yOffset={6} duration={4.9}>
                <ServiceCard
                  icon={<Brain className="h-8 w-8" />}
                  title="AI Education"
                  description="Learn how to use AI tools effectively in your work through personalized workshops and training."
                  gradient="from-secondary/20 to-secondary/5"
                />
              </FloatingElement>
            </IntelligentScrollAnimations>
          </div>
        </div>
      </section>

      {/* Smart Content Section - AI-powered content recommendations */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <SmartContentSection />
        </div>
      </section>

      {/* About Section with Parallax Effect */}
      <section id="about" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <IntelligentScrollAnimations>
                <span className="text-secondary font-medium">ABOUT ME</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4">
                  <AnimatedText text="Hi, I'm " />
                  <AnimatedText text="Alex" gradient={true} />
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  I'm an independent AI consultant who believes technology should work for people, not the other way
                  around. After years in the corporate AI world, I now help individuals and businesses implement AI
                  solutions that actually solve real problems.
                </p>
                <p className="text-muted-foreground mb-8">
                  My approach is practical, ethical, and focused on results. I speak human, not tech jargon, and I'm
                  passionate about making AI accessible to everyone.
                </p>
              </IntelligentScrollAnimations>

              <IntelligentScrollAnimations delay={0.2}>
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
              </IntelligentScrollAnimations>

              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                asChild
              >
                <Link href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <ParallaxSection>
                <div className="relative">
                  <div className="blob absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl"></div>
                  <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=400"
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

      {/* Smart CTA - Adapts based on user behavior */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <SmartCTA />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <IntelligentScrollAnimations>
              <div>
                <span className="text-secondary font-medium">GET IN TOUCH</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4">
                  <AnimatedText text="Let's Create" />
                  <br />
                  <AnimatedText text="Something Amazing" gradient={true} />
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Have an idea? A problem that needs solving? Or just curious about what AI can do for you? I'd love to
                  chat.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@aiwizard.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Portland, OR</p>
                    </div>
                  </div>
                </div>
              </div>
            </IntelligentScrollAnimations>

            <IntelligentScrollAnimations delay={0.2}>
              <div className="bg-background rounded-xl p-8 shadow-lg border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      placeholder="What should I call you?"
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Where can I reach you?"
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium">
                      What's on your mind?
                    </label>
                    <select
                      id="project"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    >
                      <option value="" disabled>
                        Select what you need help with
                      </option>
                      <option value="strategy">AI Strategy</option>
                      <option value="development">Custom AI Development</option>
                      <option value="chatbot">AI Chatbot or Assistant</option>
                      <option value="content">Content Generation</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="education">AI Education/Training</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me a bit about your project or question..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </IntelligentScrollAnimations>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function ServiceCard({ icon, title, description, gradient }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50 h-full">
      <CardHeader className="pb-2">
        <div
          className={`rounded-lg p-3 mb-3 bg-gradient-to-r ${gradient} w-fit transition-transform duration-300 group-hover:scale-110`}
        >
          <div className="text-primary">{icon}</div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

