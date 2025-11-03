"use client";
import { signOut } from "next-auth/react";
import OAuthButton from "./oauth-button";

const SignOutButton = () => {
  return <OAuthButton onClick={() => signOut()}>Sign Out</OAuthButton>;
};

export default SignOutButton;
