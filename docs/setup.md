# Local Development & Environment Setup Guide

This guide provides setup instructions for restoring your local development environment for **ProjectHub**, including local PostgreSQL, MinIO storage, database seeding with scraped student group data, and optimal AI pair-programming workflows using OpenCode.

---

## 1. Overview of Restored Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Database**: PostgreSQL 16 (managed via Prisma ORM)
- **Authentication**: Auth.js (NextAuth v5) with Google OAuth Provider and Prisma Adapter
- **Object Storage**: MinIO (S3-compatible local storage via `@aws-sdk/client-s3`)
- **Package Manager**: `pnpm`

---

## 2. Environment Variables (`.env`)

Create a `.env` file in the root of the repository with the following structure (validated at runtime by `env.ts`):

```env
# ==========================================
# Database Configuration (PostgreSQL)
# ==========================================
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/projecthub?schema=public"

# ==========================================
# Authentication (Auth.js / NextAuth v5)
# ==========================================
# Generate a secure secret using: openssl rand -base64 32
AUTH_SECRET="your-32-character-secret-key-goes-here"
AUTH_URL="http://localhost:3000"

# Google OAuth Credentials (Obtain from Google Cloud Console)
# Authorized Redirect URI: http://localhost:3000/api/auth/callback/google
AUTH_GOOGLE_ID="your-google-client-id.apps.googleusercontent.com"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# ==========================================
# Object Storage Configuration (MinIO / S3)
# ==========================================
STORAGE_REGION="us-east-1"
STORAGE_ENDPOINT="http://localhost:9000"
STORAGE_ACCESS_KEY="minioadmin"
STORAGE_SECRET_KEY="minioadmin"
STORAGE_BUCKET_NAME="projecthub-bucket"
```

---

## 3. Local Infrastructure (Docker Compose)

A `docker-compose.yml` file is provided at the repository root to start PostgreSQL and MinIO.

### Spinning Up Services

```bash
docker compose up -d
```

### Access Points

- **PostgreSQL**: `localhost:5432` (User: `postgres`, Password: `postgres`, DB: `projecthub`)
- **MinIO S3 API**: `http://localhost:9000`
- **MinIO Web Console**: `http://localhost:9001` (Credentials: `minioadmin` / `minioadmin`)

> **Note**: MinIO data is persisted locally in `./minio-data`, which is ignored by git. Create `projecthub-bucket` in the MinIO Web Console (`http://localhost:9001`) after starting the container.

---

## 4. Excel Scraper & Database Seeding Workflow

The database seed process (`prisma/seed.ts`) imports initial student and group data from a **TypeScript resource module** at `resources/groups-2025.ts` (imported as `@/resources/groups-2025`).

### 4.1 Pipeline Overview

```
Excel (.xlsx)
  → `get-groups.js` (root-level scraper script, referenced in tsconfig.json)
  → writes `resources/groups-2025.ts` exporting: `export const groups = [...]`
  → `pnpm prisma generate` (generates client to custom output `app/generated/prisma`)
  → `pnpm prisma db push` (syncs schema to local PostgreSQL)
  → `pnpm prisma db seed` (runs `tsx prisma/seed.ts`)
```

### 4.2 Expected `resources/groups-2025.ts` Structure

Each group item has a `projectIdea` name and an array of student Arabic names (`publishers`):

```ts
// resources/groups-2025.ts
export const groups = [
  {
    projectIdea: 'E-commerce Platform with Real-time Inventory',
    publishers: ['أحمد محمد', 'فاطمة علي', 'محمد أحمد'],
  },
  {
    projectIdea: 'AI-Powered Study Assistant',
    publishers: ['سارة عبدالله', 'عمر حسن'],
  },
  // ... more groups
];
```

### 4.3 Excel Scraper Script Example (`get-groups.js`)

Recreate the root-level scraper script that reads your Excel and writes the TS module:

```js
// get-groups.js (run with: node get-groups.js)
import { readFileSync, writeFileSync } from 'fs';
import * as XLSX from 'xlsx';

// Adjust sheet/column names to match your Excel file
const workbook = XLSX.readFile('students_groups.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

const groupsMap = {};

for (const row of rows) {
  const projectIdea = String(row['Project Idea'] || row['Group'] || '').trim();
  const publisher = String(row['Student Name'] || row['Publisher'] || '').trim();
  if (!projectIdea || !publisher) continue;

  if (!groupsMap[projectIdea]) groupsMap[projectIdea] = [];
  groupsMap[projectIdea].push(publisher);
}

const groups = Object.entries(groupsMap).map(([projectIdea, publishers]) => ({
  projectIdea,
  publishers,
}));

const output = `// Auto-generated from students_groups.xlsx
export const groups = ${JSON.stringify(groups, null, 2)};
`;

writeFileSync('resources/groups-2025.ts', output);
console.log('Generated resources/groups-2025.ts with', groups.length, 'groups');
```

