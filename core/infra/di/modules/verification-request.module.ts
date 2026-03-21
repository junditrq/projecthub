import { PrismaVerificationRequestRepo } from "../../repos/prisma/verification-request.repo";
import { createAppModule } from "../registry";

export const createVerificationRequestModule = () => {
  const verificationRequestModule = createAppModule();

  verificationRequestModule
    .bind("IVerificationRequestRepo")
    .toClass(PrismaVerificationRequestRepo);

  return verificationRequestModule;
};
