import { Tag as PrismaTag } from '@/core/infra/orm/prisma/generated';
import { Tag } from '@/core/domain/entities/tag.entity';

export class PrismaTagMapper {
  static toDomain(prismaTag: PrismaTag): Tag {
    return {
      id: prismaTag.id,
      name: prismaTag.name,
      slug: prismaTag.slug,
    };
  }
}
