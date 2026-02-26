"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent-secondary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeIn>
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-surface/60 border border-white/10 p-12 lg:p-16 backdrop-blur-sm glow"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted mb-10">
              Join 10,000+ enterprises already using NovaMind AI. Start your free
              14-day trial — no credit card required.
            </p>

            {/* Email + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-accent to-accent-secondary hover:shadow-lg hover:shadow-accent/25 transition-shadow duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <p className="mt-4 text-xs text-muted">
              Free 14-day trial &middot; No credit card required &middot; Cancel anytime
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
