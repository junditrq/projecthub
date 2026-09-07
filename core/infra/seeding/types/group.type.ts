import { z } from 'zod';
import { subjectNames } from '../data/subjects';
import { specializations } from '../data/specialization';

export const seedSpecializationSchema = z.enum(specializations);

export const seedSubjectNameSchema = z.enum(subjectNames);

export const seedGroupSchema = z.object({
  projectIdea: z.string(),
  students: z.array(z.string()),
});

export const seedGroupsFileSchema = z.object({
  academicYear: z.string(),
  subjectName: seedSubjectNameSchema,
  specialization: seedSpecializationSchema,
  groups: z.array(seedGroupSchema),
});

export type SeedSpecialization = z.infer<typeof seedSpecializationSchema>;
export type SeedSubjectName = z.infer<typeof seedSubjectNameSchema>;
export type SeedGroup = z.infer<typeof seedGroupSchema>;
export type SeedGroupsFile = z.infer<typeof seedGroupsFileSchema>;
