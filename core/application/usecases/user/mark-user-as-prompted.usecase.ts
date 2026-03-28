import { NotFoundError } from "@/core/domain/errors/domain-errors";
import { IUserRepo } from "@/core/domain/repos/user.repo";
import { UserResponseDTO } from "../../dtos/user.dto";
import { UserDTOMapper } from "../../mappers/user.mapper";

export class MarkUserAsPromptedUseCase {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async execute(userId: string): Promise<UserResponseDTO> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new NotFoundError("User has not been found");
    }
    user.markAsPrompted();
    const updatedUser = await this.userRepo.save(user);
    return UserDTOMapper.toResponseDTO(updatedUser);
  }
}
