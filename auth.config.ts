import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {},
	callbacks: {},
	providers: [],
	trustHost: true,

} satisfies NextAuthConfig;
