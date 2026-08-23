import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { avatarFallback } from '@/lib/utils';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

const ContributorAvatar = ({
  avatarUrl,
  name,
}: {
  avatarUrl: string | undefined;
  name: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          variant={'ghost'}
          className="group relative z-10 size-13 rounded-full border p-0 transition-all"
        >
          <Link href={'#'}>
            <div className="group-hover:ring-offset-ring group-hover:ring-ring group-hover:border-ring absolute inset-0 z-10 h-full w-full rounded-full transition-all group-hover:ring-1 group-hover:ring-offset-2 group-hover:ring-inset"></div>
            <Avatar className="size-full rounded-full">
              <AvatarImage
                src={avatarUrl}
                className="rounded-full transition-all group-hover:scale-90"
                alt={name}
                width={48}
                height={48}
              />
              <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">{name}</TooltipContent>
    </Tooltip>
  );
};
export default ContributorAvatar;
