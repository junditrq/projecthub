import Link from "next/link";
const ProjectCategory = ({ name, id }: { name: string; id: string }) => {
	return (
		<span
			className="rounded-md  relative group inline-block overflow-hidden focus-within:ring-ring/50 focus-within:ring-1 focus-within:ring-offset-2 focus-within:border-ring focus-within:ring-offset-transparent transition-all   "
			key={id}
		>
			<Link
				href="#"
				className="relative z-10 text-sm text-primary group-hover:text-primary-foreground transition-all px-2 focus:outline-none rounded-md"
			>
				{name}
			</Link>
			<span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transition-all group-hover:h-full z-0 rounded-md"></span>
		</span>
	);
};
export default ProjectCategory;
