"use client";

import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "API Docs"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Webinars", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR", "Cookie Policy"],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Discord", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2.5 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">
                  NovaMind
                </span>
              </a>
              <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
                Intelligent AI automation for modern enterprises. Transform your
                workflows, scale your operations.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300 text-xs font-medium"
                  >
                    {link.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} NovaMind AI. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with intelligence for the future of enterprise.
          </p>
        </div>
      </div>
    </footer>
  );
}
