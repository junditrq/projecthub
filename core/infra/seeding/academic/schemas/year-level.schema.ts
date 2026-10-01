import z from 'zod';
import { YearLevel } from '@/core/domain/entities/subject.entity';

export const SeedYearLevelSchema = z.enum(YearLevel);

export type SeedYearLevelType = z.infer<typeof SeedYearLevelSchema>;
