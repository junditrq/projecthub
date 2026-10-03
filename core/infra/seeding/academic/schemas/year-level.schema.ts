import z from 'zod';
import { YearLevel } from '@/core/domain/enums/year-level.enum';

export const SeedYearLevelSchema = z.enum(YearLevel);

export type SeedYearLevelType = z.infer<typeof SeedYearLevelSchema>;
