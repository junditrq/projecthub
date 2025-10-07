import { Group } from './group.entity';

export interface ProjectIdea {
  id: string;
  name: string;
  year: number;
  slug: string;
  groups: Group[];
}
