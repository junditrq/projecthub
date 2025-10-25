import OAuthButton from "@/components/buttons/oath-button";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="border-b p-4">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-geist-mono text-xl font-medium tracking-wide underline"
          >
            <span className="block sm:hidden">P1</span>
            <span className="hidden sm:block">ProjectHub</span>
          </Link>
        </div>
        <OAuthButton />
      </div>
    </nav>
  );
};
export default NavBar;
