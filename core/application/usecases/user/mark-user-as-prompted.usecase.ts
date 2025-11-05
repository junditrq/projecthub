import { User } from "@/core/domain/entities/user.entity";
import { IUserRepo } from "@/core/domain/repos/user.repo";

export class MarkUserAsPromptedUseCase {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId: string): Promise<User> {
    return await this.userRepo.markAsPrompted(userId);
  }
}
