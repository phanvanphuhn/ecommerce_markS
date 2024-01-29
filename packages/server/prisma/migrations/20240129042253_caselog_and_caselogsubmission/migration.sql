/*
  Warnings:

  - You are about to drop the column `productIds` on the `CaseLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CaseLog" DROP COLUMN "productIds";

-- CreateTable
CREATE TABLE "CaseLogSubmission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "quantity" TEXT,
    "salesRepEmail" TEXT,
    "caseLogId" UUID,
    "productId" UUID,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CaseLogSubmission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CaseLogSubmission" ADD CONSTRAINT "CaseLogSubmission_caseLogId_fkey" FOREIGN KEY ("caseLogId") REFERENCES "CaseLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseLogSubmission" ADD CONSTRAINT "CaseLogSubmission_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
