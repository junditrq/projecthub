/*
  Warnings:

  - You are about to drop the column `academic_import_id` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the `academic_import` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "academic_import" DROP CONSTRAINT "academic_import_academic_year_id_fkey";

-- DropForeignKey
ALTER TABLE "academic_import" DROP CONSTRAINT "academic_import_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_academic_import_id_fkey";

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "academic_import_id";

-- DropTable
DROP TABLE "academic_import";
