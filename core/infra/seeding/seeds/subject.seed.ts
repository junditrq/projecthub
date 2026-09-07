import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { subjects } from '../data/subjects';

export const seedSubjects = async (prisma: PrismaClient) => {
  for (const subject of subjects) {
    await prisma.subject.upsert({
      where: { slug: subject.slug },
      update: {},
      create: {
        name: subject.name,
        slug: subject.slug,
        yearLevel: subject.yearLevel,
        allowedSpecializations: [...subject.allowedSpecializations],
      },
    });
  }

  console.log('Subjects seeded successfully.');
};
