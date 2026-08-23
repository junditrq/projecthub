import Link from 'next/link';
import { ThemeToggle } from '../common/theme-toggle';
import { Button } from '../ui/button';
import NavbarAuthUI from './navbar-auth-ui';

const NavBar = () => {
  return (
    <nav className="border-b p-4">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            className="font-geist-mono text-foreground text-xl font-medium tracking-wide underline transition-all"
            variant={'link'}
            asChild
          >
            <Link href="/" className="">
              <span>ProjectHub</span>
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <NavbarAuthUI />
          <ThemeToggle variants={'ghost'} className="size-8 rounded-xl" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
