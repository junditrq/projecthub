import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { cache } from "react";
import "server-only";

export const requiresAuth = cache(async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/?session=expired");
  }

  return session.user;
});
