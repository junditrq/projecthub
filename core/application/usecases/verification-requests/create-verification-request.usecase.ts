import { VerificationRequest } from "@/core/domain/entities/verification-request.entity";
import { DomainErrorCode } from "@/core/domain/errors/domain-error-codes";
import { NotFoundError } from "@/core/domain/errors/domain-errors";
import { IStudentRepo } from "@/core/domain/repos/student.repo";
import { IUserRepo } from "@/core/domain/repos/user.repo";
import { IVerificationRequestRepo } from "@/core/domain/repos/verification-request.repo";
import * as path from "path";
import { CreateVerificationRequestDTO } from "../../dtos/verification-request.dto";
import { IStorageService } from "../../services/storage.service";
import { UseCaseResult } from "../../types/usecase-result.type";

export type CreateVerificationUseCaseErrorCode =
  | Extract<DomainErrorCode, "UNAUTHENTICATED">
  | "ALREADY_VERIFIED"
  | "STUDENT_NOT_FOUND"
  | "PENDING_VERIFICATION_REQUEST_EXISTS"
  | "INVALID_COLLEGE_ID_FILE";

export type CreateVerificationRequestUseCaseResult = UseCaseResult<
  void,
  CreateVerificationUseCaseErrorCode
>;

export class CreateVerificationRequestUseCase {
  constructor(
    private studentRepo: IStudentRepo,
    private userRepo: IUserRepo,
    private verificationRequestRepo: IVerificationRequestRepo,
    private storageService: IStorageService,
  ) {}

  async execute({
    arabicName,
    userId,
    collegeIdFileKey,
  }: CreateVerificationRequestDTO): Promise<CreateVerificationRequestUseCaseResult> {
    // this is the actor
    const user = await this.userRepo.findById(userId);
    if (!user) {
      return {
        success: false,
        error: {
          code: "UNAUTHENTICATED",
          message: "User not authenticated.",
        },
      };
    }

    if (!user.canRequestStudnetVerification()) {
      return {
        success: false,
        error: {
          code: "ALREADY_VERIFIED",
          message: "You are already verified as a student.",
        },
      };
    }

    const hasPendingRequest =
      await this.verificationRequestRepo.hasPendingRequest(userId);

    if (hasPendingRequest) {
      return {
        success: false,
        error: {
          code: "PENDING_VERIFICATION_REQUEST_EXISTS",
          message: "You already have a pending verification request.",
        },
      };
    }

    const student = await this.studentRepo.findByArabicName(arabicName.trim());
    if (!student) {
      return {
        success: false,
        error: {
          code: "STUDENT_NOT_FOUND",
          message: "No student found with the provided Arabic name.",
        },
      };
    }

    const destinationKey = `verification-requests/${userId}/college-id-${Date.now() + path.extname(collegeIdFileKey)}`;

    try {
      await this.storageService.moveFile(collegeIdFileKey, destinationKey);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          success: false,
          error: {
            code: "INVALID_COLLEGE_ID_FILE",
            message: "The provided college ID file does not exist.",
          },
        };
      }
      throw error;
    }

    const verificationRequest = VerificationRequest.create({
      collegeIdPicUrl: destinationKey,
      submittedArabicName: arabicName.trim(),
      userId,
    });

    await this.verificationRequestRepo.save(verificationRequest);

    return {
      success: true,
    };
  }
}
