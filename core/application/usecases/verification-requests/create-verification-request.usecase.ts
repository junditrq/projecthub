import { VerificationRequest } from '@/core/domain/entities/verification-request.entity';
import { IStudentRepo } from '@/core/domain/repos/student.repo';
import { IUserRepo } from '@/core/domain/repos/user.repo';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';
import * as path from 'path';
import { CreateVerificationRequestDTO } from '../../dtos/verification-request.dto';
import { ok, fail, Result } from '@/core/domain/shared/result';
import { ActorNotFoundError } from '../../errors/common.errors';
import { CreateVerificationRequestError } from './create-verification-request.errors';
import { IStorageService } from '../../services/storage.service';

export class CreateVerificationRequestUseCase {
  constructor(
    private readonly _studentRepo: IStudentRepo,
    private readonly _userRepo: IUserRepo,
    private readonly _verificationRequestRepo: IVerificationRequestRepo,
    private readonly _storageService: IStorageService
  ) {}

  async execute({
    userId,
    collegeId,
    collegeIdFileKey,
  }: CreateVerificationRequestDTO): Promise<Result<undefined, CreateVerificationRequestError>> {
    const user = await this._userRepo.findById(userId);
    if (!user) {
      throw new ActorNotFoundError(userId);
    }

    if (!user.canRequestStudentVerification()) {
      return fail(CreateVerificationRequestError.alreadyStudent());
    }

    const hasPendingRequest = await this._verificationRequestRepo.hasPendingRequest(userId);

    if (hasPendingRequest) {
      return fail(CreateVerificationRequestError.pendingVerificationRequestExists());
    }

    const student = await this._studentRepo.findByCollegeId(collegeId);

    if (!student) {
      return fail(CreateVerificationRequestError.studentNotFound());
    }

    if (student.userId !== null) {
      return fail(CreateVerificationRequestError.studentAlreadyLinkedToUser());
    }

    const destinationKey = `verification-requests/${userId}/college-id-${Date.now() + path.extname(collegeIdFileKey)}`;

    const moved = await this._storageService.moveFile(collegeIdFileKey, destinationKey);
    if (!moved.ok) {
      return fail(CreateVerificationRequestError.collegeIdFileNotFound());
    }

    const verificationRequest = VerificationRequest.create({
      collegeIdPicURL: destinationKey,
      studentId: student.id,
      userId,
    });

    await this._verificationRequestRepo.save(verificationRequest);

    return ok(undefined);
  }
}
