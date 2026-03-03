"use client";

import { FadeIn } from "@/components/motion";

const chapters = [
  {
    number: "01 — 03",
    title: "The Foundation",
    description:
      'Why "hiring" an AI is fundamentally different from using one. Platform options. Identity and personality design.',
  },
  {
    number: "04 — 05",
    title: "Memory & Systems",
    description:
      "The three-layer memory architecture. Tools, capabilities, and sub-agent delegation patterns.",
  },
  {
    number: "06",
    title: "Safety & Trust",
    description:
      "Practical safety rails, the trust ladder, and how to increase autonomy without losing control.",
  },
  {
    number: "07",
    title: "The Operating Relationship",
    description:
      "Daily rhythms, communication patterns, and the management framework that actually works.",
  },
  {
    number: "08 — 09",
    title: "Coding Agents at Scale",
    description:
      "Ralph loops, parallel execution, TDD prompts, and infrastructure for running multiple agents simultaneously.",
  },
  {
    number: "10",
    title: "The Sentry Pipeline",
    description:
      "A system that detects, triages, fixes, and ships bug fixes autonomously — sometimes while you sleep.",
  },
  {
    number: "11",
    title: "Advanced Configuration",
    description:
      "Multi-agent architecture, webhook hooks, semantic memory, and production-grade config.",
  },
  {
    number: "12",
    title: "Quick-Start Kit",
    description:
      "Step-by-step from zero to working AI employee in one afternoon. Every command, every config file.",
  },
];

export function WhatsInside() {
  return (
    <section
      id="whats-inside"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-mono uppercase tracking-widest text-accent mb-4 block">
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            66 pages. No fluff.
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted">
            Everything you need to turn an LLM into an actual team member —
            from identity design to production deployment.
          </p>
        </FadeIn>

        {/* Chapter List */}
        <div className="space-y-0">
          {chapters.map((chapter, i) => (
            <FadeIn key={chapter.title} delay={0.05 * i}>
              <div className="group flex gap-6 py-6 border-b border-white/5 last:border-b-0">
                {/* Chapter Number */}
                <span className="text-sm font-mono text-accent shrink-0 w-16 pt-0.5">
                  {chapter.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
