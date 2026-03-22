import { CreateVerificationRequestDTO } from "@/core/application/dtos/verification-request.dto";
import z from "zod";

export const CreateVerificationRequestSchema = z.object({
  userId: z
    .uuid({
      error: (iss) =>
        iss.input === undefined
          ? "userId is required"
          : "Invalid userId format",
    })
    .min(1, "userId is required")
    .trim(),
  arabicName: z.string().min(1, "Name is required").trim(),
  collegeIdFileKey: z.string().min(1, "College ID file is required"),
}) satisfies z.ZodType<CreateVerificationRequestDTO>;
