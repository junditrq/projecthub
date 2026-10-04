import { IUserRepo } from '@/core/domain/repos/user.repo';
import { ActorNotFoundError } from '../../errors/common.errors';

export class MarkUserAsPromptedUseCase {
  constructor(private readonly _userRepo: IUserRepo) {}

  async execute(userId: string): Promise<void> {
    const user = await this._userRepo.findById(userId);

    if (!user) {
      throw new ActorNotFoundError(userId);
    }

    if (user.hasBeenPrompted) {
      return;
    }

    user.markAsPrompted();
    await this._userRepo.save(user);
  }
}
