import { z } from 'zod';
import { specializations } from '../data/specialization';

export const SeedSpecializationSchema = z.enum(specializations);

export type SeedSpecialization = z.infer<typeof SeedSpecializationSchema>;
