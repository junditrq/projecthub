export interface VerificationRequest {
  id: string;
  submittedArabicName: string;
  collegeIdPicUrl: string;
  status: VerificationStatus;
  userId: string;
  reviewedById: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export enum VerificationStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}
