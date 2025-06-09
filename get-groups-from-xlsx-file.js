import { readFile, utils } from "xlsx";
import { writeFile } from "fs";

const workbook = readFile("3rd-year-projects-list.xlsx");
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const raw_data = utils.sheet_to_json(worksheet);
const categoryMap = {
	ويب: "web",
	موبايل: "mobile",
};

let mergedProjectIdea = "";
const groups = raw_data.map((r) => {
	const { projectIdea, category, ...rest } = r;
	const c = category.split(/\s*\+\s*/);

	mergedProjectIdea = projectIdea ?? mergedProjectIdea;

	return {
		projectIdea: mergedProjectIdea,
		categories: c.map((cat) => categoryMap[cat]),
		publishers: [...Object.values(rest)],
	};
});

writeFile("./groups.json", JSON.stringify(groups), () => {});
