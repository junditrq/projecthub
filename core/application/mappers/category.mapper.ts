import { Category } from '@/core/domain/entities/category.entity';
import { CategoryDTO } from '../dtos/category.dto';

export class CategoryDTOMapper {
  static toDTO(category: Category): CategoryDTO {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
    };
  }
}
