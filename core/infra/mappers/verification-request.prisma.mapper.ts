import {
  VerificationRequest as PrismaVerificaitonRequest,
  VerificationStatus as PrismaVerificationStatus,
} from '@/app/generated/prisma';
import {
  VerificationRequest,
  VerificationStatus,
} from '@/core/domain/entities/verification-request.entity';

export class PrismaVerificationRequestMapper {
  static toDomain(prismaVerificationRequest: PrismaVerificaitonRequest): VerificationRequest {
    return VerificationRequest.reconstitute({
      id: prismaVerificationRequest.id,
      userId: prismaVerificationRequest.userId,
      reviewedById: prismaVerificationRequest.reviewedById,
      createdAt: prismaVerificationRequest.createdAt,
      updatedAt: prismaVerificationRequest.updatedAt,
      collegeIdPicURL: prismaVerificationRequest.collegeIdPicURL,
      status: this.toDomainStatus(prismaVerificationRequest.status),
      submittedArabicName: prismaVerificationRequest.submittedArabicName,
      rejectedReason: prismaVerificationRequest.rejectedReason,
    });
  }

  static toPersistence(request: VerificationRequest): PrismaVerificaitonRequest {
    return {
      id: request.id,
      userId: request.userId,
      reviewedById: request.reviewedById,
      createdAt: request.createdAt,
      updatedAt: request.updatedAt,
      collegeIdPicURL: request.collegeIdPicURL,
      status: this.toPersistenceStatus(request.status),
      submittedArabicName: request.submittedArabicName,
      rejectedReason: request.rejectedReason,
    };
  }

  private static toDomainStatus(status: PrismaVerificationStatus): VerificationStatus {
    switch (status) {
      case PrismaVerificationStatus.PENDING:
        return VerificationStatus.PENDING;
      case PrismaVerificationStatus.APPROVED:
        return VerificationStatus.APPROVED;
      case PrismaVerificationStatus.REJECTED:
        return VerificationStatus.REJECTED;
      default:
        throw new Error(`Unknown status: ${status}`);
    }
  }

  private static toPersistenceStatus(status: VerificationStatus): PrismaVerificationStatus {
    switch (status) {
      case VerificationStatus.PENDING:
        return PrismaVerificationStatus.PENDING;
      case VerificationStatus.APPROVED:
        return PrismaVerificationStatus.APPROVED;
      case VerificationStatus.REJECTED:
        return PrismaVerificationStatus.REJECTED;
      default:
        throw new Error(`Unknown domain status: ${status}`);
    }
  }
}
