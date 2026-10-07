import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

// we can use the id later on to generate the link which we'll navigate to
// once we think about it
const ProjectTag = ({ name }: { name: string }) => {
  return (
    <Button asChild className="h-min rounded-full border-0 p-0" variant={'secondary'} size={'lg'}>
      <Link href={'#'}>
        <Badge
          variant="secondary"
          className="text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-2.5 py-0 leading-5 font-medium lowercase transition-colors"
        >
          # {name}
        </Badge>
      </Link>
    </Button>
  );
};
export default ProjectTag;
