"use client";

import { markUserAsPromptedAction } from "@/app/(app)/actions";
import ActionButton from "@/components/buttons/oauth-button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const InitialUserDialog = () => {
  const [open, setOpen] = useState(false);
  const { status, data, update } = useSession();

  useEffect(() => {
    if (status === "loading" || status === "unauthenticated" || !data?.user)
      return;
    if (!data.user.hasBeenPrompted) {
      setOpen(true);
    }
  }, [data?.user, status]);

  const handleOpenChange = async (open: boolean) => {
    setOpen(open);
    if (open === false) {
      const { serverError } = await markUserAsPromptedAction();

      if (serverError) {
        console.error(serverError);
      }

      // We don't care if the db updates or not the user has been prompted but the
      // request to set the flag has failed
      await update({
        hasBeenPrompted: true,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
    </Dialog>
  );
};
export default InitialUserDialog;
