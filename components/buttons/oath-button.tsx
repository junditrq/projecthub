import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface OAuthButtonProps {
  action: () => Promise<void>;
  children: React.ReactNode;
  className?: HTMLButtonElement["className"];
}

const OAuthButton = ({ action, children, className }: OAuthButtonProps) => {
  return (
    <form action={action}>
      <Button
        variant={"secondary"}
        className={cn(
          "cursor-pointer rounded-full !px-6 !py-5 font-bold tracking-wide uppercase italic",
          className,
        )}
      >
        {children}
      </Button>
    </form>
  );
};
export default OAuthButton;
