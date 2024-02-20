/*
  Warnings:

  - You are about to drop the column `endYear` on the `SliderAndCommission` table. All the data in the column will be lost.
  - You are about to drop the column `startYear` on the `SliderAndCommission` table. All the data in the column will be lost.
  - You are about to drop the column `endYear` on the `TerritoryCategorization` table. All the data in the column will be lost.
  - You are about to drop the column `startYear` on the `TerritoryCategorization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SliderAndCommission" DROP COLUMN "endYear",
DROP COLUMN "startYear",
ADD COLUMN     "year" TEXT;

-- AlterTable
ALTER TABLE "TerritoryCategorization" DROP COLUMN "endYear",
DROP COLUMN "startYear",
ADD COLUMN     "year" TEXT;
