import { CategoryDTO } from '@/core/application/dtos/category.dto';
import container from '@/core/infra/di/container';

export const getCategories = async (): Promise<CategoryDTO[]> => {
  const getCategoriesUseCase = container.get('GetCategoriesUseCase');
  return await getCategoriesUseCase.execute();
};
