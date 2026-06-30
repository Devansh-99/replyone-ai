import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const secret =
  process.env.AUTH_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  process.env.SECRET ||
  "dev-secret-change-me";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret,
  providers: [Google],
});
