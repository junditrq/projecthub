import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const UploadYourProjectButton = () => {
  return (
    <Button
      variant={"default"}
      className="flex cursor-pointer gap-2 border-2"
      asChild
    >
      <Link href={"/create-project"}>
        Upload your <span className="hidden sm:inline">own</span> Project
        <ArrowRight />
      </Link>
    </Button>
  );
};
export default UploadYourProjectButton;
