import {
  Prisma,
  User as PrismaUser,
  UserRole as PrismaUserRole,
} from '@/core/infra/orm/prisma/generated';
import { User, UserRole } from '@/core/domain/entities/user.entity';

export class PrismaUserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return User.reconstitute({
      email: prismaUser.email,
      githubUsername: prismaUser.githubUsername,
      hasBeenPrompted: prismaUser.hasBeenPrompted,
      id: prismaUser.id,
      image: prismaUser.image,
      name: prismaUser.name,
      linkedinUrl: prismaUser.linkedinUrl,
      role: this.toDomainRole(prismaUser.role),
    });
  }

  static toPersistence(user: User): Prisma.UserUpdateInput {
    return {
      id: user.id,
      email: user.email,
      githubUsername: user.githubUsername,
      hasBeenPrompted: user.hasBeenPrompted,
      image: user.image,
      name: user.name,
      linkedinUrl: user.linkedinUrl,
      role: this.toPersistenceRole(user.role),
    };
  }

  private static toDomainRole(role: PrismaUserRole): UserRole {
    switch (role) {
      case PrismaUserRole.ADMIN:
        return UserRole.ADMIN;
      case PrismaUserRole.STUDENT:
        return UserRole.STUDENT;
      case PrismaUserRole.VISITOR:
        return UserRole.VISITOR;
      default:
        throw new Error(`Unknown user role: ${role}`);
    }
  }

  private static toPersistenceRole(role: UserRole): PrismaUserRole {
    switch (role) {
      case UserRole.ADMIN:
        return PrismaUserRole.ADMIN;
      case UserRole.STUDENT:
        return PrismaUserRole.STUDENT;
      case UserRole.VISITOR:
        return PrismaUserRole.VISITOR;
      default:
        throw new Error(`Unknown domain user role: ${role}`);
    }
  }
}
