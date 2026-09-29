import { Subject } from '../entities/subject.entity';

export interface ISubjectRepo {
  findBySlug(slug: string): Promise<Subject | null>;
}
