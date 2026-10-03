import { createHash } from 'crypto';
import { YearLevel } from '@/core/domain/entities/subject.entity';
import { normalizeArabicName } from '@/core/domain/utils/normalize-arabic-name.util';
import { SeedGroup } from '../academic/schemas/groups-file.schema';
import { SeedSubjectSlug } from '../academic/schemas/subject.schema';
import { Specialization } from '@/core/domain/entities/specialization.enum';

// we don't care much about the project idea cause we can't have different project ideas
// for the same group (group of students)
export type GroupIdentityInput = Pick<SeedGroup, 'students'>;

export type GroupIdentityScope = {
  academicYear: string;
  yearLevel: YearLevel;
  specialization: Specialization;
  subjectSlug: SeedSubjectSlug;
};

export const hashGroup = (group: GroupIdentityInput, scope: GroupIdentityScope) => {
  const { academicYear, yearLevel, specialization, subjectSlug } = scope;

  const sortedStudents = group.students
    .map((student) => normalizeArabicName(student))
    .sort()
    .join('|');

  return createHash('sha256')
    .update(`${sortedStudents}|${academicYear}|${yearLevel}|${specialization}|${subjectSlug}`)
    .digest(`hex`);
};
