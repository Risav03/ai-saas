"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { ParallaxSection } from "@/components/motion";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Connect Your Data",
    description:
      "Seamlessly integrate with your existing tools and data sources. Our platform supports 500+ native integrations including Salesforce, HubSpot, Slack, and more.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Processes & Learns",
    description:
      "Our AI engine analyzes patterns, builds predictive models, and creates automated workflows tailored specifically to your business operations.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Scale & Optimize",
    description:
      "Watch as your efficiency soars. Monitor results in real-time dashboards, fine-tune automations, and continuously improve with AI-driven recommendations.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Floating orbs with parallax */}
      <ParallaxSection speed={0.2} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[100px]" />
      </ParallaxSection>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-secondary mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Up and Running in{" "}
            <span className="gradient-text">Minutes, Not Months</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            No complex setup, no lengthy onboarding. Get started in three simple
            steps and see results from day one.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-accent via-accent-secondary to-accent origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.step} delay={0.2 * i}>
                  <div className="relative text-center group">
                    {/* Step Number Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-white/10 mb-6 mx-auto group-hover:border-accent/30 transition-colors duration-300"
                    >
                      <Icon className="h-8 w-8 text-accent" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-secondary text-white text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
