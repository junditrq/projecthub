import { Project } from './project.entity';
import { User } from './user.entity';

export interface Like {
  id: string;
  project: Project;
  user: User;
}
