import { Prisma, User as PrismaUser } from '@/core/infra/orm/prisma/generated';
import { User } from '@/core/domain/entities/user.entity';
import { PrismaUserRoleMapper } from './user-role.prisma.mapper';

export type PrismaUserWithStudent = PrismaUser & {
  student?: { id: string } | null;
};

export class PrismaUserMapper {
  static toDomain(prismaUser: PrismaUserWithStudent): User {
    return User.reconstitute({
      email: prismaUser.email,
      githubUsername: prismaUser.githubUsername,
      hasBeenPrompted: prismaUser.hasBeenPrompted,
      id: prismaUser.id,
      image: prismaUser.image,
      name: prismaUser.name,
      linkedinUrl: prismaUser.linkedinUrl,
      role: PrismaUserRoleMapper.toDomain(prismaUser.role),
      isStudent: prismaUser.student != null,
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
      role: PrismaUserRoleMapper.toPersistence(user.role),
    };
  }
}
