import { UserRole } from '@/core/domain/enums/user-role.enum';
import { UserRole as PrismaUserRole } from '../../orm/prisma/generated';

export class PrismaUserRoleMapper {
  static toDomain(role: PrismaUserRole): UserRole {
    switch (role) {
      case PrismaUserRole.ADMIN:
        return UserRole.ADMIN;
      case PrismaUserRole.USER:
        return UserRole.USER;
      default:
        throw new Error(`Unknown user role: ${role as string}`);
    }
  }

  static toPersistence(role: UserRole): PrismaUserRole {
    switch (role) {
      case UserRole.ADMIN:
        return PrismaUserRole.ADMIN;
      case UserRole.USER:
        return PrismaUserRole.USER;
      default:
        throw new Error(`Unknown domain user role: ${role as string}`);
    }
  }
}
