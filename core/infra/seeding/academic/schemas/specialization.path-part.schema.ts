import { z } from 'zod';
import { Specialization } from '@/core/infra/orm/prisma/generated';

export const SPECIALIZATION_PATH_PARTS = Object.values(Specialization).map((s) => s.toLowerCase());
export const SpecializationPathPartSchema = z.enum(SPECIALIZATION_PATH_PARTS, {
  error: 'Invalid specialization. Expected one of: ' + SPECIALIZATION_PATH_PARTS.join(', '),
});

export type SpecializationPathPart = z.infer<typeof SpecializationPathPartSchema>;
