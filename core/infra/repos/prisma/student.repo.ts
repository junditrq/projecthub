import { Student } from "@/core/domain/entities/student.entity";
import { IStudentRepo } from "@/core/domain/repos/student.repo";
import { PrismaStudentMapper } from "../../mappers/student.prisma.mapper";
import prisma from "../../orm/prisma.client";

export class PrismaStudentRepo implements IStudentRepo {
  private prisma;
  constructor() {
    this.prisma = prisma;
  }

  async findByArabicName(arabicName: string): Promise<Student | null> {
    const student = await this.prisma.student.findFirst({
      where: {
        arabicName,
      },
    });

    if (!student) {
      return null;
    }

    return PrismaStudentMapper.toDomain(student);
  }
}
