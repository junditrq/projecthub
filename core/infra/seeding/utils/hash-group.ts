import { createHash } from 'crypto';
import { YearLevel } from '../../orm/prisma/generated';
import { SeedGroup } from '../types/group.type';
import { normalizeArabicName } from '@/core/domain/utils/normalize-arabic-name.util';
import { SeedAcademicYear } from '../types/academic-year.type';
import { SeedSpecialization } from '../types/specialization.type';
import { SeedSubjectSlug } from '../types/subject.type';

// we don't care much about the project idea cause we can't have different project ideas
// for the same group (group of students)
export type GroupIdentityInput = Pick<SeedGroup, 'students'>;

export type GroupIdentityScope = {
  academicYear: SeedAcademicYear;
  yearLevel: YearLevel;
  specialization: SeedSpecialization;
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
