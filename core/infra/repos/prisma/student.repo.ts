import { Student } from '@/core/domain/entities/student.entity';
import { IStudentRepo } from '@/core/domain/repos/student.repo';
import {
  PrismaStudentMapper,
  prismaStudentWithEnrollments,
} from '../../mappers/student.prisma.mapper';
import prisma from '../../orm/prisma/prisma.client';
import { Prisma, PrismaClient } from '../../orm/prisma/generated';

export class PrismaStudentRepo implements IStudentRepo {
  constructor(private readonly _prisma: PrismaClient | Prisma.TransactionClient = prisma) {}
  async findCandidatesByName(
    normalizedName: string,
    canonicalFullName: string
  ): Promise<Student[]> {
    const students = await this._prisma.student.findMany({
      where: {
        OR: [{ normalizedName }, { canonicalFullName }],
      },
      include: prismaStudentWithEnrollments,
    });

    return students.map(PrismaStudentMapper.toDomain);
  }

  async findByCollegeId(collegeId: string): Promise<Student | null> {
    const student = await this._prisma.student.findUnique({
      where: {
        collegeId,
      },
      include: prismaStudentWithEnrollments,
    });

    if (!student) {
      return null;
    }

    return PrismaStudentMapper.toDomain(student);
  }

  async save(student: Student): Promise<Student> {
    const prismaStudent = await this._prisma.student.upsert({
      where: { collegeId: student.collegeId },
      create: PrismaStudentMapper.toPersistenceCreate(student),
      update: PrismaStudentMapper.toPersistenceUpdate(student),
      include: prismaStudentWithEnrollments,
    });

    return PrismaStudentMapper.toDomain(prismaStudent);
  }
}
