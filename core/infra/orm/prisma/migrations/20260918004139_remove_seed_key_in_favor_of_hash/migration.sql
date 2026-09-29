/*
  Warnings:

  - You are about to drop the column `seed_key` on the `groups` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identity_hash]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `academic_import_id` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identity_hash` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "groups_seed_key_key";

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "seed_key",
ADD COLUMN     "academic_import_id" TEXT NOT NULL,
ADD COLUMN     "identity_hash" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "academic_import" (
    "id" TEXT NOT NULL,
    "academic_year_id" TEXT NOT NULL,
    "year_level" "year_level" NOT NULL,
    "specialization" "specialization" NOT NULL,
    "subject_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groups_seeded" INTEGER NOT NULL,
    "groups_skipped" INTEGER NOT NULL,
    "members_resolved" INTEGER NOT NULL,
    "members_not_found" INTEGER NOT NULL,
    "members_conflict" INTEGER NOT NULL,

    CONSTRAINT "academic_import_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "groups_identity_hash_key" ON "groups"("identity_hash");

-- AddForeignKey
ALTER TABLE "academic_import" ADD CONSTRAINT "academic_import_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "academic_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "academic_import" ADD CONSTRAINT "academic_import_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_academic_import_id_fkey" FOREIGN KEY ("academic_import_id") REFERENCES "academic_import"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
