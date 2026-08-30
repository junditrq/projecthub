# Database Architecture

## 1. Purpose

This document defines the relational data model for the application, including the conceptual ERD, entity classifications, cardinalities, integrity constraints, and recommended referential actions for the Prisma ORM / relational database implementation.

The model separates **application identity** (`User`) from **academic identity** (`Student`), treats `Group` as the authoritative academic context for a project, and models project-related resources and interactions as dependent or associative entities.

The database is intended to preserve the college-provided academic structure as an authoritative historical dataset. Groups and their memberships are seeded from college records and are treated as effectively immutable through normal application operations.

> **Source of truth principle:** `Group` is the SSOT for the academic context of a project. `Project` references `Group` rather than duplicating academic-year, subject, specialization, or project-idea attributes.

---

## 2. Entity classification

### 2.1 Strong / regular entity

A strong (regular) entity has its own independent primary key and can be uniquely identified without borrowing an owner's primary key.

Having foreign keys does **not** make an entity weak. A strong entity may still be existence-dependent on other entities.

Examples in this model include `User`, `Student`, `Group`, `Project`, `ProjectIdea`, `AcademicYear`, and `Subject`.

### 2.2 Weak entity

A weak entity is an entity whose identity depends on an owning entity and whose identifier is normally derived from the owner's key plus a partial key. A typical relational representation uses a composite primary key such as `(owner_id, line_number)`.

No current entity in this model needs to be treated as a classical weak entity.

`ProjectRepo` and `Preview` are **dependent child entities**, but because each has its own surrogate `id`, they are not formally weak entities.

### 2.3 Core / central domain entity

A core or central entity represents an important real-world concept around which other parts of the domain are organized.

`Project` is the central entity of the project-publication domain. `Group` is also a core domain entity because it represents a real academic cohort/context rather than merely serving as a technical join table.

### 2.4 Contextual / historical entity

A contextual or historical entity records the context in which another domain concept occurred.

`Group` represents a concrete academic occurrence of a project idea for a specific academic year, subject, specialization, and fixed student cohort. The cohort's year level is reached transitively through the Group's `Subject` (which carries the `YearLevel`); it is not stored on the Group itself. Multiple groups may share the same academic context because multiple cohorts can work on the same idea/subject/year/specialization combination.

### 2.5 Reference / master data entity

Reference or master entities contain relatively stable domain vocabulary used by other records.

Examples:

- `AcademicYear`
- `Subject`
- `ProjectIdea`
- `Category`
- `Tag`

These are not merely lookup tables: some, especially `ProjectIdea`, have domain meaning in their own right.

### 2.6 Associative entity

An associative entity represents a relationship between other entities when the relationship itself is important enough to model explicitly, commonly because it has its own attributes, constraints, or participates in another relationship.

Examples:

- `GroupMember` — Student membership in a Group
- `Like` — User liking a Project

Both use composite primary keys because the pair of foreign keys naturally identifies the relationship.

### 2.7 Dependent child entity

A dependent child has its own identity but its lifecycle is subordinate to a parent entity.

Examples:

- `ProjectRepo` depends on `Project`
- `Preview` depends on `Project`

Their foreign keys should normally use `onDelete: Cascade` when deleting the parent should also remove the child.

### 2.8 Workflow / transactional entity

A workflow or transactional entity records an operation, state transition, or business interaction.

`VerificationRequest` records a user's request to associate their application account with a seeded student identity and the administrative review of that request.

`Like` is both associative and transactional because it represents a user-to-project interaction and contains `createdAt`.

### 2.9 Identity entities

`User` and `Student` intentionally represent different identities:

- `User` is the application's authentication/account identity.
- `Student` is the canonical academic identity from the college-provided student dataset.

The optional one-to-one link between them is established through the verification workflow.

---

## 3. Domain model overview

### Core flow

