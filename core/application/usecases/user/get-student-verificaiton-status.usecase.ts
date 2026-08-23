import { VerificationRequestStatusDTO } from '@/core/application/dtos/verification-request.dto';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';

export class GetUserVerificationStatusUseCase {
  private verificationRequestRepo: IVerificationRequestRepo;
  constructor(verificationRequestRepo: IVerificationRequestRepo) {
    this.verificationRequestRepo = verificationRequestRepo;
  }

  public async execute(userId: string): Promise<VerificationRequestStatusDTO> {
    const latestRequest = await this.verificationRequestRepo.getLatestByUserId(userId);

    if (!latestRequest) {
      return 'not_submitted';
    }

    return latestRequest.status;
  }
}
