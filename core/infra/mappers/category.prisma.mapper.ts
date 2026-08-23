import { Category as PrismaCategory } from '@/app/generated/prisma';
import { Category } from '@/core/domain/entities/category.entity';

export class PrismaCategoryMapper {
  static toDomain(prismaCategory: PrismaCategory): Category {
    return {
      id: prismaCategory.id,
      name: prismaCategory.name,
      slug: prismaCategory.slug,
    };
  }
}
