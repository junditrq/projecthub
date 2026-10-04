import { ICategoryRepo } from '@/core/domain/repos/category.repo';
import { CategoryDTO } from '../../dtos/category.dto';
import { CategoryDTOMapper } from '../../mappers/category.mapper';

export class GetCategoriesUseCase {
  constructor(private readonly _categoryRepo: ICategoryRepo) {}

  public async execute(): Promise<CategoryDTO[]> {
    const categories = await this._categoryRepo.findAll();
    return categories.map(CategoryDTOMapper.toDTO);
  }
}
