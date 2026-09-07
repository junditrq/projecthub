import prisma from '../../orm/prisma/prisma.client';
import { seedCategories } from '../seeds/category.seed';
import { seedSubjects } from '../seeds/subject.seed';
import { seedTags } from '../seeds/tag.seed';

async function main() {
  await seedTags(prisma);
  await seedCategories(prisma);
  await seedSubjects(prisma);

  console.log('Seeding completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
