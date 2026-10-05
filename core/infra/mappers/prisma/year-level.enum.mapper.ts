import { YearLevel as PrismaYearLevel } from '../../orm/prisma/generated';
import { YearLevel } from '@/core/domain/enums/year-level.enum';

export class PrismaYearLevelMapper {
  static toDomain(prismaYearLevel: PrismaYearLevel): YearLevel {
    switch (prismaYearLevel) {
      case PrismaYearLevel.THIRD:
        return YearLevel.THIRD;
      case PrismaYearLevel.FOURTH:
        return YearLevel.FOURTH;
      case PrismaYearLevel.FIFTH:
        return YearLevel.FIFTH;
      default:
        throw new Error(`Unknown year level: ${prismaYearLevel}`);
    }
  }

  static toPersistence(yearLevel: YearLevel): PrismaYearLevel {
    switch (yearLevel) {
      case YearLevel.THIRD:
        return PrismaYearLevel.THIRD;
      case YearLevel.FOURTH:
        return PrismaYearLevel.FOURTH;
      case YearLevel.FIFTH:
        return PrismaYearLevel.FIFTH;
      default:
        throw new Error(`Unknown year level: ${yearLevel}`);
    }
  }
}
