import { authConfig } from "@/auth.config";
import prisma from "@/core/infra/orm/prisma.client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { type DefaultSession } from "next-auth";
import { UserProps } from "./core/domain/entities/user.entity";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      hasBeenPrompted: boolean;
      role: UserProps["role"];
      name: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    hasBeenPrompted: boolean;
    role: UserProps["role"];
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
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
});
