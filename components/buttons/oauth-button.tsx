"use client";
import { cn } from "@/lib/utils";
import { Button, ShadcnButtonProps } from "../ui/button";

const ActionButton = ({ children, className, ...props }: ShadcnButtonProps) => {
  return (
    <Button
      variant={"secondary"}
      className={cn(
        "cursor-pointer rounded-full font-bold tracking-wide uppercase italic",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ActionButton;
