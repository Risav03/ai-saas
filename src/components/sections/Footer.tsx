"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/assets/mozihire.png"
                alt="MoziHire"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </a>
            <span className="hidden sm:inline text-xs text-muted">
              How to Hire an AI
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="mailto:support@mozihire.ai"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} MoziHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
