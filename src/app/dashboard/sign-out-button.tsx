"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      className="px-5 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-black/5 transition-all duration-200 cursor-pointer"
    >
      Sign Out
    </button>
  );
}
