import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  // and here we can add more stuff and extend the config
  // specially overriding the providers logic
  adapter: PrismaAdapter(prisma),
});
