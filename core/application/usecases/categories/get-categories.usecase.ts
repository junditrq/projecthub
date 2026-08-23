import { ICategoryRepo } from '@/core/domain/repos/category.repo';
import { CategoryDTO } from '../../dtos/category.dto';
import { CategoryDTOMapper } from '../../mappers/category.mapper';
import { UseCaseResult } from '../../types/usecase-result.type';

export class GetCategoriesUseCase {
  private categoryRepo: ICategoryRepo;

  constructor(categoryRepo: ICategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async execute(): Promise<UseCaseResult<CategoryDTO[]>> {
    const categories = await this.categoryRepo.findAll();
    return { data: categories.map(CategoryDTOMapper.toDTO) };
  }
}
