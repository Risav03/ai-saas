"use client";

import { FadeIn } from "@/components/motion";

const chapters = [
  {
    number: "01 — 03",
    title: "The Mindset",
    description:
      'Why "hiring" an AI is fundamentally different from using one. The real cost of getting it wrong. Choosing your platform.',
  },
  {
    number: "04",
    title: "Designing Your AI's Identity",
    description:
      "Give your AI a name, role, personality, and operating philosophy using the system prompt framework. Not a chatbot — a colleague.",
  },
  {
    number: "05",
    title: "The Memory Architecture",
    description:
      "The three-layer memory system: daily logs, working context, and the long-term playbook. Build an AI that remembers.",
  },
  {
    number: "06",
    title: "Tools & Capabilities",
    description:
      "The essential tool stack, permission architecture (green/yellow/red lights), and how to go from advisor to operator.",
  },
  {
    number: "07",
    title: "Safety Rails & Boundaries",
    description:
      "Audit logs, reversibility, scope limits, time limits, and escalation protocols. Own the consequences.",
  },
  {
    number: "08",
    title: "The Operating Relationship",
    description:
      "Morning briefings, working sessions, evening wraps, weekly rhythms — the daily management framework that actually works.",
  },
  {
    number: "09",
    title: "Managing AI at Scale",
    description:
      "The AI org chart, the coding agent protocol, the autonomous bug fix pipeline, and scaling without losing control.",
  },
  {
    number: "10",
    title: "Your First Week",
    description:
      "Day-by-day from zero to a working AI employee. Setup, feedback loops, adding tools, building memory habits.",
  },
  {
    number: "11",
    title: "Industry Playbooks",
    description:
      "Ready-to-use playbooks for e-commerce, agencies, SaaS companies, and content creators.",
  },
  {
    number: "12 — 14",
    title: "Delegation, Failures & Multi-AI Teams",
    description:
      "What to delegate vs. keep. Common failure modes and fixes. When and how to expand to a multi-AI team.",
  },
  {
    number: "15",
    title: "Templates & Quick-Start Kit",
    description:
      "Copy-paste templates: system prompts, daily logs, master playbook, task briefs, weekly reviews, and hiring interviews.",
  },
  {
    number: "16",
    title: "The Hard Truth",
    description:
      "Why most people won't implement this — and what the next 5 years look like for those who do.",
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
