import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ArrowRight,
  MessageSquare,
  Mail,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  await connectDB();
  const dbUser = await User.findOne({ email: session.user.email }).lean();

  const hasPurchasedBook = dbUser?.hasPurchasedBook ?? false;
  const bookPurchasedAt = dbUser?.bookPurchasedAt
    ? new Date(dbUser.bookPurchasedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  const plan = dbUser?.plan ?? "free";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24">
          {/* Page Header */}
          <FadeIn>
            <span className="text-sm font-mono uppercase tracking-widest text-accent mb-4 block">
              Dashboard
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Welcome back, {session.user.name?.split(" ")[0]}
            </h1>
            <p className="text-muted text-lg mb-12">
              Manage your account and access your resources.
            </p>
          </FadeIn>

          {/* Profile Card */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl border border-border p-6 sm:p-8 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? "User"}
                      width={56}
                      height={56}
                      className="rounded-full ring-2 ring-accent/30"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {session.user.name}
                    </h2>
                    <p className="text-sm text-muted">{session.user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Sparkles className="h-3 w-3" />
                    {plan}
                  </span>
                  <SignOutButton />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Book Section */}
          <FadeIn delay={0.2}>
            {hasPurchasedBook ? (
              <div className="relative glass rounded-2xl border border-border p-6 sm:p-8 mb-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 shrink-0">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        How to Hire an AI
                      </h3>
                      <p className="text-sm text-muted mb-1">
                        The Complete Founder&apos;s Playbook — 54 pages
                      </p>
                      {bookPurchasedAt && (
                        <p className="text-xs font-mono text-accent">
                          Purchased {bookPurchasedAt}
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href="/api/download/book"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent/90 transition-all duration-200 shrink-0"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative glass rounded-2xl border border-border p-6 sm:p-8 mb-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 shrink-0">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        How to Hire an AI
                      </h3>
                      <p className="text-sm text-muted max-w-md">
                        The complete playbook for non-technical founders who want
                        to stop using AI and start working with it. 54 pages of
                        actionable frameworks.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/purchase"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent/90 transition-all duration-200 shrink-0"
                  >
                    Get the Guide — $29
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative p-6 rounded-xl border border-border bg-surface/80 overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-xs font-mono text-accent">01</span>
                </div>
                <h3 className="relative text-lg font-semibold text-foreground mb-1">
                  Chat with AI
                </h3>
                <p className="relative text-sm text-muted leading-relaxed">
                  Have questions about hiring AI? Use the chat assistant in
                  the bottom-right corner to get instant answers.
                </p>
              </div>

              <a
                href="mailto:support@mozihire.ai"
                className="relative p-6 rounded-xl border border-border bg-surface/80 overflow-hidden group hover:border-accent/30 transition-colors"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-xs font-mono text-accent">02</span>
                </div>
                <h3 className="relative text-lg font-semibold text-foreground mb-1">
                  Get Support
                </h3>
                <p className="relative text-sm text-muted leading-relaxed">
                  Need help? Reach out to our team and we&apos;ll get back
                  to you within 24 hours.
                </p>
              </a>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
