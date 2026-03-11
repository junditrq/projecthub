import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
  pages: {},
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (user) {
        token.hasBeenPrompted = !!user.hasBeenPrompted;
        token.userId = user.id;
        token.role = user.role;
      }

      if (trigger === "update" && session?.hasBeenPrompted !== undefined) {
        token.hasBeenPrompted = session.hasBeenPrompted;
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token.role;
        session.user.hasBeenPrompted = !!token.hasBeenPrompted;
      }
      if (token.userId) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  providers: [Google],
  trustHost: true,
} satisfies NextAuthConfig;
