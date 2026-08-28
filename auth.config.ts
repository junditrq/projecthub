import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import { UserRoleDTO } from './core/application/dtos/user.dto';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token.role;
        session.user.hasBeenPrompted = !!token.hasBeenPrompted;
        session.user.verificationStatus = token.verificationStatus;
        if (token.userId) {
          session.user.id = token.userId;
        }
      }
      return session;
    },

    authorized: async ({ auth, request: { nextUrl } }) => {
      console.log('middleware runnign');
      const { pathname } = nextUrl;
      const user = auth?.user;
      const authenticated = !!user;
      const studentPaths = ['/create-project'];
      const protectedPaths = ['/settings', ...studentPaths];
      const onProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));
      const onStudentPath = studentPaths.some((path) => pathname.startsWith(path));

      if (!authenticated) {
        if (onProtectedPath) {
          return Response.redirect(new URL('/', nextUrl));
        } else {
          return true;
        }
      }

      if (onStudentPath && user.role !== UserRoleDTO.STUDENT) {
        return Response.redirect(new URL('/settings/student-verification', nextUrl));
      }

      return true;
    },
  },
  providers: [Google],
  trustHost: true,
} satisfies NextAuthConfig;
