import { auth } from "@/auth";
import Link from "next/link";
import SignInButtonServer from "../buttons/sign-in-button-server";
import { ThemeToggle } from "../common/theme-toggle";
import AvatarDropdown from "./avatar-dropdown";
const NavBar = async () => {
  const session = await auth();
  return (
    <nav className="border-b p-4">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-geist-mono text-xl font-medium tracking-wide underline"
          >
            <span>ProjectHub</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {!session?.user ? <SignInButtonServer /> : <AvatarDropdown />}
          <ThemeToggle variants={"ghost"} className="size-8 rounded-xl" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
