-- CreateTable
CREATE TABLE "SalesInvoices" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "invoiceNumber" TEXT,
    "accountName" TEXT,
    "salesRepEmail" TEXT,
    "value" TEXT,
    "currency" TEXT,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SalesInvoices_pkey" PRIMARY KEY ("id")
);
