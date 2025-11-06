import { User } from "@/core/domain/entities/user.entity";
import { IUserRepo } from "@/core/domain/repos/user.repo";

export class MarkUserAsPromptedUseCase {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId: string): Promise<User> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error("User has not been found");
    }
    user.markAsPrompted();
    return await this.userRepo.update(user);
  }
}
