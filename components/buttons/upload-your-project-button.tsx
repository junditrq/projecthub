import { ArrowRight } from "lucide-react";
import Link from "next/link";
import NeedsAuthButton from "./needs-auth-button";
import NeedsVerificationButton from "./needs-verification-button";

const UploadYourProjectButton = () => {
  return (
    <NeedsVerificationButton asChild>
      <NeedsAuthButton variant={"default"} asChild>
        <Link href={"/create-project"}>
          Upload{" "}
          <span className="hidden min-[28rem]:inline">
            your <span className="hidden sm:inline">own</span> Project
          </span>
          <span className="inline min-[28rem]:hidden">Yours</span>
          <ArrowRight />
        </Link>
      </NeedsAuthButton>
    </NeedsVerificationButton>
  );
};
export default UploadYourProjectButton;
