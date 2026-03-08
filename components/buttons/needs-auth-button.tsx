"use client";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button, ShadcnButtonProps } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import SignInButtonClient from "./sign-in-button-client";

const NeedsAuthButton = ({
  onClick,
  children,
  className,
  skeleton,
  disabled,
  ...props
}: ShadcnButtonProps & {
  skeleton?: React.ReactNode;
}) => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  if (status === "loading" && skeleton) return skeleton;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={(e) => {
          if (disabled || status === "loading") {
            e.preventDefault();
            return;
          }

          if (status !== "authenticated") {
            e.preventDefault();
            setOpen(true);
            return;
          } else if (onClick) {
            onClick(e);
          }
        }}
        className={cn(
          {
            "pointer-events-none opacity-50": disabled || status === "loading",
          },
          className,
        )}
        disabled={disabled || status === "loading"}
        {...props}
      >
        {children}
      </Button>
      <DialogContent className="w-[90%] justify-items-center text-center md:min-w-2xl">
        <DialogTitle className="text-xl font-bold">
          Not logged in ❗{" "}
        </DialogTitle>
        <p className="mt-4 mb-6 max-w-[40ch]">
          You need to be logged in before you can perform this action
        </p>
        <SignInButtonClient className="!px-8 !py-6" />
      </DialogContent>
    </Dialog>
  );
};

export default NeedsAuthButton;
