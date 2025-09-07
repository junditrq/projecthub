import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip";

const ContributorAvatar = ({
	avatarUrl,
	name,
	id,
}: {
	avatarUrl: string;
	name: string;
	id: string;
}) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={"#"}
					className="relative z-10 focus:outline-none focus:ring-ring/50 focus:ring-1 focus:ring-offset-2 focus:border-ring focus:ring-offset-transparent transition-all rounded-full   group"
				>
					<div className="group-hover:ring-offset-2  group-hover:ring-offset-ring group-hover:ring-ring group-hover:ring-1 w-full h-full group-hover:ring-inset absolute inset-0 z-10 transition-all  group-hover:border-ring rounded-full "></div>
					<Avatar className="w-12 h-12 ">
						<AvatarImage
							asChild={true}
							src={avatarUrl}
							className="group-hover:scale-90 transition-all"
							alt={name}
							width={48}
							height={48}
						>
							<Image
								src={avatarUrl}
								className="group-hover:scale-90 transition-all"
								alt={name}
								width={48}
								height={48}
							/>
						</AvatarImage>
					</Avatar>
				</Link>
			</TooltipTrigger>
			<TooltipContent side="bottom">{name}</TooltipContent>
		</Tooltip>
	);
};
export default ContributorAvatar;
