import { Specialization } from '@/core/domain/enums/specialization.enum';
import { Specialization as PrismaSpecalization } from '../../orm/prisma/generated';

export class PrismaSpecializationMapper {
  static toDomain(prismaSpecialization: PrismaSpecalization): Specialization {
    switch (prismaSpecialization) {
      case PrismaSpecalization.SWE:
        return Specialization.SWE;
      case PrismaSpecalization.AI:
        return Specialization.AI;
      case PrismaSpecalization.NET:
        return Specialization.NET;
      case PrismaSpecalization.GENERAL:
        return Specialization.GENERAL;
      default:
        throw new Error(`Unknown specialization: ${prismaSpecialization}`);
    }
  }

  static toPersistence(specialization: Specialization): PrismaSpecalization {
    switch (specialization) {
      case Specialization.SWE:
        return PrismaSpecalization.SWE;
      case Specialization.AI:
        return PrismaSpecalization.AI;
      case Specialization.NET:
        return PrismaSpecalization.NET;
      case Specialization.GENERAL:
        return PrismaSpecalization.GENERAL;
      default:
        throw new Error(`Unknown specialization: ${specialization}`);
    }
  }
}
