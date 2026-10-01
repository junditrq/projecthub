import { z } from 'zod';
import { SeedSpecializationSchema } from './specialization.schema';
import { SeedAcademicYearSchema } from './academic-year.schema';
import { SeedYearLevelSchema } from './year-level.schema';

export const SeedStudentSchema = z.object({
  name: z.string().trim().min(1, { message: 'Student name cannot be empty' }),
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
