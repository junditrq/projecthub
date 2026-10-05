import { authConfig } from '@/auth.config';
import prisma from '@/core/infra/orm/prisma/prisma.client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type DefaultSession } from 'next-auth';
import { VerificationRequestStatusDTO } from './core/application/dtos/verification-request.dto';
import container from './core/infra/di/container';
import { UserRoleDTO } from './core/application/dtos/user.dto';
import { UserRoleDTOMapper } from './core/application/mappers/user-role.dto.mapper';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      hasBeenPrompted: boolean;
      role: UserRoleDTO;
      isStudent: boolean;
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
    isStudent: boolean;
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
    isStudent: boolean;
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
        const getStudentVerificationStatusUseCase = container.get(
          'GetUserVerificationStatusUseCase'
        );
        token.verificationStatus = await getStudentVerificationStatusUseCase.execute(user.id);

        const userRepo = container.get('IUserRepo');
        const domainUser = await userRepo.findById(user.id);
        token.isStudent = domainUser?.isStudent ?? false;
        token.role = domainUser ? UserRoleDTOMapper.toDTO(domainUser.role) : user.role;

        token.hasBeenPrompted = !!user.hasBeenPrompted;
        token.userId = user.id;
        if (!token.role) {
          token.role = user.role;
        }
      }

      if (trigger === 'update' && session?.hasBeenPrompted !== undefined) {
        token.hasBeenPrompted = session.hasBeenPrompted;
      }

      return token;
    },
  },
});
