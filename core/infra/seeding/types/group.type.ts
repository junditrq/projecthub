import { z } from 'zod';
import { SeedSpecializationSchema } from './specialization.type';
import { SeedSubjectSlugSchema } from './subject.type';
import { SeedAcademicYearSchema } from './academic-year.type';

export const SeedGroupSchema = z.object({
  projectIdea: z.string(),
  students: z.array(z.string()),
});

export const SeedGroupsFileSchema = z.object({
  academicYear: SeedAcademicYearSchema,
  subjectSlug: SeedSubjectSlugSchema,
  specialization: SeedSpecializationSchema,
  groups: z.array(SeedGroupSchema),
});

export type SeedGroup = z.infer<typeof SeedGroupSchema>;
export type SeedGroupsFile = z.infer<typeof SeedGroupsFileSchema>;
