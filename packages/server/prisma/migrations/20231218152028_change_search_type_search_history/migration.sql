/*
  Warnings:

  - Changed the column `searchType` on the `SearchHistory` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "SearchHistory" ALTER COLUMN "searchType" SET DATA TYPE "SearchType"[] USING ARRAY["searchType"::"SearchType"];
