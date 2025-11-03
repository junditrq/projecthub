import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
  pages: {},
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.hasBeenPrompoted = !!user.hasBeenPrompted;
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (session.user) {
        session.user.hasBeenPrompted = !!token.hasBeenPrompoted;
      }
      return session;
    },
  },
  providers: [Google],
  trustHost: true,
} satisfies NextAuthConfig;
