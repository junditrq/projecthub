import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { Prisma } from '@/core/infra/orm/prisma/generated';

export const ensureAcademicYear = async (
  client: PrismaClient | Prisma.TransactionClient,
  label: string
) => {
  return await client.academicYear.upsert({
    where: {
      label,
    },
    update: {},
    create: {
      label,
    },
  });
};
