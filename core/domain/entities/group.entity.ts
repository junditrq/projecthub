import { Project } from './project.entity';
import { ProjectIdea } from './projectIdea.entity';
import { Student } from './student.entity';

export interface Group {
  id: string;
  projectIdea?: ProjectIdea;
  projects: Project[];
  students: Student[];
}
