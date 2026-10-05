import { VerificationStatus } from '@/core/domain/entities/verification-request.entity';
import { VerificationRequestStatusDTO } from '../dtos/verification-request.dto';

export class VerificationRequestDTOMapper {
  static toDTOStatus(status: VerificationStatus): VerificationRequestStatusDTO {
    switch (status) {
      case VerificationStatus.PENDING:
        return VerificationRequestStatusDTO.PENDING;
      case VerificationStatus.APPROVED:
        return VerificationRequestStatusDTO.APPROVED;
      case VerificationStatus.REJECTED:
        return VerificationRequestStatusDTO.REJECTED;
      default:
        throw new Error(`Unknown domain verification status: ${status}`);
    }
  }
}
