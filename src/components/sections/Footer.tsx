"use client";

import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                MoziHire
              </span>
            </a>
            <span className="hidden sm:inline text-xs text-muted">
              The AI employee playbook
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="mailto:hello@mozihire.com"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} MoziHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
