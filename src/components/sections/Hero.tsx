"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Mail, Share2, Code2, Server, Shield, Bot, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { FallingPattern } from "@/components/ui/falling-pattern";

const agentData = [
  {
    name: "EmailBot", role: "Email Ops", icon: Mail,
    iconBg: "bg-blue-100", iconColor: "text-blue-600", statusColor: "bg-emerald-400",
    statuses: ["Processing 14 threads", "Drafting reply to Acme", "Sorting inbox — 3 left", "Sent follow-up to Jake", "Archiving 8 read threads"],
  },
  {
    name: "SocialBot", role: "Social Media", icon: Share2,
    iconBg: "bg-pink-100", iconColor: "text-pink-600", statusColor: "bg-emerald-400",
    statuses: ["Scheduling 3 posts", "Replying to @user_labs", "Generating carousel", "Analytics digest ready", "Queued reel for 6 PM"],
  },
  {
    name: "DevBot", role: "Engineering", icon: Code2,
    iconBg: "bg-violet-100", iconColor: "text-violet-600", statusColor: "bg-emerald-400",
    statuses: ["PR review #847", "Running test suite", "Rebasing feature/auth", "Fixing lint errors", "Deployed v2.4.2-rc1"],
  },
  {
    name: "InfraBot", role: "DevOps", icon: Server,
    iconBg: "bg-amber-100", iconColor: "text-amber-600", statusColor: "bg-yellow-400",
    statuses: ["Scaling cluster → 4 nodes", "SSL cert renewed", "Deploying to staging", "DB backup complete", "Monitoring CPU spike"],
  },
  {
    name: "SecBot", role: "Security", icon: Shield,
    iconBg: "bg-red-100", iconColor: "text-red-600", statusColor: "bg-emerald-400",
    statuses: ["0 threats detected", "Scanning deps — 2/12", "Rotated API keys", "Audit log exported", "Blocked 3 IPs"],
  },
];

function useAnimatedNumber(base: number, range: number, interval: number) {
  const [value, setValue] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        const delta = Math.floor(Math.random() * range * 2) - range;
        return Math.max(base - range, Math.min(base + range, prev + delta));
      });
    }, interval);
    return () => clearInterval(id);
  }, [base, range, interval]);
  return value;
}

function useCyclingStatuses() {
  const [indices, setIndices] = useState(() => agentData.map(() => 0));
  useEffect(() => {
    const intervals = agentData.map((agent, i) => {
      const delay = 2500 + i * 800;
      return setInterval(() => {
        setIndices((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % agent.statuses.length;
          return next;
        });
      }, delay);
    });
    return () => intervals.forEach(clearInterval);
  }, []);
  return indices;
}

export function Hero() {
  const taskCount = useAnimatedNumber(847, 5, 2200);
  const uptime = useAnimatedNumber(992, 2, 3500); // store as 992 → display as 99.2
  const statusIndices = useCyclingStatuses();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden max-lg:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FallingPattern
          color="rgba(16, 185, 129, 0.7)"
          backgroundColor="rgba(255, 255, 255, 0.6)"
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--color-background))]"
          duration={150}
          density={0}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-accent/30 bg-accent/5 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-accent">
                  66-Page PDF Guide
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
                Build a Company
                <br />
                <span className="text-accent">of AI Agents</span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.35}>
              <p className="max-w-xl text-lg text-muted leading-relaxed mb-10 mx-auto lg:mx-0">
                The practical playbook for turning LLMs into actual team members.
                Identity design, memory architecture, tool access, and the operating
                relationship that makes it work.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.5}>
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-lg bg-accent hover:bg-accent/90 transition-colors duration-300"
              >
                Get the Playbook — $19
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-sm text-muted">
                Instant PDF download &middot; Lifetime updates
              </p>
            </FadeIn>
          </div>

          {/* Right — Agent Dashboard Card */}
          <FadeIn delay={0.65}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              {/* Glow */}
              <div className="absolute -inset-4 bg-accent/8 rounded-3xl blur-[60px] -z-10" />

              {/* Card */}
              <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/5 overflow-hidden">
                {/* Card Header */}
                <div className="px-5 py-3.5 border-b border-border bg-surface/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                      <Image src="/assets/mozi.png" alt="Mozi" width={20} height={20} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-semibold text-foreground leading-none">Agent Control Panel</p>
                      <p className="text-[10px] font-mono text-muted mt-0.5">5 agents online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600">LIVE</span>
                  </div>
                </div>

                {/* Agent Rows */}
                <div className="divide-y divide-border/60">
                  {agentData.map((agent, i) => {
                    const Icon = agent.icon;
                    const currentStatus = agent.statuses[statusIndices[i]];
                    return (
                      <div key={agent.name} className="px-5 py-3 flex items-center gap-3 hover:bg-surface/40 transition-colors">
                        {/* Agent Icon */}
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${agent.iconBg}`}>
                          <Icon className={`h-4 w-4 ${agent.iconColor}`} />
                        </div>

                        {/* Agent Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-xs font-mono font-semibold text-foreground truncate">{agent.name}</p>
                            <span className="text-[10px] font-mono text-muted bg-surface px-1.5 py-0.5 rounded">{agent.role}</span>
                          </div>
                          <div className="h-3.5 mt-0.5 overflow-hidden relative">
                            <AnimatePresence mode="wait">
                              <motion.p
                                key={currentStatus}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="text-[10px] font-mono text-muted truncate absolute inset-0"
                              >
                                {currentStatus}
                              </motion.p>
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Status Dot */}
                        <div className={`h-2 w-2 rounded-full ${agent.statusColor} shrink-0 animate-pulse`} />
                      </div>
                    );
                  })}
                </div>

                {/* Card Footer — mini stats */}
                <div className="px-5 py-3 border-t border-border bg-surface/40 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Activity className="h-3 w-3 text-accent" />
                      <span className="text-[10px] font-mono text-muted tabular-nums">{taskCount} tasks / 24h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bot className="h-3 w-3 text-violet-500" />
                      <span className="text-[10px] font-mono text-muted tabular-nums">{(uptime / 10).toFixed(1)}% uptime</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-muted/60">v2.4.1</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
