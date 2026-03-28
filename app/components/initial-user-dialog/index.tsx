"use client";

import { Dialog } from "@/components/ui/dialog";
import { markUserAsPromptedAction } from "@/lib/actions/user.actions";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import VerificationDialogContent from "./dialog-content";

const InitialUserDialog = () => {
  const [open, setOpen] = useState(false);
  const { status, data, update } = useSession();
  const { execute } = useAction(markUserAsPromptedAction);

  useEffect(() => {
    if (status === "loading" || status === "unauthenticated" || !data?.user)
      return;
    if (!data.user.hasBeenPrompted) {
      setOpen(true);
      execute();
      update({
        hasBeenPrompted: true,
      });
    }
  }, [data?.user, status, execute, update]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VerificationDialogContent />
    </Dialog>
  );
};
export default InitialUserDialog;
