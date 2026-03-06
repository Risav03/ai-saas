"use client";

import { FadeIn } from "@/components/motion";

const chapters = [
  {
    number: "01 — 03",
    title: "The Mindset",
    description:
      "Why hiring beats using. The real cost. Picking your platform.",
  },
  {
    number: "04",
    title: "Identity",
    description:
      "Name, role, personality, and system prompt design.",
  },
  {
    number: "05",
    title: "Memory",
    description:
      "Three-layer memory: daily logs, context, and the playbook.",
  },
  {
    number: "06",
    title: "Tools",
    description:
      "Tool stack, permission levels, and first setup.",
  },
  {
    number: "07",
    title: "Safety",
    description:
      "Boundaries, audit logs, reversibility, and escalation.",
  },
  {
    number: "08",
    title: "Operations",
    description:
      "Daily briefings, working sessions, and weekly rhythms.",
  },
  {
    number: "09",
    title: "Scale",
    description:
      "AI org chart, coding agents, and the bug fix pipeline.",
  },
  {
    number: "10",
    title: "First Week",
    description:
      "Day-by-day from zero to working AI employee.",
  },
  {
    number: "11",
    title: "Industry Playbooks",
    description:
      "E-commerce, agency, SaaS, and content creator setups.",
  },
  {
    number: "12 — 14",
    title: "Delegation & Multi-AI",
    description:
      "What to keep vs. delegate. Failures. Expanding your team.",
  },
  {
    number: "15",
    title: "Templates",
    description:
      "Copy-paste prompts, logs, playbooks, briefs, and reviews.",
  },
  {
    number: "16",
    title: "What Comes Next",
    description:
      "The hard truth and what the next 5 years look like.",
  },
  {
    number: "A — C",
    title: "Appendices",
    description:
      "Platform reference, glossary, and recommended reading.",
  },
];

export function WhatsInside() {
  return (
    <section
      id="whats-inside"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-mono uppercase tracking-widest text-accent mb-4 block">
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            54 pages. No fluff.
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted">
            Everything you need to stop using AI and start hiring it —
            from identity design to daily operations to scaling a multi-AI team.
          </p>
        </FadeIn>

        {/* Chapter List */}
        <div className="space-y-0">
          {chapters.map((chapter, i) => (
            <FadeIn key={chapter.title} delay={0.05 * i}>
              <div className="group flex gap-6 py-6 border-b border-border last:border-b-0">
                {/* Chapter Number */}
                <span className="text-sm font-mono text-accent shrink-0 w-16 pt-0.5">
                  {chapter.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
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
