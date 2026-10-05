import { MarkUserAsPromptedUseCase } from '@/core/application/usecases/user/mark-user-as-prompted.usecase';
import { PrismaUserRepo } from '../../repos/prisma/user.repo';
import { createAppModule } from '../registry';

export const createUserModule = () => {
  const userModule = createAppModule();

  userModule.bind('IUserRepo').toClass(PrismaUserRepo);

  userModule.bind('MarkUserAsPromptedUseCase').toClass(MarkUserAsPromptedUseCase, ['IUserRepo']);

  return userModule;
};
