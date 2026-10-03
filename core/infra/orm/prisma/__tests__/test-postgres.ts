import { execSync } from 'node:child_process';
import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { PrismaClient } from '../generated';

// Ephemeral Postgres per spec file. Never touches the dev database: the test
// client is constructed with an explicit container URL and setup refuses to
// run when that URL matches the development DATABASE_URL.
export class TestPostgres {
  private container: StartedPostgreSqlContainer | null = null;
  private client: PrismaClient | null = null;

  get prisma(): PrismaClient {
    if (!this.client) throw new Error('TestPostgres not started. Call start() first.');
    return this.client;
  }

  async start(): Promise<PrismaClient> {
    this.container = await new PostgreSqlContainer('postgres:latest').start();
    const url = this.container.getConnectionUri();

    if (url === process.env.DATABASE_URL) {
      throw new Error('Test container URL matches DATABASE_URL. Refusing to run.');
    }

    execSync('pnpm exec prisma migrate deploy --schema core/infra/orm/prisma/schema.prisma', {
      env: { ...process.env, DATABASE_URL: url },
      stdio: 'pipe',
    });

    this.client = new PrismaClient({ datasourceUrl: url });
    await this.seedSubjects();
    return this.client;
  }

  async reset(): Promise<void> {
    const prisma = this.prisma;
    await prisma.$executeRawUnsafe(
      'TRUNCATE "groups", "group_members", "unresolved_group_members", "students", "student_enrollments", "project_ideas" CASCADE'
    );
  }

  async seedSubjects(): Promise<void> {
    const prisma = this.prisma;
    await prisma.subject.upsert({
      where: { slug: 'project-2' },
      update: {},
      create: {
        id: 'subject-project-2',
        name: 'Project 2',
        slug: 'project-2',
        yearLevel: 'FOURTH',
        allowedSpecializations: ['AI', 'SWE', 'NET'],
      },
    });
    await prisma.subject.upsert({
      where: { slug: 'project-1' },
      update: {},
      create: {
        id: 'subject-project-1',
        name: 'Project 1',
        slug: 'project-1',
        yearLevel: 'THIRD',
        allowedSpecializations: ['GENERAL'],
      },
    });
  }

  async stop(): Promise<void> {
    await this.client?.$disconnect();
    await this.container?.stop();
    this.client = null;
    this.container = null;
  }
}
