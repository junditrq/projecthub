"use client";
import { signIn } from "next-auth/react";
import SignInButton from "./sign-in-button";

const SignInButtonClient = () => {
  return (
    <SignInButton
      onClick={() => {
        signIn("google");
      }}
    />
  );
};

export default SignInButtonClient;