```text
User
  │
  │ optional verified link
  ▼
Student
  │
  ├──────── GroupMember ───────► Group
  │                                  │
  │                                  ├── ProjectIdea
  │                                  ├── AcademicYear
  │                                  ├── Subject
  │                                  └── Specialization
  │
  └──────── publisher ─────────► Project
                                  │
                                  ├── ProjectRepo
                                  ├── Preview
                                  ├── Like ◄──────── User
                                  ├── Category
                                  └── Tag
```

### Important domain invariant

For every published project:

```text
(project.group_id, project.publisher_student_id)
    MUST EXIST IN
(group_members.group_id, group_members.student_id)
```

This guarantees that the publisher is a member of the project's group.

The application layer should validate this invariant for clear domain-level errors, while the database should enforce it with a composite foreign key as the final integrity boundary.

---

## 4. Entity relationship diagram — Eraser markup

The following markup reflects the current conceptual model. It intentionally keeps implicit many-to-many relations for relationships that do not need a first-class relation model, while making `GroupMember` and `Like` explicit.

```text
title Entity Relationship Diagram
typeface clean
notation crows-foot

enum user_role {
  ADMIN
  USER
  // no stduent role, cause student is an identity (a verified student)
  // and the role is what can you do (permissions)
}

enum verification_status {
  PENDING
  APPROVED
  REJECTED
}

enum specialization {
  SWE
  AI
  NET
  GENERAL
}

enum project_repo_type {
  FRONTEND
  BACKEND
  MOBILE
  MONOREPO
  AI
}

enum year_level {
  THIRD
  FOURTH
  FIFTH
}


// Main user accounts, created on sign-up currenty by the prisma adapter
users [icon: user, color: blue] {
  id string pk
  name string
  email string
  image string nullable

  role user_role default USER // Role controls permissions
  github_username string nullable
  linkedin_url string nullable

  // prompt the user on first login
  // if they'd like to verify their profile as a sutdent
  has_been_prompted boolean default false
}

academic_years {
  id string pk
  label string // "2024-2025 "
}

subjects {
  id string pk
  name string // parallel programming
  slug string // prallel-programming
  yearLevel year_level // fourth-year
  allowed_specializations specialization[]
}



// Seeded list of all students from the college sheet
// calculate canPublish dynamically
students {
  id string pk
  arabic_name string
  normalized_arabic_name string
  user_id string fk nullable unique // Links to a verified user account
}

// Handles the manual verification process
verification_requests {
  id string pk
  user_id string fk
  reviewedBy string fk nullable // Admin's user_id

  submitted_arabic_name string
  college_id_pic_url string // URL to the uploaded image

  status verification_status default "PENDING"
  createdAt timestamp

  rejected_reason string nullable
}

// Group Instance Tied to a specific Year & Idea
groups {
  id string pk
  project_idea_id string fk
  academic_year_id string fk // 2025-2026
  subject_id string fk
  specialization specialization
}

group_members {
  group_id string pk, fk
  student_id string pk, fk
}


// Canonical Idea (Agnostic)
project_ideas {
  id string pk
  name string
  slug string
  createdAt datetime
}



projects {
  id string pk
  name string
  desc string nullable
  group_id string fk
  publisher_student_id string fk // The publisher must be from the students table and must belong to group_id

  // The pair (group_id, publisher_student_id)
  // must exist in group_members.

  thumbnail string
  createdAt timestamp
}

project_repos {
  id string pk
  type project_repo_type
  project_id string fk
  url string

  // @@unique([type, project_id])
}



// --- Other Tables ---
likes [icon: heart, color: red] {
  project_id string fk, pk
  user_id string fk, pk
  createdAt datetime
}

previews {
  id string pk
  project_id string fk
  url string
}
categories {
  id string pk
  name string
  slug string
}
tags {
  id string pk
  name string
  slug string
}


// --- Relationships ---
project_ideas < groups.project_idea_id
academic_years < groups.academic_year_id
subjects < groups.subject_id
groups - projects.group_id

// A user account can be linked to one student record
users - students.user_id

// The publisher must be a student, and a student can publish many projects (across different years 3rd then 4th then 5th)
students < projects.publisher_student_id

// Verification flow
users < verification_requests.user_id // the user that's initiating the verification request
users  < verification_requests.reviewedBy // the admins verifynig the requests

// Repo-Contributor Link
// for example a student might be part in the frontend repo and the backend repo at the same time
project_repos <> students

// Standard Project Relationships
projects < likes.project_id
users < likes.user_id
projects < previews.project_id
projects <> categories
projects <> tags
projects < project_repos.project_id

groups < group_members.group_id
students < group_members.student_id


```

