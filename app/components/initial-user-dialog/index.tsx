"use client";

import { markUserAsPromptedAction } from "@/app/(app)/actions";
import { Dialog } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import VerificationDialogContent from "./dialog-content";

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
      <VerificationDialogContent />
    </Dialog>
  );
};
export default InitialUserDialog;
