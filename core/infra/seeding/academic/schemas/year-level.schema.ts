import z from 'zod';
import { YearLevel } from '../../../orm/prisma/generated';

export const SeedYearLevelSchema = z.enum(YearLevel);

export type SeedYearLevelType = z.infer<typeof SeedYearLevelSchema>;
