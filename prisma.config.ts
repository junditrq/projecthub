import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'core/infra/orm/prisma/schema.prisma',

  migrations: {
    path: 'core/infra/orm/prisma/migrations',
    seed: 'tsx core/infra/seeding/seed.ts',
  },

  datasource: {
    url: env('DATABASE_URL'),
  },
});
