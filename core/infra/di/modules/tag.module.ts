import { GetTagsUseCase } from '@/core/application/usecases/tags/get-tags.usecase';
import { PrismaTagRepo } from '../../repos/prisma/tag.repo';
import { createAppModule } from '../registry';

export const createTagModule = () => {
  const tagModule = createAppModule();

  tagModule.bind('ITagRepo').toClass(PrismaTagRepo);
  tagModule.bind('GetTagsUseCase').toClass(GetTagsUseCase, ['ITagRepo']);

  return tagModule;
};
