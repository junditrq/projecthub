import { Subject } from '@/core/domain/entities/subject.entity';
import { Subject as PrismaSubject } from '../orm/prisma/generated';
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
}
