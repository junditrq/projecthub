import { User } from "@/core/domain/entities/user.entity";
import { IUserRepo } from "@/core/domain/repos/user.repo";
import prisma from "@/lib/prisma";
import { UserMapper } from "../../mappers/user.mapper";

export class PrismaUserRepo implements IUserRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) return null;

    return UserMapper.toDomain(user);
  }

  async update(user: User): Promise<User> {
    const data = UserMapper.toPersistene(user);

    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data,
    });

    return UserMapper.toDomain(updatedUser);
  }
}
