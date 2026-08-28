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
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  MOBILE = 'MOBILE',
  MONOREPO = 'MONOREPO',
  AI = 'AI',
}
