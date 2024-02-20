/*
  Warnings:

  - You are about to drop the column `year` on the `TerritoryCategorization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SliderAndCommission" ADD COLUMN     "endYear" TEXT,
ADD COLUMN     "startYear" TEXT;

-- AlterTable
ALTER TABLE "TerritoryCategorization" DROP COLUMN "year",
ADD COLUMN     "endYear" TEXT,
ADD COLUMN     "startYear" TEXT;
