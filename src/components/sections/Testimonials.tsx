"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechScale Inc.",
    avatar: "SC",
    quote:
      "NovaMind AI cut our data processing time by 73%. What used to take our team days now happens automatically in minutes. The ROI was visible within the first month.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    company: "CloudFirst Solutions",
    avatar: "MJ",
    quote:
      "The workflow automation is incredible. We've automated over 200 repetitive tasks and freed up our engineering team to focus on innovation instead of maintenance.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Analytics",
    company: "DataVault Corp",
    avatar: "ER",
    quote:
      "Finally, an AI platform that delivers on its promises. The predictive analytics have improved our forecasting accuracy by 45%. Enterprise-grade in every sense.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    company: "ScaleOps",
    avatar: "DP",
    quote:
      "Integration was seamless — we were up and running in less than a day. The API is well-documented and the support team is incredibly responsive.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO",
    company: "Nexis AI",
    avatar: "LT",
    quote:
      "We evaluated 12 platforms before choosing NovaMind. The combination of AI capabilities, security compliance, and ease of use is unmatched in the market.",
    rating: 5,
  },
  {
    name: "James Wright",
    role: "Product Manager",
    company: "InnovateTech",
    avatar: "JW",
    quote:
      "NovaMind transformed how we handle customer data. The AI-driven insights have helped us increase customer retention by 35% in just three months.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-secondary mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Join thousands of enterprises that trust NovaMind AI to power their
            most critical workflows.
          </p>
        </FadeIn>

        {/* Testimonial Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-surface/50 border border-white/5 p-6 hover:border-white/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
