import { Prisma, PrismaClient } from '@/core/infra/orm/prisma/generated';
import { slug } from '../../utils/slug.util';

export const ensureProjectIdea = async (
  name: string,
  prisma: PrismaClient | Prisma.TransactionClient
) => {
  const validated = name.trim();

  return await prisma.projectIdea.upsert({
    where: {
      name: validated,
    },
    create: {
      name: validated,
      slug: slug(validated),
    },
    update: {},
  });
};
