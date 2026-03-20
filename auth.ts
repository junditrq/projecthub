import { authConfig } from "@/auth.config";
import prisma from "@/core/infra/orm/prisma.client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { type DefaultSession } from "next-auth";
import { VerificationRequestStatusDTO } from "./core/application/dtos/verification-request.dto";
import { GetStudentVerificationStatusUseCase } from "./core/application/usecases/user/get-student-verificaiton-status.usecase";
import { UserProps } from "./core/domain/entities/user.entity";
import { PrismaVerificationRequestRepo } from "./core/infra/repos/prisma/verification-request.repo";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      hasBeenPrompted: boolean;
      role: UserProps["role"];
      name: string;
      email: string;
      verificationStatus: VerificationRequestStatusDTO;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    hasBeenPrompted: boolean;
    role: UserProps["role"];
    verificationStatus: VerificationRequestStatusDTO;
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
// ignore the eslint for this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    hasBeenPrompted: boolean;
    role: UserProps["role"];
    userId: string | undefined;
    verificationStatus: VerificationRequestStatusDTO;
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    ...authConfig.callbacks,
    jwt: async ({ user, token, trigger, session }) => {
      if (user) {
        const verificationRequestRepo = new PrismaVerificationRequestRepo();
        const getStudentVerificationStatusUseCase =
          new GetStudentVerificationStatusUseCase(verificationRequestRepo);
        token.verificationStatus =
          await getStudentVerificationStatusUseCase.execute(user.id);

        token.hasBeenPrompted = !!user.hasBeenPrompted;
        token.userId = user.id;
        token.role = user.role;
      }

      if (trigger === "update" && session?.hasBeenPrompted !== undefined) {
        token.hasBeenPrompted = session.hasBeenPrompted;
      }

      return token;
    },
  },
});