### Markup notes

1. `GroupMember` is explicit because membership has domain significance and is referenced by the publisher-membership integrity rule.
2. `Like` is explicit because the relationship carries `createdAt` and naturally has a composite primary key `(project_id, user_id)`.
3. `ProjectRepo ↔ Student`, `Project ↔ Category`, and `Project ↔ Tag` remain implicit many-to-many relations because no relationship-specific attributes are currently required.
4. The composite publisher constraint is a relational constraint rather than an ordinary one-column ERD edge; it should be implemented in Prisma as a composite foreign-key relation.

---

## 5. Relationship catalog

### 5.1 User ↔ Student

**Cardinality:** `User 1 ── 0..1 Student`

A User may be associated with at most one seeded Student. A Student may be unverified (`user_id = NULL`) or linked to exactly one User.

**Database constraint:** `students.user_id` is nullable and unique.

**Recommended delete behavior:** `Student.user -> User` should use `onDelete: SetNull` because deleting an application account should not delete the authoritative seeded student record.

---

### 5.2 User ↔ VerificationRequest (requester)

**Cardinality:** `User 1 ── 0..N VerificationRequest`

A User can submit multiple verification requests over time.

**Recommended delete behavior:** If user accounts are hard-deleted, `onDelete: Cascade` is appropriate if verification requests are considered account-owned operational history. If verification records must be retained for compliance/audit purposes, instead retain/anonymize the user or use an archive strategy. This is a domain-policy decision.

---

### 5.3 User ↔ VerificationRequest (reviewer)

**Cardinality:** `User 1 ── 0..N VerificationRequest`

`reviewedBy` is nullable because a request may be pending and therefore have no reviewer yet.

**Recommended delete behavior:** `onDelete: SetNull` so deleting or deactivating a reviewer does not erase the verification request itself.

This relation should be explicitly named in Prisma because `User` and `VerificationRequest` are related twice.

---

### 5.4 ProjectIdea ↔ Group

**Cardinality:** `ProjectIdea 1 ── 1..N Group`

A canonical project idea is instantiated as one or more academic group records, including different years or multiple groups within the same academic context. Every group is seeded together with exactly one project idea, so `Group.projectIdeaId` is non-nullable in the schema.

This supersedes an earlier draft that described the relation as `1 ── 0..N`. That description was incorrect for the current seeding model: a group without a project idea is not a valid historical record.

**Referential action:** `Group.projectIdea -> ProjectIdea` should normally use `onDelete: Restrict` or `NoAction` because deleting a canonical idea that is referenced by historical groups would destroy historical context.

---

### 5.5 AcademicYear ↔ Group

**Cardinality:** `AcademicYear 1 ── 0..N Group`

An academic year contains multiple groups.

**Referential action:** `Restrict` / `NoAction` is recommended. Academic years are reference data used by historical records.

---

### 5.6 Subject ↔ Group

**Cardinality:** `Subject 1 ── 0..N Group`

A subject can have many groups across years and specializations.

**Referential action:** `Restrict` / `NoAction` is recommended because subjects are referenced by historical groups.

---

### 5.7 Group ↔ Student through GroupMember

**Cardinality:** `Group 1 ── 0..N GroupMember` and `Student 1 ── 0..N GroupMember`

This represents the immutable historical membership supplied by the college dataset.

**Primary key:** `(group_id, student_id)`

**Recommended referential actions:**

