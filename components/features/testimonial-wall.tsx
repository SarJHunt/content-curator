"use client";

import { motion } from "framer-motion";
import FloatingElement from "@/components/animations/floating-element";

const testimonials = [
  {
    id: 1,
    name: "Nadeem Shabir",
    role: "Technology from Sage",
    photo: "/testimonials/nadeem.jpg",
    testimonial:
      "Being part of School Of Code has been one of those rare, transformative experiences. As Chris wraps up this incredible 10-year journey, I find myself reflecting on the impact School of Code has had and the many individuals whose paths have been reshaped by this mission.",
  },
  {
    id: 2,
    name: "Clare Streets",
    role: "Former bootcamper",
    photo: "/testimonials/Clare Streets.png",
    testimonial:
      "The School of Code Bootcamp provides so much more than just software development training. It's an all-encompassing introduction to the tech industry and its network gives it the edge in making it a job ready experience. It’s very intensive and requires great commitment but worth every moment. Entirely life changing experience.",
  },
  {
    id: 3,
    name: "Perry Krug",
    role: "Pinecone",
    photo: "/testimonials/perry_krug.jpg",
    testimonial:
      "Chris is extremely knowledgeable about all things AI. His insights are really valuable for me working with vector databases at Pinecone.",
  },
];

const gradients = [
  "bg-gradient-to-r from-primary/10 to-secondary/10",
  "bg-gradient-to-r from-secondary/10 to-primary/10",
  "bg-gradient-to-r from-primary/20 to-secondary/20",
];

export default function TestimonialWall() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            What others are saying
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
            Hear from those that have worked with me.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FloatingElement key={testimonial.id} delay={index * 0.2} yOffset={10} duration={4}>
              <motion.div
                className={`relative rounded-lg shadow-lg p-8 border border-border/50 hover:shadow-2xl transition-shadow ${gradients[index % gradients.length]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              >
                {/* Photo with Circular Gradient */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="mt-12 text-center">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    <span className="font-semibold text-primary dark: text-white">"</span>
                    {testimonial.testimonial}
                    <span className="font-semibold text-primary dark: text-white">"</span>
                  </p>
                </div>
              </motion.div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  );
}