"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="rounded-2xl bg-surface/60 border border-white/10 p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to hire your first AI?
            </h2>
            <p className="mx-auto max-w-lg text-lg text-muted mb-10">
              The playbook covers everything — identity, memory, tools, safety,
              and the operating relationship that makes it work.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-accent hover:bg-accent/90 transition-colors duration-300"
            >
              Get the Playbook — $19
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-4 text-sm text-muted">
              Instant PDF download &middot; Lifetime updates
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
