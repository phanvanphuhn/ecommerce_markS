/*
  Warnings:

  - You are about to drop the column `capitalEquipment` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `serviceContract` on the `Sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "capitalEquipment",
DROP COLUMN "serviceContract",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
