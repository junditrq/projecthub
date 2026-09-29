import { GroupSaveContext, IGroupRepo } from '@/core/domain/repos/group.repo';
import { Prisma, PrismaClient } from '../../orm/prisma/generated';
import { Group } from '@/core/domain/entities/group.entity';
import { PrismaGroupMapper } from '../../mappers/group.prisma.mapper';

export class PrismaGroupRepo implements IGroupRepo {
  constructor(private readonly _prisma: PrismaClient | Prisma.TransactionClient) {}
  async existsBySeedHash(seedHash: string): Promise<boolean> {
    const group = await this._prisma.group.findUnique({
      where: {
        seedHash,
      },
    });

    return !!group;
  }

  async isStudentGrouped(
    studentId: string,
    subjectId: string,
    academicYearId: string
  ): Promise<boolean> {
    const groupStudentIn = await this._prisma.groupMember.findFirst({
      where: {
        studentId,
        group: {
          subjectId,
          academicYearId,
        },
      },
    });

    return !!groupStudentIn;
  }

  async save(group: Group, context: GroupSaveContext): Promise<Group> {
    const { seedHash } = context;

    const prismaGroup = await this._prisma.group.upsert({
      include: {
        groupMembers: true,
        unresolvedGroupMembers: true,
      },
      where: {
        id: group.id,
      },
      create: PrismaGroupMapper.toPersistenceCreate(group, { seedHash }),
      update: PrismaGroupMapper.toPersistenceUpdate(group),
    });

    return PrismaGroupMapper.toDomain(prismaGroup);
  }
}
