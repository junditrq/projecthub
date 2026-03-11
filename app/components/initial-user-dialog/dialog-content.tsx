import ActionButton from "@/components/buttons/oauth-button";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const VerificationDialogContent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Verify your account as a student?</DialogTitle>
        <DialogDescription className="mt-2">
          In order for you to be able to publish your own projects you need to
          be verified as a student first
        </DialogDescription>
        <DialogFooter className="mt-4">
          <ActionButton asChild>
            <Link href={"/settings/student-verification"}>
              Verfiy as Student
              <ArrowRight />
            </Link>
          </ActionButton>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  );
};

export default VerificationDialogContent;
