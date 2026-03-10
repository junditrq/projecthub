import { auth } from "@/auth";
import SignOutButton from "@/components/buttons/sign-out-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { avatarFallback } from "@/lib/utils";
import { UserRound } from "lucide-react";
import Link from "next/link";

const AvatarDropdown = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return null;
  }

  const { image, name } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="aspect-square rounded-full"
          size={"icon"}
          variant={"outline"}
          asChild
        >
          <Avatar>
            {image && <AvatarImage src={image} alt={name} />}

            <AvatarFallback className="rounded-lg">
              {avatarFallback(user.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              {image && <AvatarImage src={image} alt={name} />}
              <AvatarFallback className="rounded-lg">
                {avatarFallback(name)}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={"/settings"}>
                <UserRound />
                Profile Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <SignOutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
