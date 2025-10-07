import { Group } from "./group.entity";
import { Project } from "./project.entity";
import { ProjectRepo } from "./project-repo.entity";
import { User } from "./user.entity";

export interface Student {
  id: string;
  arabicName: string;
  group: Group;
  user?: User;
  publishedProjects: Project[];
  repos: ProjectRepo[];
}
