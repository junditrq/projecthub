import { Prisma } from "@/app/generated/prisma";
const projectCardProps = Prisma.validator<Prisma.ProjectDefaultArgs>()({
	select: {
		id: true,
		name: true,
		description: true,
		thumbnailUrl: true,
		categories: {
			select: {
				name: true,
				id: true,
			},
		},
		tags: {
			select: {
				name: true,
				id: true,
			},
		},
		_count: {
			select: {
				Likes: true,
			},
		},
	},
});

export type ProjectCardProps = Prisma.ProjectGetPayload<
	typeof projectCardProps
> & {
	contributors: {
		name: string;
		avatarUrl: string;
		id: string;
	}[];
};
