import { Button } from "../ui/button";

interface OAuthButtonProps {
  action: () => Promise<void>;
  children: React.ReactNode;
}

const OAuthButton = ({ action, children }: OAuthButtonProps) => {
  return (
    <form action={action}>
      <Button
        variant={"secondary"}
        className="cursor-pointer rounded-full !px-6 !py-5 font-bold tracking-wide uppercase italic"
      >
        {children}
      </Button>
    </form>
  );
};
export default OAuthButton;
