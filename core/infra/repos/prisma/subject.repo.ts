import { Subject } from '@/core/domain/entities/subject.entity';
import prisma from '../../orm/prisma/prisma.client';
import { Prisma, PrismaClient } from '../../orm/prisma/generated';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { PrismaSubjectMapper } from '../../mappers/prisma/subject.mapper';

export class PrismaSubjectRepo implements ISubjectRepo {
  constructor(private readonly _prisma: PrismaClient | Prisma.TransactionClient = prisma) {}

  async findBySlug(slug: string): Promise<Subject | null> {
    const subject = await this._prisma.subject.findUnique({
      where: {
        slug,
      },
    });

    if (!subject) {
      return null;
    }

    return PrismaSubjectMapper.toDomain(subject);
  }
}