- `GroupMember.group -> Group`: `Cascade` is reasonable if a group is ever deleted because its membership rows have no meaning independently.
- `GroupMember.student -> Student`: `Restrict` is safer because the Student record is seeded academic data and may be referenced by historical projects.

In practice, the application should not expose arbitrary group membership mutation after seeding.

---

### 5.8 Group ↔ Project

**Cardinality:** `Group 1 ── 0..1 Project`

A group can have **at most one** published project, while each project belongs to exactly one group.

The relationship is therefore **one-to-one from the project's perspective and optional from the group's perspective**: a group may not yet have a published project, but a project cannot exist without a group.

`Group` is the project's **academic source of truth (SSOT)**. The project inherits its academic context through its group, including the project idea, academic year, subject, and specialization. The cohort's year level is reached transitively through the Group's `Subject` (which carries the `YearLevel`); it is not a first-class property of the Group itself.

The one-to-one constraint is enforced at the database level by making `Project.groupId` unique:

```prisma
groupId String @unique
```

---

### 5.9 Student ↔ Project (publisher)

**Cardinality:** `Student 1 ── 0..N Project`

A Student may publish multiple projects across years. Each Project has exactly one publisher student.

**Recommended referential action:** `Restrict` / `NoAction` on `Project.publisherStudent -> Student`. A seeded student record should not be physically deleted while historical projects credit that student.

**Additional integrity rule:** `publisherStudentId` must belong to `Project.groupId`. This is enforced through the composite foreign key described below.

---

### 5.10 GroupMember ↔ Project (publisher-membership constraint)

This is not merely another business relationship; it is a **cross-entity integrity constraint**.

```text
Project(group_id, publisher_student_id)
    REFERENCES
GroupMember(group_id, student_id)
```

The database therefore rejects a project whose publisher is not a member of its selected group.

This should be enforced in Prisma using a composite foreign-key relation.

The application/domain layer should also check membership before attempting persistence so that a meaningful domain error can be returned instead of exposing a low-level foreign-key violation.

---

### 5.11 Project ↔ ProjectRepo

**Cardinality:** `Project 1 ── 0..N ProjectRepo`

Repositories are project-owned child entities.

**Referential action:** `onDelete: Cascade`.

Deleting a Project should delete its repositories because a repository record has no independent meaning without its project in this model.

**Business uniqueness:** If each project can have at most one repository of each `project_repo_type`, enforce:

```prisma
@@unique([projectId, type])
```

If multiple repositories of the same type are a valid future requirement, omit this constraint.

---

### 5.12 ProjectRepo ↔ Student

**Cardinality:** `ProjectRepo N ── M Student`

A student can contribute to multiple repositories, and a repository can have multiple student contributors.

The relation is currently implicit in Prisma because it has no relation-specific attributes.

If contribution metadata is introduced later, such as `role`, `joinedAt`, or `isMaintainer`, convert it to an explicit associative model such as `ProjectRepoContributor`.

Because this is an implicit m:n relation, Prisma does not allow custom `onDelete`/`onUpdate` actions on the relation itself; custom referential actions require an explicit relation model.

---

### 5.13 Project ↔ Like ↔ User

**Cardinality:** `Project 1 ── 0..N Like` and `User 1 ── 0..N Like`

`Like` is an explicit associative/transactional entity because it contains `createdAt`.

**Primary key:** `(project_id, user_id)`

This enforces at most one like per user per project.

**Project deletion:** `onDelete: Cascade` is recommended: deleting the project removes its likes.

**User deletion:** this is a product policy decision:

- `Cascade`: remove the user's likes with the deleted account.
- `SetNull`: preserve aggregate like counts but anonymize the user, which requires `userId` to become nullable and changes the uniqueness semantics.
- Soft-delete/archive the User: preserve historical relationships without exposing the account as active.

The schema should make an intentional choice rather than relying on an accidental default.

---

### 5.14 Project ↔ Preview

