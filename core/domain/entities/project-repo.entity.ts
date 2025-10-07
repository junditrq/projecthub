import { Project } from './project.entity';
import { Student } from './student.entity';

export interface ProjectRepo {
  id: string;
  type: ProjectRepoType;
  url: string;
  project: Project;
  contributors: Student[];
}

export enum ProjectRepoType {
  frontend = "frontend",
  backend = "backend",
  mobile = "mobile",
  monorepo = "monorepo",
}
