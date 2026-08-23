import { Tag as PrismaTag } from '@/app/generated/prisma';
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
