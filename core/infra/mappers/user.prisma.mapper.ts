import { Prisma, User as PrismaUser } from "@/app/generated/prisma";
import { User } from "@/core/domain/entities/user.entity";

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
      role: prismaUser.role,
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
      role: user.role,
    };
  }
}
