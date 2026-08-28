import { VerificationRequestStatusDTO } from '@/core/application/dtos/verification-request.dto';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';
import { VerificationRequestDTOMapper } from '../../mappers/verification-request.mapper';

export class GetUserVerificationStatusUseCase {
  private verificationRequestRepo: IVerificationRequestRepo;
  constructor(verificationRequestRepo: IVerificationRequestRepo) {
    this.verificationRequestRepo = verificationRequestRepo;
  }

  public async execute(userId: string): Promise<VerificationRequestStatusDTO> {
    const latestRequest = await this.verificationRequestRepo.getLatestByUserId(userId);

    if (!latestRequest) {
      return VerificationRequestStatusDTO.NOT_SUBMITTED;
    }

    return VerificationRequestDTOMapper.toDTOStatus(latestRequest.status);
  }
}
