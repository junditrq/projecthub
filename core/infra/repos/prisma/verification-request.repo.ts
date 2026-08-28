import { VerificationRequest } from '@/core/domain/entities/verification-request.entity';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';
import prisma from '@/core/infra/orm/prisma.client';
import { PrismaVerificationRequestMapper } from '../../mappers/verification-request.prisma.mapper';
import { VerificationStatus as PrismaVerificationStatus } from '@/app/generated/prisma';

export class PrismaVerificationRequestRepo implements IVerificationRequestRepo {
  private prisma;

  constructor() {
    this.prisma = prisma;
  }

  async getLatestByUserId(userId: string): Promise<VerificationRequest | null> {
    const latest = await this.prisma.verificationRequest.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return latest ? PrismaVerificationRequestMapper.toDomain(latest) : null;
  }

  async hasPendingRequest(userId: string): Promise<boolean> {
    const count = await this.prisma.verificationRequest.count({
      where: {
        userId,
        status: PrismaVerificationStatus.PENDING,
      },
    });
    return count > 0;
  }

  async save(request: VerificationRequest): Promise<VerificationRequest> {
    const prismaRequest = PrismaVerificationRequestMapper.toPersistence(request);

    const updated = await this.prisma.verificationRequest.upsert({
      where: { id: request.id },
      create: prismaRequest,
      update: prismaRequest,
    });

    return PrismaVerificationRequestMapper.toDomain(updated);
  }
}
