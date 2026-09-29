import { z } from 'zod';
import { SeedSpecializationSchema } from './specialization.type';
import { SeedAcademicYearSchema } from './academic-year.type';
import { SeedYearLevelSchema } from './year-level.type';

export const SeedStudentSchema = z.object({
  name: z.string(),
  fatherName: z.string(),
  collegeId: z.coerce.string(),
});

export const SeedStudentsFileSchema = z.object({
  academicYear: SeedAcademicYearSchema,
  specialization: SeedSpecializationSchema,
  yearLevel: SeedYearLevelSchema,
  students: z.array(SeedStudentSchema),
});

export type SeedStudent = z.infer<typeof SeedStudentSchema>;
export type SeedStudentsFile = z.infer<typeof SeedStudentsFileSchema>;
