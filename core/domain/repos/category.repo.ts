import { Category } from '@/core/domain/entities/category.entity';

export interface ICategoryRepo {
  findAll(): Promise<Category[]>;
}
