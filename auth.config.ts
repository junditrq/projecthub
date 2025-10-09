import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {},
  callbacks: {},
  providers: [Google],
  trustHost: true,
} satisfies NextAuthConfig;
