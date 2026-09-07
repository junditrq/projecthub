import { z } from 'zod';

export const seedStudentSchema = z.object({
  name: z.string(),
  fatherName: z.string(),
  collegeId: z.number().int().positive(),
});

export const seedStudentsSchema = z.object({
  students: z.array(seedStudentSchema),
});

export type SeedStudent = z.infer<typeof seedStudentSchema>;
export type SeedStudentsFile = z.infer<typeof seedStudentsSchema>;
