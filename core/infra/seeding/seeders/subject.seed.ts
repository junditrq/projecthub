import { PrismaClient } from '@/core/infra/orm/prisma/generated';
import { subjects } from '../data/subjects';
import { PrismaSubjectMapper } from '../../mappers/prisma/subject.mapper';
import { Subject } from '@/core/domain/entities/subject.entity';

export const seedSubjects = async (prisma: PrismaClient) => {
  for (const seedSubject of subjects) {
    const subject = Subject.create({
      allowedSpecializations: [...seedSubject.allowedSpecializations],
      name: seedSubject.name,
      slug: seedSubject.slug,
      yearLevel: seedSubject.yearLevel,
    });

    await prisma.subject.upsert({
      where: { slug: subject.slug },
      update: {},
      create: PrismaSubjectMapper.toPersistenceCreate(subject),
    });
  }

  console.log(`Seeded ${subjects.length} subjects successfully.`);
};
