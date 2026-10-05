import { CreateVerificationRequestUseCase } from '@/core/application/usecases/verification-requests/create-verification-request.usecase';
import { GetUserVerificationStatusUseCase } from '@/core/application/usecases/verification-requests/get-user-verification-status.usecase';
import { PrismaVerificationRequestRepo } from '../../repos/prisma/verification-request.repo';
import { createAppModule } from '../registry';

export const createVerificationRequestModule = () => {
  const verificationRequestModule = createAppModule();

  verificationRequestModule.bind('IVerificationRequestRepo').toClass(PrismaVerificationRequestRepo);

  verificationRequestModule
    .bind('CreateVerificationRequestUseCase')
    .toClass(CreateVerificationRequestUseCase, [
      'IStudentRepo',
      'IUserRepo',
      'IVerificationRequestRepo',
      'IStorageService',
    ]);

  verificationRequestModule
    .bind('GetUserVerificationStatusUseCase')
    .toClass(GetUserVerificationStatusUseCase, ['IVerificationRequestRepo']);

  return verificationRequestModule;
};
