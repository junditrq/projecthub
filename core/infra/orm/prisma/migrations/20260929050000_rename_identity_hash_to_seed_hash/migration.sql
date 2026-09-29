-- DropIndex
DROP INDEX "groups_identity_hash_key";

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "identity_hash",
ADD COLUMN     "seed_hash" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "groups_seed_hash_key" ON "groups"("seed_hash");

