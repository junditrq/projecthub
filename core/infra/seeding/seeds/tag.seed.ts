import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { tags } from '../data/tags';
import { slug } from '../utils/slug.util';

export const seedTags = async (prisma: PrismaClient) => {
  for (const tag of tags) {
    const tagSlug = slug(tag);
    await prisma.tag.upsert({
      where: { slug: tagSlug },
      update: {},
      create: {
        name: tag,
        slug: tagSlug,
      },
    });
  }

  console.log(`Seeded ${tags.length} tags successfully.`);
};
