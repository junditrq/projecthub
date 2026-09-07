import { PrismaClient } from '@/core/infra/orm/prisma/generated';

export const seedAcademicYear = async (client: PrismaClient, label: string) => {
  await client.academicYear.upsert({
    where: {
      label,
    },
    update: {},
    create: {
      label,
    },
  });
};
