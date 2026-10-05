import { ICategoryRepo } from '@/core/domain/repos/category.repo';
import prisma from '@/core/infra/orm/prisma/prisma.client';
import { PrismaCategoryMapper } from '../../mappers/prisma/category.mapper';

export class PrismaCategoryRepo implements ICategoryRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async findAll() {
    const categories = await this.prisma.category.findMany({
      orderBy: { name: 'asc' },
    });
    return categories.map(PrismaCategoryMapper.toDomain);
  }
}
