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
      collegeIdPicUrl: prismaVerificationRequest.collegeIdPicUrl,
      status: this.toDomainStatus(prismaVerificationRequest.status),
      submittedArabicName: prismaVerificationRequest.submittedArabicName,
    });
  }

  static toPersistence(request: VerificationRequest): PrismaVerificaitonRequest {
    return {
      id: request.id,
      userId: request.userId,
      reviewedById: request.reviewedById,
      createdAt: request.createdAt,
      updatedAt: request.updatedAt,
      collegeIdPicUrl: request.collegeIdPicUrl,
      status: request.status,
      submittedArabicName: request.submittedArabicName,
    };
  }

  private static toDomainStatus(status: PrismaVerificationStatus): VerificationStatus {
    switch (status) {
      case 'pending':
        return VerificationStatus.pending;
      case 'approved':
        return VerificationStatus.approved;
      case 'rejected':
        return VerificationStatus.rejected;
      default:
        throw new Error(`Unknown status: ${status}`);
    }
  }
}
