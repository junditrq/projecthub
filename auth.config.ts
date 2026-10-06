import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authConfig = {
  pages: {},
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token.role;
        session.user.isStudent = !!token.isStudent;
        session.user.hasBeenPrompted = !!token.hasBeenPrompted;
        session.user.verificationStatus = token.verificationStatus;
        if (token.userId) {
          session.user.id = token.userId;
        }
      }
      return session;
    },
  },
  providers: [Google],
  trustHost: true,
} satisfies NextAuthConfig;