**Cardinality:** `Project 1 ── 0..N Preview`

Previews are project-owned child resources.

**Referential action:** `onDelete: Cascade`.

---

### 5.15 Project ↔ Category

**Cardinality:** `Project N ── M Category`

Currently modeled as an implicit many-to-many relation because the association has no additional attributes.

Prisma manages the underlying relation table.

If category assignment later gains metadata, convert to an explicit model.

---

### 5.16 Project ↔ Tag

**Cardinality:** `Project N ── M Tag`

Currently modeled as an implicit many-to-many relation for the same reason as categories.

### 5.17 Subject constraints

`Subject` carries two properties that constrain how `Group` rows can be formed against it:

- `yearLevel: YearLevel` — the academic year level at which the subject is taught. The schema types this as the `YearLevel` enum (`THIRD`, `FOURTH`, `FIFTH`) rather than a raw `Int`, so a `Group` cannot be persisted against an invalid year level.
- `allowedSpecializations: Specialization[]` — the set of `Specialization` values (`SWE`, `AI`, `NET`, `GENERAL`) that the subject accepts. When a `Group` is created or updated, the application layer must verify that `Group.specialization` is contained in the referenced `Subject.allowedSpecializations`. The database does not enforce this constraint today; it is treated as a domain validation rule with a meaningful error path, mirroring the layered approach described in §8.

These properties exist so the academic catalogue can express, for example, that "project 1" is taught in the third year and only to the `GENERAL` specialization. A `Group` whose subject is "project 1" with `specialization = AI` should be rejected by the domain before it reaches the database.

The `(subject, specialization)` check is intentionally not duplicated at the database level because `allowedSpecializations` is catalog metadata stored on `Subject`, and PostgreSQL `CHECK` constraints cannot safely enforce predicates against another table; enforcing it through a trigger would add database-specific complexity without meaningful benefit for the current seeded/immutable Group lifecycle.

---

## 6. Referential-action policy

The current schema intentionally uses Prisma's default referential actions for most relationships.

At this stage, deletion semantics for `User`, `Student`, `Group`, and the academic reference entities have not been established as business requirements. Those decisions should be made later when account deletion, historical retention, and lifecycle policies are explicitly defined.

The only referential actions intentionally specified at this stage are cascades for project-owned child entities.

| Parent         | Child / FK                       | `onDelete`         | Current rationale                                                                                                                            |
| -------------- | -------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `User`         | `Student.userId`                 | **Prisma default** | Account/student deletion policy has not yet been decided.                                                                                    |
| `User`         | `VerificationRequest.userId`     | **Prisma default** | Verification-record retention and account-deletion semantics are intentionally deferred.                                                     |
| `User`         | `VerificationRequest.reviewedBy` | **Prisma default** | Reviewer deletion semantics are intentionally deferred.                                                                                      |
| `ProjectIdea`  | `Group.projectIdeaId`            | **Prisma default** | Academic-data deletion policy has not yet been established.                                                                                  |
| `AcademicYear` | `Group.academicYearId`           | **Prisma default** | Academic reference-data deletion policy has not yet been established.                                                                        |
| `Subject`      | `Group.subjectId`                | **Prisma default** | Academic reference-data deletion policy has not yet been established.                                                                        |
| `Group`        | `GroupMember.groupId`            | **Prisma default** | Group lifecycle and deletion semantics are intentionally deferred.                                                                           |
| `Student`      | `GroupMember.studentId`          | **Prisma default** | Student lifecycle and historical-data retention are intentionally deferred.                                                                  |
| `Group`        | `Project.groupId`                | **Prisma default** | Group deletion semantics are not yet a business decision.                                                                                    |
| `Student`      | `Project.publisherStudentId`     | **Prisma default** | Student/account deletion and project attribution policy are intentionally deferred.                                                          |
| `Project`      | `ProjectRepo.projectId`          | **Cascade**        | A repository is a project-owned child and has no independent meaning without its project.                                                    |
| `Project`      | `Preview.projectId`              | **Cascade**        | A preview is a project-owned child and has no independent meaning without its project.                                                       |
| `Project`      | `Like.projectId`                 | **Cascade**        | A like has no meaning without the project it belongs to.                                                                                     |
| `User`         | `Like.userId`                    | **Prisma default** | Account-deletion and historical engagement policy will be decided later.                                                                     |
| Implicit m:n   | Relation table                   | **Prisma-managed** | Implicit many-to-many relations use Prisma-managed relation tables; explicit referential-action control requires an explicit relation model. |

