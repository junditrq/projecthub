import Link from "next/link";
import { Button } from "../ui/button";
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
        <Button
          variant={"secondary"}
          className="cursor-pointer rounded-full !px-5 font-bold uppercase italic"
        >
          <span>log in with google</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            fill="currentColor"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};
export default NavBar;
