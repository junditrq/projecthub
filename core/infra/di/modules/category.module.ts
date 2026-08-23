import { GetCategoriesUseCase } from '@/core/application/usecases/categories/get-categories.usecase';
import { PrismaCategoryRepo } from '../../repos/prisma/category.repo';
import { createAppModule } from '../registry';

export const createCategoryModule = () => {
  const categoryModule = createAppModule();

  // here we can check if we're in a test environment and bind mocks instead of real implementations
  // for now I'm not doing tests so I'll just bind the real implementations

  categoryModule.bind('ICategoryRepo').toClass(PrismaCategoryRepo);
  categoryModule.bind('GetCategoriesUseCase').toClass(GetCategoriesUseCase, ['ICategoryRepo']);

  return categoryModule;
};
