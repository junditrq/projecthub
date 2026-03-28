import { VerificationRequest } from "@/core/domain/entities/verification-request.entity";

export interface IVerificationRequestRepo {
  getLatestByUserId(userId: string): Promise<VerificationRequest | null>;
  hasPendingRequest(userId: string): Promise<boolean>;
  save(request: VerificationRequest): Promise<VerificationRequest>;
}
