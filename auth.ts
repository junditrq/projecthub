import { authConfig } from '@/auth.config';
import prisma from '@/core/infra/orm/prisma/prisma.client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type DefaultSession } from 'next-auth';
import { VerificationRequestStatusDTO } from './core/application/dtos/verification-request.dto';
import container from './core/infra/di/container';
import { UserRoleDTO } from './core/application/dtos/user.dto';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      hasBeenPrompted: boolean;
      role: UserRoleDTO;
      name: string;
      email: string;
      image?: string;
      verificationStatus: VerificationRequestStatusDTO;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    hasBeenPrompted: boolean;
    role: UserRoleDTO;
    verificationStatus: VerificationRequestStatusDTO;
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
// ignore the eslint for this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    hasBeenPrompted: boolean;
    role: UserRoleDTO;
    userId: string | undefined;
    verificationStatus: VerificationRequestStatusDTO;
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  callbacks: {
    ...authConfig.callbacks,
    jwt: async ({ user, token, trigger, session }) => {
      if (user) {
        try {
          const getStudentVerificationStatusUseCase = container.get(
            'GetUserVerificationStatusUseCase'
          );
          token.verificationStatus = await getStudentVerificationStatusUseCase.execute(user.id);
        } catch (error) {
          console.error('Error fetching verification status:', error);
          token.verificationStatus = VerificationRequestStatusDTO.NOT_SUBMITTED;
        }

        token.hasBeenPrompted = !!user.hasBeenPrompted;
        token.userId = user.id;
        token.role = user.role;
      }

      if (trigger === 'update' && session?.hasBeenPrompted !== undefined) {
        token.hasBeenPrompted = session.hasBeenPrompted;
      }

      return token;
    },
  },
});
