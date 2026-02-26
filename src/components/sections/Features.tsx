"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Workflow,
  Globe,
} from "lucide-react";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Leverage advanced machine learning models to extract insights, predict trends, and automate decision-making across your organization.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Process millions of data points in milliseconds with our distributed computing infrastructure. No delays, no bottlenecks.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, SSO, RBAC, and comprehensive audit logging for full compliance.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Interactive dashboards with customizable KPIs, automated reporting, and predictive analytics powered by AI.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Build complex automation pipelines with our visual no-code builder. Trigger actions across 500+ integrated apps.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy across 30+ regions worldwide with automatic load balancing, 99.99% uptime SLA, and sub-50ms latency.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Intelligently</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            A comprehensive AI platform built for enterprise teams who demand
            performance, security, and reliability at scale.
          </p>
        </FadeIn>

        {/* Feature Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-surface/50 border border-white/5 p-8 transition-all duration-300 hover:border-accent/20 hover:bg-surface/80 gradient-border"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
