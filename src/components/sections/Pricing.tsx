"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with AI automation.",
    features: [
      "Up to 5 team members",
      "10,000 AI operations/month",
      "50+ integrations",
      "Basic analytics dashboard",
      "Email support",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description:
      "For growing teams that need advanced AI capabilities and scale.",
    features: [
      "Up to 25 team members",
      "100,000 AI operations/month",
      "200+ integrations",
      "Advanced analytics & reporting",
      "Priority support (4h SLA)",
      "Custom workflow builder",
      "SSO & RBAC",
      "Dedicated success manager",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large organizations with custom requirements and compliance needs.",
    features: [
      "Unlimited team members",
      "Unlimited AI operations",
      "500+ integrations",
      "Custom AI model training",
      "24/7 premium support",
      "On-premise deployment option",
      "Advanced security & compliance",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Start free, scale as you grow. No hidden fees. Cancel anytime.
          </p>
        </FadeIn>

        {/* Pricing Cards */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItemVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-accent/10 to-accent-secondary/5 border-2 border-accent/30 glow-sm lg:scale-105"
                  : "bg-surface/50 border border-white/5 hover:border-white/10"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent to-accent-secondary text-white animate-pulse-glow">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted mb-6">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted text-sm">{plan.period}</span>
                )}
              </div>

              {/* CTA */}
              <a
                href="#cta"
                className={`block w-full text-center py-3 px-6 rounded-full font-medium text-sm transition-all duration-300 mb-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-accent to-accent-secondary text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
