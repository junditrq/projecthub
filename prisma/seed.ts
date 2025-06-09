import { PrismaClient } from "@/app/generated/prisma";
import groups from "@/groups-2025";
import slugify from "slugify";

const prisma = new PrismaClient();

const mySlugify = (string: string) =>
	slugify(string, {
		lower: true,
	});

const tags = [
	"Spring Boot",
	"React.js",
	"Flutter Mobile",
	"Laravel",
	"Node.js",
	"Django",
	"PHP",
	"JavaScript",
	"Vue.js",
	"Next.js",
	"NestJS",
	"Express",
	"React Native",
	"ASP.NET",
	"Unity",
	"OpenCV",
	"Tauri",
	"Swift",
	"Java (Android)",
	"Livewire",
	"Tailwind CSS",
	"Blade",
	"Flutter Web",
];

const categories = ["Web", "Mobile"];

async function main() {
	await seedTags();
	await seedCategories();
	await seedGroups();
}

async function seedTags() {
	tags.forEach(async (tag) => {
		await prisma.tag.create({
			data: {
				name: tag,
				slug: mySlugify(tag),
			},
		});
	});
}

async function seedCategories() {
	categories.forEach(async (cat) => {
		await prisma.category.create({
			data: {
				name: cat,
				slug: mySlugify(cat),
			},
		});
	});
}

async function seedGroups() {
	const projectMap = new Map<string, any>();

	for (const group of groups) {
		const slug = mySlugify(group.projectIdea);

		let projectIdea = projectMap.get(slug);

		if (!projectIdea) {
			projectIdea = await prisma.projectIdea.create({
				data: {
					name: group.projectIdea,
					slug,
				},
			});
			projectMap.set(slug, projectIdea);
		}

		await prisma.group.create({
			data: {
				projectIdeaId: projectIdea.id,
				publishers: {
					create: group.publishers.map((p) => ({
						name: p,
						canPublish: true,
					})),
				},
			},
		});
	}

	console.log("seeding completed");
}

main();
