import { z } from 'zod';

export const SeedAcademicYearSchema = z
  .string()
  .regex(/^\d{4}-\d{4}$/)
  .refine(
    (val) => {
      const [startYear, endYear] = val.split('-').map(Number);
      return endYear === startYear + 1;
    },
    {
      message:
        'Invalid academic year format. Expected format: YYYY-YYYY where the second year is the first year plus one.',
    }
  );
export type SeedAcademicYear = z.infer<typeof SeedAcademicYearSchema>;
