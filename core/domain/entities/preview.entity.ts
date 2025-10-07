import { Project } from "./project.entity";

export interface Preview {
  id: string;
  url: string;
  project: Project;
}
