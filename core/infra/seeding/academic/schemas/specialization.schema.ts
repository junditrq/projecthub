import { z } from 'zod';
import { Specialization } from '../../../orm/prisma/generated';

export const SeedSpecializationSchema = z.enum(Specialization);

export type SeedSpecialization = z.infer<typeof SeedSpecializationSchema>;
