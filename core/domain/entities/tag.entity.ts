import { Project } from "./project.entity";

export interface Tag {
  id: string;
  name: string;
  slug: string;
  projects: Project[];
}
