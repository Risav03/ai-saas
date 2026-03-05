import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
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
    async redirect({ url, baseUrl }) {
      // After sign-in, redirect to /dashboard
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return `${baseUrl}/dashboard`;
    },
  },
});