### Prisma defaults

Where this document says **Prisma default**, the schema does not explicitly specify an `onDelete` action. Prisma therefore applies the default referential action according to the relation's required/optional cardinality.

These defaults are not intended to represent the final business policy. They are simply the current behavior until deletion and retention semantics are deliberately designed.

When a business rule is established, the corresponding relation should be changed to an explicit referential action and documented here.

### Current policy boundary

The project currently makes an explicit decision only for entities that are clearly owned by a `Project`:

- `ProjectRepo.projectId` → `Cascade`
- `Preview.projectId` → `Cascade`
- `Like.projectId` → `Cascade`

All other deletion semantics are intentionally left at Prisma's defaults until the corresponding business lifecycle policies are defined.

This is deliberate. Referential actions should encode established domain rules rather than speculative future behavior.

---

## 7. Prisma implementation notes

### 7.1 Explicit many-to-many vs implicit many-to-many

Prisma recommends implicit many-to-many relations when no additional data is required on the relation table. The relation table still exists in the underlying relational database; Prisma simply manages it and does not expose it as a Prisma model.

Use an explicit associative model when:

- the relationship has attributes;
- the relationship needs its own constraints;
- the relationship participates in another relation; or
- custom referential actions are required.

This is why `GroupMember` and `Like` are explicit, while `Project ↔ Category`, `Project ↔ Tag`, and the current `ProjectRepo ↔ Student` relation can remain implicit.

### 7.2 Composite primary keys

`GroupMember`:

```prisma
@@id([groupId, studentId])
```

`Like`:

```prisma
@@id([projectId, userId])
```

The composite key expresses the natural identity of each association.

### 7.3 Composite publisher foreign key

The publisher rule should be represented in the Prisma schema with a relation whose scalar fields are:

```prisma
fields: [groupId, publisherStudentId]
```

and whose referenced fields are:

```prisma
references: [groupId, studentId]
```

The referenced `GroupMember` model therefore needs a matching compound primary key or compound unique constraint.

### 7.4 Multiple relations between the same models

`User` and `VerificationRequest` are related twice:

1. the user who submitted the request;
2. the user who reviewed the request.

These relations should be explicitly named in Prisma with relation names to remove ambiguity.

---

## 8. Application/domain validation vs database constraints

The architecture should use both layers, but for different responsibilities.

### Application/domain layer

Use the domain/application layer for business-oriented validation and user-facing errors:

```text
Create Project
    ↓
Validate verified publisher
    ↓
Validate publisher is a member of selected Group
    ↓
Construct valid Project
    ↓
Repository persistence
```

### Database layer

Use database constraints as the final integrity boundary:

- primary keys
- unique constraints
- foreign keys
- composite foreign keys
- referential actions
- non-null constraints

The same invariant can therefore be checked twice without duplicating ownership of the rule: the application provides the domain experience; the database guarantees structural integrity.

---

## 9. Invariants and business rules

### Identity / verification

1. Every `Student` originates from the seeded college dataset.
2. A `Student` may be linked to at most one `User`.
3. A `User` may be linked to at most one `Student`.
4. Only a successfully verified student should be allowed to publish a project.

### Groups

1. A `Group` represents a real historical academic cohort/context.
2. Multiple groups may share the same project idea, academic year, subject, and specialization.
3. Therefore, `(projectIdeaId, academicYearId, subjectId, specialization)` must **not** be treated as a unique identifier for `Group`.
4. Group membership is seeded from authoritative college data.
5. Normal application operations should treat group membership as immutable.

