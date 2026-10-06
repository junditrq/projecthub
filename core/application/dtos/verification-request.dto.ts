export enum VerificationRequestStatusDTO {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  NOT_SUBMITTED = 'NOT_SUBMITTED',
}

export interface CreateVerificationRequestDTO {
  userId: string;
  collegeId: string;
  collegeIdFileKey: string;
}
