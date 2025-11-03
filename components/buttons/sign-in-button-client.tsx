"use client";
import { signIn } from "next-auth/react";
import SignInButton from "./sign-in-button";
import { ShadcnButtonProps } from "../ui/button";

const SignInButtonClient = ({ ...props }: ShadcnButtonProps) => {
  return (
    <SignInButton
      {...props}
      onClick={() => {
        signIn("google");
      }}
    />
  );
};

export default SignInButtonClient;
