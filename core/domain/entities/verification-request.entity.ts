import { User } from "./user.entity";

export interface VerificationRequest {
  id: string;
  submittedArabicName: string;
  collegeIdPicUrl: string;
  status: VerificationStatus;
  user: User;
  reviewedBy?: User;
}

export enum VerificationStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}
