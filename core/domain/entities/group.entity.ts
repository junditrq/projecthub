import { ProjectIdea } from "./projectIdea.entity";
import { Project } from "./project.entity";
import { Student } from "./student.entity";

export interface Group {
  id: string;
  projectIdea?: ProjectIdea;
  projects: Project[];
  students: Student[];
}
