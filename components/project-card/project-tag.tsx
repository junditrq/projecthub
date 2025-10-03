import Link from "next/link";
import { Badge } from "../ui/badge";

// we can use the id later on to generate the link which we'll navigate to
// once we think about it
const ProjectTag = ({ name }: { name: string }) => {
  return (

    <Link
      href=""
      className="focus:ring-ring/50 focus:border-ring rounded-full leading-[1.25rem] transition-all focus:ring-1 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
    >
      <Badge
        variant="secondary"
        className="text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-2.5 py-0 leading-[1.25rem] lowercase transition-colors"
      >
        # {name}
      </Badge>
    </Link>
  );
};
export default ProjectTag;
