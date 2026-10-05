import { User } from '@/core/domain/entities/user.entity';
import { UserResponseDTO } from '../dtos/user.dto';
import { UserRoleDTOMapper } from './user-role.mapper';

export class UserDTOMapper {
  public static toResponseDTO(user: User): UserResponseDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      githubUsername: user.githubUsername,
      linkedinUrl: user.linkedinUrl,
      hasBeenPrompted: user.hasBeenPrompted,
      role: UserRoleDTOMapper.toDTO(user.role),
      isStudent: user.isStudent,
    };
  }
}
