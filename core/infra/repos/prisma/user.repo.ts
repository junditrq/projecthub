import { User } from "@/core/domain/entities/user.entity";
import { IUserRepo } from "@/core/domain/repos/user.repo";
import prisma from "@/lib/prisma";
import { UserMapper } from "../../mappers/user.mapper";

export class PrismaUserRepo implements IUserRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async markAsPrompted(userId: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { hasBeenPrompted: true },
    });

    return UserMapper.toDomain(user);
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    return UserMapper.toDomain(user);
  }
}
