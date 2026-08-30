export enum ProjectRepoType {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  MOBILE = 'MOBILE',
  MONOREPO = 'MONOREPO',
  AI = 'AI',
}

export interface ProjectRepo {
  id: string;
  type: ProjectRepoType;
  projectId: string;
  url: string;
  contributorStudentIds: string[];
}
