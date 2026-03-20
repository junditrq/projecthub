"use server";

import { GetStudentVerificationStatusUseCase } from "@/core/application/usecases/user/get-student-verificaiton-status.usecase";
import { PrismaVerificationRequestRepo } from "@/core/infra/repos/prisma/verification-request.repo";
import { authActionClient } from "@/lib/safe-action";

export const getVerificationStatusAction = authActionClient.action(
  async ({ ctx: { user } }) => {
    const verificationRequestRepo = new PrismaVerificationRequestRepo();
    const getStudentVerificationStatusUseCase =
      new GetStudentVerificationStatusUseCase(verificationRequestRepo);
    return await getStudentVerificationStatusUseCase.execute(user.id);
  },
);
