import NextAuth from "next-auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { authConfig } from "@/lib/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user }) {
      if (!user.email) return false;

      await connectDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          name: user.name ?? "Unknown",
          email: user.email,
          image: user.image ?? undefined,
          plan: "free",
        });
      } else {
        await User.updateOne(
          { email: user.email },
          { name: user.name ?? existingUser.name, image: user.image ?? undefined }
        );
      }

      return true;
    },
    async session({ session }) {
      if (session.user?.email) {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email })
          .select("hasPurchasedBook")
          .lean();
        session.user.hasPurchasedBook = dbUser?.hasPurchasedBook ?? false;
      }
      return session;
    },
  },
});
