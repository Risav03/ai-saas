"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { FadeIn, CountUp } from "@/components/motion";

const stats = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 500, suffix: "+", label: "Integrations" },
  { value: 4.9, suffix: "/5", label: "Customer Rating" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-50" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-medium text-accent">
              Now with GPT-5 Integration
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Automate Your</span>
            <br />
            <span className="gradient-text">Enterprise Workflows</span>
            <br />
            <span className="text-white">With AI</span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.35}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mb-10">
            NovaMind AI empowers B2B teams with intelligent automation, predictive
            analytics, and seamless integrations — reducing operational costs by up
            to 60%.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-accent to-accent-secondary overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Play className="h-4 w-4 text-accent" />
              Watch Demo
            </a>
          </div>
        </FadeIn>

        {/* Product Screenshot Mockup */}
        <FadeIn delay={0.65} className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind the mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 rounded-2xl blur-3xl -z-10 scale-95" />
            <div className="relative rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-sm p-2 glow">
              <div className="rounded-xl bg-background overflow-hidden">
                {/* Fake browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-white/5 rounded-md max-w-xs mx-auto" />
                  </div>
                </div>
                {/* Dashboard mockup content */}
                <div className="p-6 lg:p-8 space-y-6 min-h-[300px] lg:min-h-[400px]">
                  {/* Top row stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {["Revenue", "Users", "Tasks", "Efficiency"].map((label, i) => (
                      <div
                        key={label}
                        className="rounded-lg bg-white/5 border border-white/5 p-4"
                      >
                        <div className="text-xs text-muted mb-1">{label}</div>
                        <div className="h-6 bg-gradient-to-r from-accent/20 to-accent-secondary/20 rounded w-3/4" />
                      </div>
                    ))}
                  </div>
                  {/* Chart mockup */}
                  <div className="rounded-lg bg-white/5 border border-white/5 p-6 h-48 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="flex-1 rounded-t bg-gradient-to-t from-accent/60 to-accent-secondary/60"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-20 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 * i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
