import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PurchaseSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="rounded-2xl border border-border bg-surface/80 p-8 sm:p-12 w-full max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-emerald-500" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            Payment Successful!
          </h1>
          <p className="text-sm text-muted">
            Thank you for purchasing the AI Agents Playbook. You&apos;ll
            receive a confirmation email from Stripe shortly.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent/90 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