### Projects

1. Every project belongs to exactly one group.
2. Every project has exactly one publisher student.
3. The publisher must belong to the project's group.
4. Project academic context is derived from the referenced group rather than duplicated on the project.

### Likes

1. A user may like a project at most once.
2. This is enforced by the composite primary key `(projectId, userId)`.

### Project repositories

1. Every repository belongs to exactly one project.
2. A repository cannot exist independently of its project.
3. One repo per `project_repo_type` should be enforced with `@@unique([projectId, type])` only if that is a true domain rule.

---

## 10. Deletion and archival philosophy

The college academic records (`Student`, `Group`, `AcademicYear`, and related historical relationships) should be treated as archival domain data rather than ordinary user-generated CRUD records.

The preferred behavior is therefore:

- **Cascade** for disposable, project-owned children such as repositories, previews, and project likes.
- **Restrict / NoAction** for historical parent records whose deletion would invalidate published historical data.
- **SetNull** where an optional reference should disappear without deleting the historical record, such as the account link on `Student` or the reviewer of a verification request.
- A deliberate account-deletion policy for `User` activity such as likes; do not let this be determined accidentally by Prisma defaults.

---

## 11. Design decisions and rationale

### Why Group has its own primary key

`Group` is a first-class historical domain entity, not a pure join table. Two distinct student cohorts can share exactly the same project idea, academic year, subject, and specialization while still being different groups. Therefore a surrogate `Group.id` is appropriate.

### Why GroupMember is explicit

Although the relationship could technically be modeled as Prisma implicit many-to-many, making it explicit allows the membership relation to participate in the composite publisher-membership constraint and makes the seeded membership data visible in the domain model.

### Why ProjectRepo has its own primary key

`ProjectRepo` is a project-owned domain resource that may itself participate in a many-to-many contributor relation. A surrogate key keeps it easy to reference independently while a separate compound uniqueness rule can enforce business uniqueness such as one repo per project/type.

### Why Like uses a composite primary key

A Like is primarily an association between one User and one Project. `(projectId, userId)` is therefore its natural identity, and the composite key simultaneously prevents duplicate likes.

---

## 12. Recommended Prisma documentation references

Official Prisma v6 documentation:

- [Relations](https://docs.prisma.io/docs/orm/v6/prisma-schema/data-model/relations)
- [One-to-many relations](https://docs.prisma.io/docs/orm/v6/prisma-schema/data-model/relations/one-to-many-relations)
- [Many-to-many relations](https://docs.prisma.io/docs/orm/v6/prisma-schema/data-model/relations/many-to-many-relations)
- [Referential actions](https://docs.prisma.io/docs/orm/v6/prisma-schema/data-model/relations/referential-actions)
- [Compound IDs and unique constraints](https://docs.prisma.io/docs/orm/v6/prisma-client/special-fields-and-types/working-with-composite-ids-and-constraints)
- [Troubleshooting relations](https://docs.prisma.io/docs/orm/v6/prisma-schema/data-model/relations/troubleshooting-relations)

Prisma's v6 documentation confirms that implicit many-to-many relations are backed by a relation table in relational databases, but custom referential actions and multi-field IDs require explicit many-to-many modeling. It also documents compound IDs via `@@id` and referential actions such as `Cascade`, `Restrict`, `NoAction`, and `SetNull`.

---

## 13. Review checklist

Before implementing the schema, verify these decisions explicitly:

- [ ] The composite `Project -> GroupMember` foreign key is implemented in Prisma and the database.
- [ ] `@@unique([projectId, type])` for `ProjectRepo` is added only if one repo per type is a real invariant.
- [ ] Historical `Student`/`Group` records are protected from destructive deletion.
- [ ] Relations between `User` and `VerificationRequest` are given distinct Prisma relation names.
- [ ] Domain-layer validation mirrors important database invariants for useful application errors.
