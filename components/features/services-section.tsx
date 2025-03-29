"use client";

import { useState } from "react";
import { Waypoints, MessageSquare, Presentation } from "lucide-react";
import ServiceCard from "@/components/features/service-card";
import FloatingElement from "@/components/animations/floating-element";
import { InlineWidget } from "react-calendly"

const services = [
  {
    id: "strategy",
    icon: <Waypoints className="h-8 w-8" />,
    title: "Consultancy",
    description: "Let's figure out how AI can actually help your specific situation.",
    details: "I offer bespoke, practical, and tailored consulting services and provide actionable outcomes to help your organisation adopt AI. I have experience helping organisations in public and private sectors.",
  },
  {
    id: "speaking",
    icon: <Presentation className="h-8 w-8" />,
    title: "Public speaking",
    description: "Book me to speak at your conference or else....",
    details: "Elevate your event with a dynamic and insightful presentation where I translate complex concepts into actionable strategies and empower audiences to embrace AI's potential. I tailor presentations and talks to leave a lasting impact, I deliver a unique blend of cutting-edge theory and real-world application, ensuring the audience gains the knowledge and confidence to navigate the future of AI.",
  
  },
  {
    id: "training",
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Training",
    description: "Conversational AI that actually understands your customers and represents your brand properly.",
    details: "AI Chatbots & Assistants provide seamless customer interactions, improving user experience and reducing workload.",
  }
];


export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {!selectedService ? (
          <>
            {/* Default Grid View */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-secondary font-medium mb-2">LET'S GET STARTED</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                Unlocking AI potential
              </h2>
              <p className="text-muted-foreground text-lg max-w-[700px]">
                Build | Learn | Collaborate
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FloatingElement key={service.id} delay={index * 0.2} yOffset={10} duration={4 + index * 0.5}>
                  <div onClick={() => setSelectedService(service.id)}>
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      gradient="from-primary/20 to-secondary/20"
                    />
                  </div>
                </FloatingElement>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Detailed View */}
            <div className="relative bg-background p-8 rounded-lg shadow-lg">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-2xl font-bold"
              >
                ✕
              </button>
              {services
                .filter((service) => service.id === selectedService)
                .map((service) => (
                  <div key={service.id}>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.details}</p>

                    {/* Embed Calendly for AI Strategy */}
                    {service.id === "strategy" && (
                      <div className="mt-6">
                        <InlineWidget
                          url="https://calendly.com/sarjanehunt" 
                          styles={{
                            height: "600px",
                            width: "100%",
                          }}
                          pageSettings={{
                            backgroundColor: "ffffff",
                            primaryColor: "7c0317", 
                            textColor: "213547",
                          }}
                        />
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedService(null)}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity mt-6"
                    >
                      Back to Services
                    </button>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
