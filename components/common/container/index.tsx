import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto flex grow flex-col md:px-10 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
