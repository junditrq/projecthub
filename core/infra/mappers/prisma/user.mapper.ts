import { User } from '@/core/domain/entities/user.entity';
import { PrismaUserRoleMapper } from './user-role.enum.mapper';
import { Prisma } from '../../orm/prisma/generated';

export const prismaUserWithStudentId = {
  student: {
    select: {
      id: true,
    },
  },
} satisfies Prisma.UserInclude;

export type PrismaUserWithStudent = Prisma.UserGetPayload<{
  include: typeof prismaUserWithStudentId;
}>;

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
