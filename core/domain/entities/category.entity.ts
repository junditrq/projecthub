import { Project } from "./project.entity";

export interface Category {
  id: string;
  name: string;
  slug: string;
  projects: Project[];
}
