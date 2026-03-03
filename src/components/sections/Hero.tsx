"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-accent">
              66-Page PDF Guide
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Build a Company
            <br />
            <span className="text-accent">of AI Agents</span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.35}>
          <p className="mx-auto max-w-xl text-lg text-muted leading-relaxed mb-10">
            The practical playbook for turning LLMs into actual team members.
            Identity design, memory architecture, tool access, and the operating
            relationship that makes it work.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-accent hover:bg-accent/90 transition-colors duration-300"
          >
            Get the Playbook — $19
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-muted">
            Instant PDF download &middot; Lifetime updates
          </p>
        </FadeIn>

        {/* Book cover mockup */}
        <FadeIn delay={0.65} className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-xs">
            <div className="rounded-lg border border-white/10 bg-surface p-8 text-left">
              <div className="text-xs text-accent font-mono uppercase tracking-wider mb-6">
                MoziHire
              </div>
              <h2 className="text-xl font-bold text-white leading-snug mb-3">
                How to Hire
                <br />
                an AI
              </h2>
              <p className="text-xs text-muted">
                A practical playbook for giving
                <br />
                an AI a real job
              </p>
              <div className="mt-8 pt-4 border-t border-white/5">
                <span className="text-[10px] text-muted uppercase tracking-widest">
                  OpenClaw Framework
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
