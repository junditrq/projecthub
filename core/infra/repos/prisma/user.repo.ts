import { User } from '@/core/domain/entities/user.entity';
import { IUserRepo } from '@/core/domain/repos/user.repo';
import prisma from '@/core/infra/orm/prisma/prisma.client';
import { PrismaUserMapper, prismaUserWithStudentId } from '../../mappers/user.prisma.mapper';

export class PrismaUserRepo implements IUserRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: prismaUserWithStudentId,
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async save(user: User): Promise<User> {
    const data = PrismaUserMapper.toPersistence(user);

    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data,
      include: prismaUserWithStudentId,
    });

    return PrismaUserMapper.toDomain(updatedUser);
  }
}
