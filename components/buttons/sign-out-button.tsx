"use client";
import { signOut } from "next-auth/react";
import ActionButton from "./oauth-button";

const SignOutButton = () => {
  return (
    <ActionButton onClick={() => signOut({ redirectTo: "/" })}>
      Sign Out
    </ActionButton>
  );
};

export default SignOutButton;
