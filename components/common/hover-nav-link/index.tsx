import { cn } from "@/lib/utils";
import Link from "next/link";

interface HoverNavLinkProps {
  children?: React.ReactNode;
  href: string;
  isActive?: boolean;
  classNames?: {
    link?: React.HTMLAttributes<HTMLAnchorElement>["className"];
    overlay?: React.HTMLAttributes<HTMLSpanElement>["className"];
    text?: React.HTMLAttributes<HTMLSpanElement>["className"];
  };
}

const HoverNavLink = ({
  children,
  isActive,
  classNames,
  ...props
}: HoverNavLinkProps) => {
  return (
    <Link
      className={cn(
        "group focus-within:ring-ring/50 focus-within:border-ring relative inline-block overflow-hidden rounded-md transition-all focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
        classNames?.link,
      )}
      {...props}
    >
      <span
        className={cn(
          "text-primary group-hover:text-primary-foreground relative z-10 rounded-md px-2 text-sm transition-all focus:outline-none",
          classNames?.text,
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "bg-primary absolute bottom-0 left-0 z-0 w-full rounded-md transition-all group-hover:h-full",
          { "h-0.5": isActive },
          classNames?.overlay,
        )}
      ></span>
    </Link>
  );
};

export default HoverNavLink;
