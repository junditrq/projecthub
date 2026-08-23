import { Group } from './group.entity';
import { Student } from './student.entity';
import { Like } from './like.entity';
import { Preview } from './preview.entity';
import { ProjectRepo } from './project-repo.entity';
import { Category } from './category.entity';
import { Tag } from './tag.entity';

export interface Project {
  id: string;
  name: string;
  desc?: string;
  thumbnailUrl?: string;
  group: Group;
  publisher: Student;
  likes: Like[];
  previews: Preview[];
  repos: ProjectRepo[];
  categories: Category[];
  tags: Tag[];
}
