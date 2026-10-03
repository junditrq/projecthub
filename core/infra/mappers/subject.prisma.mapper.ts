import { Subject } from '@/core/domain/entities/subject.entity';
import { Prisma, Subject as PrismaSubject } from '../orm/prisma/generated';
import { PrismaSpecializationMapper } from './specialization.prisma.mapper';
import { PrismaYearLevelMapper } from './year-level.prisma.mapper';

export class PrismaSubjectMapper {
  static toDomain(prismaSubject: PrismaSubject): Subject {
    return Subject.reconstitute({
      id: prismaSubject.id,
      name: prismaSubject.name,
      slug: prismaSubject.slug,
      allowedSpecializations: prismaSubject.allowedSpecializations.map(
        PrismaSpecializationMapper.toDomain
      ),
      yearLevel: PrismaYearLevelMapper.toDomain(prismaSubject.yearLevel),
    });
  }

  static toPersistenceCreate(subject: Subject): Prisma.SubjectUncheckedCreateInput {
    return {
      name: subject.name,
      slug: subject.slug,
      allowedSpecializations: subject.allowedSpecializations.map(
        PrismaSpecializationMapper.toPersistence
      ),
      yearLevel: PrismaYearLevelMapper.toPersistence(subject.yearLevel),
    };
  }
}
