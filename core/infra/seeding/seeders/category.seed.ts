import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { slug } from '../utils/slug.util';
import { categories } from '../data/categories';

export const seedCategories = async (prisma: PrismaClient) => {
  for (const category of categories) {
    const categorySlug = slug(category);
    await prisma.category.upsert({
      where: { slug: categorySlug },
      update: {},
      create: {
        name: category,
        slug: categorySlug,
      },
    });
  }

  console.log(`Seeded ${categories.length} categories successfully.`);
};
