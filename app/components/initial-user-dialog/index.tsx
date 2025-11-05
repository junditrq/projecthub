"use client";

import { markUserAsPromptedAction } from "@/app/actions";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
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
    if (open === false) {
      const result = await markUserAsPromptedAction();

      if (result.success) {
        await update({
          hasBeenPrompted: true,
        });
      } else {
        console.error(result.error || "Failed to update");
      }
    }
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogTitle>Wanna verify?</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
export default InitialUserDialog;
