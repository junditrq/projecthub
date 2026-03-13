import { Tag } from "@/core/domain/entities/tag.entity";
import { ITagRepo } from "@/core/domain/repos/tag.repo";
import { PrismaTagMapper } from "@/core/infra/mappers/tag.prisma.mapper";
import prisma from "@/core/infra/orm/prisma.client";

export class PrismaTagRepo implements ITagRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async findAll(): Promise<Tag[]> {
    const tags = await this.prisma.tag.findMany({
      orderBy: { name: "asc" },
    });

    return tags.map(PrismaTagMapper.toDomain);
  }
}
