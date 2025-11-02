import { signOut } from "@/auth";
import OAuthButton from "./oath-button";

const SignOutButton = () => {
  return (
    <OAuthButton
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      Sign Out
    </OAuthButton>
  );
};

export default SignOutButton;
