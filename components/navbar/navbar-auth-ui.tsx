"use client";
import SignInButtonClient from "@/components/buttons/sign-in-button-client";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import AvatarDropdown from "./avatar-dropdown";

const NavbarAuthUI = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="size-9 rounded-full" />;
  }

  if (!session?.user) {
    return <SignInButtonClient />;
  }

  return <AvatarDropdown user={session.user} />;
};

export default NavbarAuthUI;
