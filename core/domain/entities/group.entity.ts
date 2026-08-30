import { Specialization } from './specialization.enum';

export interface Group {
  id: string;
  projectIdeaId: string;
  academicYearId: string;
  subjectId: string;
  specialization: Specialization;
}
