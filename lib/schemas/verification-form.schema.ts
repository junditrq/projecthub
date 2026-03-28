import { CreateVerificationRequestDTO } from "@/core/application/dtos/verification-request.dto";
import z from "zod";

export const CreateVerificationRequestSchema = z.object({
  arabicName: z.string().min(1, "Name is required").trim(),
  collegeIdFileKey: z.string().min(1, "College ID is required"),
}) satisfies z.ZodType<Omit<CreateVerificationRequestDTO, "userId">>;

export type CreateVerificationRequestFormData = z.infer<
  typeof CreateVerificationRequestSchema
>;
