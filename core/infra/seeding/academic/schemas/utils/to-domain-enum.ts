import { z } from 'zod';
import { SeedSpecializationSchema } from '../specialization.schema';
import { SeedYearLevelSchema } from '../year-level.schema';

export const PathParamToEnum = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (typeof val === 'string' ? val.toUpperCase() : val), schema);

export const ParseSpecializationPath = PathParamToEnum(SeedSpecializationSchema);
export const ParseYearLevelPath = PathParamToEnum(SeedYearLevelSchema);
