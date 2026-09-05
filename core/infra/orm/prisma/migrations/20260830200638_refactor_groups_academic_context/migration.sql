/*
  Warnings:

  - The values [frontend,backend,mobile,monorepo] on the enum `project_repo_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [admin,visitor,student] on the enum `user_role` will be removed. If these variants are still used in the database, this will fail.
  - The values [pending,approved,rejected] on the enum `verification_status` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `project_ideas` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `group_id` on the `students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[project_id,type]` on the table `project_repos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[group_id]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `academic_year_id` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_id` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Made the column `project_idea_id` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `thumbnail_url` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalized_arabic_name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "specialization" AS ENUM ('SWE', 'AI', 'NET', 'GENERAL');

-- CreateEnum
CREATE TYPE "year_level" AS ENUM ('THIRD', 'FOURTH', 'FIFTH');

-- AlterEnum
BEGIN;
CREATE TYPE "project_repo_type_new" AS ENUM ('FRONTEND', 'BACKEND', 'MOBILE', 'MONOREPO', 'AI');
ALTER TABLE "project_repos" ALTER COLUMN "type" TYPE "project_repo_type_new" USING ("type"::text::"project_repo_type_new");
ALTER TYPE "project_repo_type" RENAME TO "project_repo_type_old";
ALTER TYPE "project_repo_type_new" RENAME TO "project_repo_type";
DROP TYPE "project_repo_type_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "user_role_new" AS ENUM ('ADMIN', 'VISITOR', 'STUDENT');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "user_role_new" USING ("role"::text::"user_role_new");
ALTER TYPE "user_role" RENAME TO "user_role_old";
ALTER TYPE "user_role_new" RENAME TO "user_role";
DROP TYPE "user_role_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'VISITOR';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "verification_status_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
ALTER TABLE "verification_requests" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "verification_requests" ALTER COLUMN "status" TYPE "verification_status_new" USING ("status"::text::"verification_status_new");
ALTER TYPE "verification_status" RENAME TO "verification_status_old";
ALTER TYPE "verification_status_new" RENAME TO "verification_status";
DROP TYPE "verification_status_old";
ALTER TABLE "verification_requests" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_project_idea_id_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_project_id_fkey";

-- DropForeignKey
ALTER TABLE "previews" DROP CONSTRAINT "previews_project_id_fkey";

-- DropForeignKey
ALTER TABLE "project_repos" DROP CONSTRAINT "project_repos_project_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_group_id_fkey";

-- DropIndex
DROP INDEX "previews_project_id_key";

-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "academic_year_id" TEXT NOT NULL,
ADD COLUMN     "specialization" "specialization" NOT NULL,
ADD COLUMN     "subject_id" TEXT NOT NULL,
ALTER COLUMN "project_idea_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "likes" DROP CONSTRAINT "likes_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "likes_pkey" PRIMARY KEY ("project_id", "user_id");

-- AlterTable
ALTER TABLE "project_ideas" DROP COLUMN "year";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnail_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "group_id",
ADD COLUMN     "normalized_arabic_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "has_been_prompted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'VISITOR';

-- AlterTable
ALTER TABLE "verification_requests" ADD COLUMN     "rejected_reason" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "academic_years" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "academic_years_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subjects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "year_level" "year_level" NOT NULL,
    "allowed_specializations" "specialization"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_members" (
    "group_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,

    CONSTRAINT "group_members_pkey" PRIMARY KEY ("group_id","student_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "academic_years_label_key" ON "academic_years"("label");

-- CreateIndex
CREATE UNIQUE INDEX "subjects_name_key" ON "subjects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subjects_slug_key" ON "subjects"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "project_repos_project_id_type_key" ON "project_repos"("project_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "projects_group_id_key" ON "projects"("group_id");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_project_idea_id_fkey" FOREIGN KEY ("project_idea_id") REFERENCES "project_ideas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "academic_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_group_id_publisher_student_id_fkey" FOREIGN KEY ("group_id", "publisher_student_id") REFERENCES "group_members"("group_id", "student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_repos" ADD CONSTRAINT "project_repos_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "previews" ADD CONSTRAINT "previews_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
