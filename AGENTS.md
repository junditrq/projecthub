# ProjectHub - Agent Instructions

## Project Overview

Next.js 15 (App Router) + React 19 + TypeScript with Prisma/PostgreSQL, NextAuth v5, S3-compatible storage (MinIO).

## Package Manager

**pnpm** (lockfile: `pnpm-lock.yaml`)

## Commands

```bash
pnpm dev          # Next.js dev server with Turbopack on 0.0.0.0
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint (next/core-web-vitals, next/typescript, prettier)
pnpm format       # Prettier --write
pnpm format:check # Prettier --check
pnpm prepare      # Husky install (runs on install)
```

## Code Quality Order

`lint` → `format:check` (or `format` to fix)

## Architecture (Clean Architecture + Next.js Layer)

### Layer Boundaries (STRICT)

```
core/domain/              ← ZERO external deps (no Prisma, no Next, no SDKs)
    entities/             ← Anemic interfaces (should be rich entities with behavior)
    repos/                ← Repository interfaces ONLY (IUserRepo, IVerificationRequestRepo, etc.)
    errors/               ← Domain errors

core/application/         ← Depends ONLY on core/domain
    usecases/             ← Use cases per domain (user, verification-requests, categories, tags, storage)
    dtos/                 ← Data transfer objects
    mappers/              ← Domain ↔ DTO mapping
    services/             ← Application services
    types/                ← Type definitions

core/infra/               ← External implementations
    repos/prisma/         ← Prisma implementations of domain repo interfaces
    di/                   ← IoC container (@evyweb/ioctopus) binds interfaces → impls
    services/             ← External services (S3 storage via @aws-sdk)
    orm/                  ← Prisma client setup
    config/               ← Config
    mappers/              ← Infra mappers

lib/                      ← Next.js-specific layer (client/framework code)
    actions/              ← Server actions (next-safe-action) → resolve use cases from DI container
    presentation/         ← Presenters & types for UI layer
    schemas/              ← Zod validation schemas
    dal/                  ← Direct Prisma data access (bypasses use cases for reads)
    safe-action.ts        ← Authenticated action client wrapper
    upload-helper.ts      ← File upload utilities
    utils.ts              ← Shared utilities

app/                      ← Next.js App Router pages & layouts
components/               ← React components (UI + feature)
hooks/                    ← Custom React hooks
providers/                ← React context providers
```

### Dependency Rule

| Layer              | Allowed                                    | Forbidden                                                |
| ------------------ | ------------------------------------------ | -------------------------------------------------------- |
| `core/domain`      | TS stdlib only                             | `@prisma/client`, `next/*`, `@aws-sdk/*`, `zod`, `react` |
| `core/application` | `core/domain`                              | `@prisma/client`, `next/*`, external SDKs                |
| `core/infra`       | Domain, Application, Prisma, Next.js, SDKs | —                                                        |
| `lib/`             | All above + Next.js, Zod, React            | —                                                        |

### DI Container

- `@evyweb/ioctopus` in `core/infra/di/`
- Modules in `core/infra/di/modules/*.ts` bind interfaces to Prisma implementations
- Example: `userModule.bind('IUserRepo').toClass(PrismaUserRepo)`
- Server actions in `lib/actions/` resolve use cases: `container.get('UseCaseName')`

## Key Dependencies

- **Auth**: NextAuth v5 (beta) + @auth/prisma-adapter, Google OAuth
- **Database**: Prisma Client + PostgreSQL
- **Storage**: @aws-sdk/client-s3 (MinIO compatible)
- **Forms**: react-hook-form + @hookform/resolvers + zod
- **UI**: Radix UI + Tailwind CSS v4 + class-variance-authority
- **Validation**: zod v4, next-safe-action for server actions
- **DI**: @evyweb/ioctopus

## Environment Variables (validated in `env.ts`)

Required: `DATABASE_URL`, `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `STORAGE_REGION`, `STORAGE_ACCESS_KEY`, `STORAGE_SECRET_KEY`, `STORAGE_BUCKET_NAME`
Optional: `AUTH_URL`, `STORAGE_ENDPOINT`

## Prisma

- Schema: `prisma/schema.prisma`
- Seed: `pnpm prisma db seed` (runs `tsx prisma/seed.ts`)
- Migrations in `prisma/migrations/`

## Docker

`docker-compose.yml` for local MinIO + PostgreSQL

## Git Hooks

Husky + lint-staged runs on commit:

- TS/JS/TSX: `eslint --fix` + `prettier --write`
- JSON/MD/CSS/YAML: `prettier --write`

## TypeScript

Strict mode, path alias `@/*` → `./*`, noEmit, ESNext modules

## Testing

No test framework configured yet.

## Critical Rules for AI Agents

1. **Domain Purity**: Never import `@prisma/client`, `next/*`, or external SDKs inside `core/domain` or `core/application`.
2. **Repository Separation**: Use Cases must depend strictly on Repository Interfaces (`IRepository`), never on concrete classes (`PrismaRepository`).
3. **Rich Domain Entities**: Entities must encapsulate logic and protect state. Do not create anemic data bags with public setters.
   - Current entities are interfaces only - refactor to classes with private state + methods when needed
4. **Missing Project Domain**: No `IProjectRepo` or project use cases exist in core. Project logic is in `lib/actions/` or UI components - consider migrating to core.

## Gotchas

- Turbopack enabled in dev (`--turbopack`)
- NextAuth v5 is beta - API may change
- `@/lib/safe-action.ts` wraps next-safe-action with Zod
- Prisma generated client ignored in ESLint (`app/generated/**`)
- MinIO data persisted in `minio-data/` (gitignored)
- Entities are anemic interfaces, not rich domain models
- Two data access paths: use cases (via DI) for writes, DAL for direct reads
