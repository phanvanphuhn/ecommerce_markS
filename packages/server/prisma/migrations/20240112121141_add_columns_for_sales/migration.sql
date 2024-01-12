-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "additionalPayoutCE" TEXT,
ADD COLUMN     "additionalPayoutSC" TEXT,
ADD COLUMN     "commissionPayoutByQuarter_forNewHire" TEXT,
ADD COLUMN     "commissionPercentageByQuarter_forNewHire" TEXT,
ADD COLUMN     "salesAchivementPercentageByQuarter_forNewHire" TEXT,
ADD COLUMN     "salesByMonth_forNewHire" TEXT,
ADD COLUMN     "salesByQuarter_forNewHire" TEXT,
ADD COLUMN     "salesByYear_forNewHire" TEXT,
ADD COLUMN     "variablePayoutByQuarter_forNewHire" TEXT,
ADD COLUMN     "variablePayoutPercentageByQuarter_forNewHire" TEXT;
