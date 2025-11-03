import { ArrowRight } from "lucide-react";
import Link from "next/link";
import NeedsAuthButton from "./needs-auth-button";

const UploadYourProjectButton = () => {
  return (
    <NeedsAuthButton
      variant={"default"}
      className="flex cursor-pointer gap-2 border-2"
      asChild
    >
      <Link href={"/create-project"}>
        Upload your <span className="hidden sm:inline">own</span> Project
        <ArrowRight />
      </Link>
    </NeedsAuthButton>
  );
};
export default UploadYourProjectButton;
