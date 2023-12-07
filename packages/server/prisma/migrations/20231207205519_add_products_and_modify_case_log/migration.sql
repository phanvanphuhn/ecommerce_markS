-- CreateEnum
CREATE TYPE "CaseLogStatus" AS ENUM ('In_Progress', 'Completed', 'Cancelled');

-- AlterTable
ALTER TABLE "CaseLog" ADD COLUMN     "photoPaths" TEXT[],
ADD COLUMN     "productIds" TEXT[],
ADD COLUMN     "status" TEXT;

-- CreateTable
CREATE TABLE "Products" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "upn" TEXT,
    "upnDescription" TEXT,
    "country" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
