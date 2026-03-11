import { cn } from "@/lib/utils";

const NavTabBar = ({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div
      {...props}
      className={cn(
        "ms-auto flex h-full flex-nowrap gap-6 overflow-x-auto p-2 *:shrink-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default NavTabBar;
