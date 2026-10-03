import { z } from 'zod';
import { SeedSpecializationSchema } from './specialization.schema';
import { SeedSubjectSlugSchema } from './subject.schema';
import { SeedAcademicYearSchema } from './academic-year.schema';

export const SeedGroupSchema = z.object({
  projectIdea: z.string().trim().min(1, { message: 'Project idea cannot be empty' }),
  students: z
    .array(z.string().trim().min(1, { message: 'Student name cannot be empty' }))
    .min(1, { message: 'A group must have at least one student' }),
});

export const SeedGroupsFileSchema = z.object({
  academicYear: SeedAcademicYearSchema,
  subjectSlug: SeedSubjectSlugSchema,
  specialization: SeedSpecializationSchema,
  groups: z.array(SeedGroupSchema),
});

export type SeedGroup = z.infer<typeof SeedGroupSchema>;
export type SeedGroupsFile = z.infer<typeof SeedGroupsFileSchema>;
