/*
  Warnings:

  - The primary key for the `PlanCall` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `PlanCall` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `PlanCall` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PlanCall` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PlanCall" DROP CONSTRAINT "PlanCall_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdInApp" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastModifiedInApp" TIMESTAMP(3),
ADD COLUMN     "uniqueIdInApp" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "PlanCall_pkey" PRIMARY KEY ("uniqueIdInApp");
