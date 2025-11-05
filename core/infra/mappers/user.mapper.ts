import { User as PrismaUser } from "@/app/generated/prisma";
import { User } from "@/core/domain/entities/user.entity";

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return {
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      image: prismaUser.image,
      role: prismaUser.role,
      githubUsername: prismaUser.githubUsername,
      linkedinUrl: prismaUser.linkedinUrl,
      hasBeenPrompted: prismaUser.hasBeenPrompted,
    };
  }
}
