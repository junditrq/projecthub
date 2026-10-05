import { UserRole } from '@/core/domain/enums/user-role.enum';
import { UserRoleDTO } from '../dtos/user.dto';

export class UserRoleDTOMapper {
  public static toDTO(role: UserRole): UserRoleDTO {
    switch (role) {
      case UserRole.ADMIN:
        return UserRoleDTO.ADMIN;
      case UserRole.USER:
        return UserRoleDTO.USER;
      default:
        throw new Error(`Unknown domain user role: ${role as string}`);
    }
  }
}
