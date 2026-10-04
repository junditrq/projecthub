import { VerificationRequestStatusDTO } from '@/core/application/dtos/verification-request.dto';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';
import { VerificationRequestDTOMapper } from '../../mappers/verification-request.mapper';

export class GetUserVerificationStatusUseCase {
  constructor(private readonly _verificationRequestRepo: IVerificationRequestRepo) {}

  public async execute(userId: string): Promise<VerificationRequestStatusDTO> {
    const latestRequest = await this._verificationRequestRepo.getLatestByUserId(userId);

    if (!latestRequest) {
      return VerificationRequestStatusDTO.NOT_SUBMITTED;
    }

    return VerificationRequestDTOMapper.toDTOStatus(latestRequest.status);
  }
}
