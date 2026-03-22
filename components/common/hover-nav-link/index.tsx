import { Button, ShadcnButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface HoverNavLinkProps {
  children?: React.ReactNode;
  href: string;
  isActive?: boolean;
  className?: ShadcnButtonProps["className"];
}

const HoverNavLink = ({
  children,
  isActive,
  className,
  ...props
}: HoverNavLinkProps) => {
  return (
    <Button
      asChild
      className={cn(
        "group relative inline-block overflow-hidden rounded-md px-2 transition-all hover:no-underline sm:px-4",
        className,
      )}
      variant={"link"}
    >
      <Link {...props}>
        <span
          className={cn(
            "text-primary group-hover:text-primary-foreground relative z-10 rounded-md transition-all focus:outline-none",
          )}
        >
          {children}
        </span>
        <span
          className={cn(
            "bg-primary absolute bottom-0 left-0 z-0 w-full rounded-md transition-all group-hover:h-full",
            isActive ? "h-0.5" : "h-0",
          )}
        ></span>
      </Link>
    </Button>
  );
};

export default HoverNavLink;
