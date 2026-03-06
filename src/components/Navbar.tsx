"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "What's Inside", href: "#whats-inside" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        scrolled && "border-b border-border shadow-lg shadow-black/5"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/assets/mozihire.png"
              alt="MoziHire"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav — absolute center */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm text-muted hover:text-foreground transition-all duration-200 rounded-lg border border-transparent hover:border-border hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Auth */}
          <div className="hidden md:flex items-center gap-3">
            {!session?.user?.hasPurchasedBook && (
              <a
                href="/purchase"
                className="group inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent/90 transition-all duration-200"
              >
                Get the Guide — $29
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            )}

            {status === "loading" ? (
              <div className="h-8 w-8 rounded-full bg-border animate-pulse" />
            ) : session?.user ? (
              /* Avatar + Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center rounded-full ring-2 ring-transparent hover:ring-border transition-all duration-200 cursor-pointer"
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? "User"}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-medium">
                      {session.user.name?.charAt(0) ?? "U"}
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-background shadow-xl shadow-black/10 overflow-hidden z-50"
                    >
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-foreground truncate">
                          {session.user.name}
                        </p>
                        <p className="text-xs text-muted truncate">
                          {session.user.email}
                        </p>
                      </div>
                      <div className="p-1">
                        <Link
                          href="/dashboard"
                          onClick={() => setDropdownOpen(false)}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-black/5 rounded-lg transition-colors"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            signOut({ redirectTo: "/" });
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login Button */
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground rounded-lg border border-border hover:bg-black/5 transition-all duration-200"
              >
                <LogIn className="h-3.5 w-3.5" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-black/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border mt-3 space-y-2">
                {!session?.user?.hasPurchasedBook && (
                  <a
                    href="/purchase"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-accent"
                  >
                    Get the Guide — $29
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}

                {status !== "loading" && (
                  session?.user ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 px-4 py-2">
                        {session.user.image ? (
                          <Image
                            src={session.user.image}
                            alt={session.user.name ?? "User"}
                            width={28}
                            height={28}
                            className="h-7 w-7 rounded-full"
                          />
                        ) : (
                          <div className="h-7 w-7 rounded-full bg-accent text-white flex items-center justify-center text-xs font-medium">
                            {session.user.name?.charAt(0) ?? "U"}
                          </div>
                        )}
                        <span className="text-sm text-foreground truncate">
                          {session.user.name}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          signOut({ redirectTo: "/" });
                        }}
                        className="w-full px-5 py-2.5 text-sm font-medium text-red-500 rounded-lg border border-border hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-medium text-foreground rounded-lg border border-border hover:bg-black/5 transition-colors"
                    >
                      <LogIn className="h-3.5 w-3.5" />
                      Login
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
