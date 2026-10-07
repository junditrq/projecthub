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
pnpm typecheck    # TypeScript type check
```

## Code Quality Order

`lint` → `format:check` (or `format` to fix)
After making changes, run `pnpm lint` and fix all errors.

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
    mappers/prisma/       ← Infra mappers (`.mapper.ts` entities, `.enum.mapper.ts` enums)

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

## Architecture & DDD Rules

### 1. Persistence Layer & Prisma Schema Strictness

- **Rule:** NEVER make Prisma schema fields optional (`?`) just to satisfy third-party boilerplate (e.g., default Auth.js schemas) if our core domain requires that field.
- **Rule:** If the business domain dictates that a user must have an email, the database schema MUST reflect this (`email String @unique`). Do not compromise persistence integrity for third-party quirks.

### 2. Mapper Layer (Anti-Corruption Layer)

- **Rule:** Mappers MUST act as pure shape and type translators between Persistence models (Prisma) and Domain Entities.
- **Rule:** NEVER put business validation logic inside a Mapper (e.g., checking if a required field exists and throwing a domain error).
- **Rule:** NEVER use TypeScript non-null assertions (`!`) or type casting (`as string`) in Mappers to force types to align. If types mismatch, you must fix the Prisma schema or the Domain Entity interfaces to reflect reality.

### 3. Domain Entities & Validation Invariants

- **Rule:** Domain Entities are the absolute authority on business rules and state transitions.
- **Rule:** ALWAYS separate the entity lifecycle into two distinct static factory methods:
  1. `Entity.create(props)`: Used for generating _new_ entities. This method MUST enforce strict business validation (e.g., formatting, completeness, initial state).
  2. `Entity.reconstitute(props)`: Used ONLY by Mappers when hydrating data from the database. It bypasses initial creation logic because the data is assumed to have been validated prior to persistence.

### 4. Repository Layer

- **Rule:** Repositories are strictly an abstraction for data access mechanics.
- **Rule:** NEVER place business validation, impedance mismatch checks, or null-field throwing logic inside a Repository. The Repository simply queries the database and passes the raw result directly to the Mapper.

### 5. Infrastructure Gatekeeping (Auth.js & OAuth Integrations)

- **Rule:** Deal with third-party data imperfections (e.g., missing GitHub emails) at the infrastructure edge, NEVER by weakening the Domain Entity or Database Schema.
- **Rule:** For Auth.js, use the `profile()` callback to normalize data before it hits the adapter.
- **Rule:** Use the `signIn()` callback as an absolute gatekeeper to reject sign-ins that lack required data (e.g., missing emails).
- **Rule:** If a user is missing data required by the Domain, store their session temporarily (Redis/Cookie), route them to an onboarding/completion flow, and ONLY insert them into the database once their profile strictly satisfies the Domain constraints.

### 6. Transport Validation vs. Domain Validation

- **Rule:** ALWAYS use Zod for transport-level input validation (Next.js Server Actions, API routes) to guarantee data shape and format from the client.
- **Rule:** Keep behavior-based and state-transition invariants (e.g., `canRequestVerification()`) inside the Domain Entity.

## Gotchas

- Turbopack enabled in dev (`--turbopack`)
- NextAuth v5 is beta - API may change
- `@/lib/safe-action.ts` wraps next-safe-action with Zod
- Prisma generated client ignored in ESLint (`app/generated/**`)
- MinIO data persisted in `minio-data/` (gitignored)
- Entities are anemic interfaces, not rich domain models
- Two data access paths: use cases (via DI) for writes, DAL for direct reads
