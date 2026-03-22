export type VerificationRequestStatusDTO =
  | "pending"
  | "approved"
  | "rejected"
  | "not_submitted";

export interface CreateVerificationRequestDTO {
  userId: string;
  arabicName: string;
  collegeIdFileKey: string;
}
