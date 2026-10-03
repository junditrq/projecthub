import { z } from 'zod';
import { Specialization } from '@/core/domain/entities/specialization.enum';

export const SeedSpecializationSchema = z.enum(Specialization);

export type SeedSpecialization = z.infer<typeof SeedSpecializationSchema>;
