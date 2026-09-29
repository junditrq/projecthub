/*
  Warnings:

  - You are about to drop the column `arabic_name` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `normalized_arabic_name` on the `students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[seed_key]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `project_ideas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[college_id]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seed_key` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canonical_full_name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `college_id` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `father_name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalized_name` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "unresolved_group_member_type" AS ENUM ('NAME_CONFLICT', 'STUDENT_NOT_FOUND');

-- DropForeignKey
ALTER TABLE "group_members" DROP CONSTRAINT "group_members_group_id_fkey";

-- DropForeignKey
ALTER TABLE "group_members" DROP CONSTRAINT "group_members_student_id_fkey";

-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "seed_key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "arabic_name",
DROP COLUMN "normalized_arabic_name",
ADD COLUMN     "canonical_full_name" TEXT NOT NULL,
ADD COLUMN     "college_id" TEXT NOT NULL,
ADD COLUMN     "father_name" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "normalized_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "unresolved_group_members" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "student_id" TEXT,
    "conflict_name" TEXT NOT NULL,
    "unresolved_type" "unresolved_group_member_type" NOT NULL,

    CONSTRAINT "unresolved_group_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "groups_seed_key_key" ON "groups"("seed_key");

-- CreateIndex
CREATE UNIQUE INDEX "project_ideas_name_key" ON "project_ideas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "students_college_id_key" ON "students"("college_id");

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unresolved_group_members" ADD CONSTRAINT "unresolved_group_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unresolved_group_members" ADD CONSTRAINT "unresolved_group_members_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
