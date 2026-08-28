import { User, UserRole } from '@/core/domain/entities/user.entity';
import { UserResponseDTO, UserRoleDTO } from '../dtos/user.dto';

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
      role: this.toDTORole(user.role),
    };
  }

  public static toDTORole(role: UserRole): UserRoleDTO {
    switch (role) {
      case UserRole.ADMIN:
        return UserRoleDTO.ADMIN;
      case UserRole.STUDENT:
        return UserRoleDTO.STUDENT;
      case UserRole.VISITOR:
        return UserRoleDTO.VISITOR;
      default:
        throw new Error(`Unknown domain user role: ${role}`);
    }
  }
}