> **Dependencies**: `npm i -D xlsx` if not already present. Run with `node get-groups.js`.

### 4.4 Database Setup Commands (Run in Order)

```bash
# 1. Generate Prisma Client (custom output: app/generated/prisma)
pnpm prisma generate

# 2. Push schema to local PostgreSQL
pnpm prisma db push

# 3. Run seed (uses tsx to execute TypeScript seed directly)
pnpm prisma db seed
```

> **Seed Details**: `prisma/seed.ts` also creates hardcoded reference data:
>
> - **Tags**: `["frontend", "backend", "database", "ui/ux", "devops", "mobile", "testing", "documentation"]`
> - **Categories**: `["Web", "Mobile"]`
> - **Academic Year**: `2024-2025` (slug `2024-2025`)
> - **Subject**: `Graduation Project` (slug `graduation-project`)
> - Groups are linked to a **ProjectIdea** per unique `projectIdea` name, with students created via `publishers` array (field `arabicName` on Student model).

---

## 5. OpenCode AI Pair Programming Strategy & Model Optimization

When using OpenCode for solo AI pair programming, managing model rate limits and token usage is critical to maintaining smooth development flow without interruption.

### 5.1 Google AI Studio & Zen Model Tiering

- **Google AI Studio Free Tier**:
  - Gemini Flash models (`google/gemini-2.5-flash`, `google/gemini-3.6-flash`) share identical rate limit parameters on the free tier (Requests Per Minute / Requests Per Day).
  - Use **Gemini Flash** for fast iteration, code editing, and standard completion tasks.
  - Reserve **Gemini Pro** (`google/gemini-2.5-pro`) strictly for high-level system architecture decisions or complex debugging where heavy reasoning is required.
- **Zen API Free Tier**:
  - Zen free models (e.g., `zen/big-pickle`) provide quota-free capability suitable for routine tasks and background subagent exploration without consuming your Google AI Studio daily quota.

---

### 5.2 Deep-Dive: OpenCode `explore` Subagents

OpenCode features specialized autonomous **subagents** that execute targeted sub-tasks off the main conversation thread. The `explore` subagent is specifically designed for codebase navigation, glob searches, and regex content inspection.

#### Why Use the `explore` Subagent?

1. **Context Preservation**: Large codebase searches can pollute your main conversation window with hundreds of file paths or raw code chunks. `explore` runs independently and returns only a concise summary or relevant match list to your primary session.
2. **Token Efficiency**: Delegating file searches to `explore` prevents hitting Gemini API token/rate limits on your primary agent.

#### Thoroughness Levels

When invoking `explore`, you can specify the required thoroughness level:

- `quick`: Best for simple file pattern matching (e.g., finding where a component file lives).
- `medium`: Moderate exploration across source directories and import paths.
- `very thorough`: Comprehensive search across multiple conventions, schemas, tests, and configuration files.

#### Routing `explore` to Free/High-Quota Models

You can configure OpenCode to delegate `explore` tasks to models like Zen's `Big Pickle` or Gemini Flash so your primary agent's quota is preserved.

In your OpenCode configuration file (`.opencode/opencode.json` in project root or `~/.config/opencode/opencode.json` globally):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "default_model": "google/gemini-3.6-flash",
  "subagent_models": {
    "explore": "zen/big-pickle",
    "task": "google/gemini-3.6-flash"
  }
}
```

---

### 5.3 Resource Links & Documentation

- **OpenCode Documentation**: [https://opencode.ai/docs](https://opencode.ai/docs)
- **OpenCode GitHub Repository**: [https://github.com/sst/opencode](https://github.com/sst/opencode)
- **Google AI Studio Rate Limits & Quotas**: [https://ai.google.dev/gemini-api/docs/rate-limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- **Google AI Studio Pricing & Free Tier**: [https://ai.google.dev/pricing](https://ai.google.dev/pricing)
