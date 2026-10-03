import { z } from 'zod';
import { YearLevel } from '@/core/infra/orm/prisma/generated';

export const YEAR_LEVEL_PATH_PARTS = Object.values(YearLevel).map((v) => v.toLowerCase());
export const YearLevelPathPartSchema = z.enum(YEAR_LEVEL_PATH_PARTS, {
  error: 'Invalid year level. Expected one of: ' + YEAR_LEVEL_PATH_PARTS.join(', '),
});

export type YearLevelPathPart = z.infer<typeof YearLevelPathPartSchema>;
