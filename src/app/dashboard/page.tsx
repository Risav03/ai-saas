import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="glass rounded-2xl border border-border p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-4">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? "User"}
                width={56}
                height={56}
                className="rounded-full ring-2 ring-border"
              />
            )}
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Welcome, {session.user.name}
              </h1>
              <p className="text-sm text-muted">{session.user.email}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted mb-4">
              You&apos;re signed in with Google. This is your dashboard.
            </p>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
