import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { avatarFallback } from '@/lib/utils';
import { LogOut, UserRound } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const AvatarDropdown = ({ user }: { user: Session['user'] }) => {
  const { image, name } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="aspect-square size-9 rounded-full" size={'icon'} variant={'outline'}>
          <Avatar className="size-full">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={'bottom'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-4 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{name}</span>
              {user.email && <span className="truncate text-xs">{user.email}</span>}
            </div>
          </div>
        </DropdownMenuLabel>

        <>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={'/settings'}>
                <UserRound />
                Profile Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => signOut({ redirectTo: '/' })}>
            <LogOut />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
