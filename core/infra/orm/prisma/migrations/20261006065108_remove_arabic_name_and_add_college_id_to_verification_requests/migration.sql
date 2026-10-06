/*
  Warnings:

  - You are about to drop the column `submitted_arabic_name` on the `verification_requests` table. All the data in the column will be lost.
  - Added the required column `student_id` to the `verification_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "verification_requests" DROP COLUMN "submitted_arabic_name",
ADD COLUMN     "student_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "verification_requests" ADD CONSTRAINT "verification_requests_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
