import Link from "next/link";
import { Badge } from "../ui/badge";

// we can use the id later on to generate the link which we'll navigate to
// once we think about it
const ProjectTag = ({ name, id }: { name: string; id: string }) => {
	return (
		<Link
			href=""
			className="rounded-full focus:outline-none leading-[1.25rem]  focus:ring-ring/50 focus:ring-1 focus:ring-offset-2 focus:border-ring focus:ring-offset-transparent transition-all"
		>
			<Badge
				variant="secondary"
				className="lowercase rounded-full py-0 px-2.5 leading-[1.25rem]  text-primary hover:bg-primary hover:text-primary-foreground transition-colors  "
			>
				# {name}
			</Badge>
		</Link>
	);
};
export default ProjectTag;
