import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/common/animated-text";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <span className="text-secondary font-medium">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4">
              <AnimatedText text="Let's collaborate on" />
              <br />
              <AnimatedText text="something amazing" gradient={true} />
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have an idea? A problem that needs solving? Or just curious about what AI can do for you? I'd love to
              chat.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">hello@chrismeah.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
              <a 
    href="http://www.linkedin.com/in/chrismeah/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="rounded-full p-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary"
  >
    <Linkedin className="h-6 w-6" />
  </a>
</div>
<div className="flex items-center gap-2">
  <p className="text-muted-foreground text-lg">Read insights on</p>
  <a
    href="https://chrismeah.substack.com/p/thoughts-on-the-future"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/substack_wordmark.png"
      alt="Substack"
      className="h-7 w-auto"
    />
  </a>
</div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-background rounded-xl p-8 shadow-lg border border-border/50 relative overflow-hidden">
          <form
  action="https://formspree.io/f/xblgkkbg" 
  method="POST"
  className="space-y-5"
>
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Your Name
    </label>
    <input
      id="name"
      name="name"
      placeholder="What should I call you?"
      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Your Email
    </label>
    <input
      id="email"
      name="email" // This ensures Formspree recognises it as the reply-to email
      type="email"
      placeholder="Where can I reach you?"
      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="project" className="text-sm font-medium">
      What do you need help with?
    </label>
    <select
      id="project"
      name="project" 
      defaultValue=""
      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
    >
      <option value="" disabled>
        Select an option
      </option>
      <option value="strategy">AI strategy</option>
      <option value="education">AI education/training</option>
      <option value="speaking">Public speaking</option>
      <option value="development">Custom AI development</option>
      <option value="content">Thought leadership</option>
      <option value="other">Something else</option>
    </select>
  </div>

  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium">
      Your Message
    </label>
    <textarea
      id="message"
      name="message" 
      placeholder="Tell me a bit about your project or question..."
      rows={4}
      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
    ></textarea>
  </div>

  <Button
    type="submit" 
    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
  >
    Send Message <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</form>
          </div>
        </div>
      </div>
    </section>
  );
}