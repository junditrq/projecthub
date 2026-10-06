import { CreateVerificationRequestDTO } from '@/core/application/dtos/verification-request.dto';
import z from 'zod';

export const CollegeIdSchema = z
  .string()
  .trim()
  .regex(/^\d{10}$/, { message: 'collegeId must be exactly 10 digits' });

export const CreateVerificationRequestSchema = z.object({
  collegeId: CollegeIdSchema,
  collegeIdFileKey: z.string().min(1, 'College ID is required'),
}) satisfies z.ZodType<Omit<CreateVerificationRequestDTO, 'userId'>>;

export type CreateVerificationRequestFormData = z.infer<typeof CreateVerificationRequestSchema>;
