"use client";

import { UserPlus, Cpu, Rocket } from "lucide-react";
import { FadeIn } from "@/components/motion";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Define Your Agent",
    description:
      "Set identity, role, and personality using the SOUL.md framework. Not a chatbot — a colleague with a real job.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Configure Memory & Tools",
    description:
      "Wire up three-layer memory, tool access, and sub-agent delegation. Build an AI that gets smarter over time.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy & Operate",
    description:
      "Launch your AI employee with daily operating rhythms, safety rails, and the trust ladder for increasing autonomy.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-mono uppercase tracking-widest text-accent mb-4 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Three steps from zero to a working AI employee.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.step} delay={0.15 * i}>
                <div className="relative p-6 rounded-xl border border-border bg-surface/80 overflow-hidden">
                  {/* Blur gradient */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

                  {/* Icon + Step */}
                  <div className="relative flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs font-mono text-accent">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="relative text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="relative text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
