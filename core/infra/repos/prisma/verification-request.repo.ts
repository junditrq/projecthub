import { VerificationRequest } from "@/core/domain/entities/verification-request.entity";
import { IVerificationRequestRepo } from "@/core/domain/repos/verification-request.repo";
import { PrismaVerificationRequestMapper } from "@/core/infra/mappers/verification-request.prisma.mapper";
import prisma from "@/core/infra/orm/prisma.client";

export class PrismaVerificationRequestRepo implements IVerificationRequestRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async getLatestByUserId(userId: string): Promise<VerificationRequest | null> {
    const request = await this.prisma.verificationRequest.findFirst({
      where: { userId: userId },
      orderBy: { createdAt: "desc" },
    });

    return request ? PrismaVerificationRequestMapper.toDomain(request) : null;
  }
}
