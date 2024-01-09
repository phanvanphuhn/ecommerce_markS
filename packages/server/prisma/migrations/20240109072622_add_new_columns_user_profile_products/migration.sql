-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "gtin" TEXT;

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "networkId" TEXT,
ADD COLUMN     "personId" TEXT;
