-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateEnum
CREATE TYPE "mobileSalesTargetType" AS ENUM ('year', 'quarter');

-- CreateEnum
CREATE TYPE "SearchType" AS ENUM ('CaseLog', 'PlanCall', 'ContactSearch');

-- CreateTable
CREATE TABLE "ContactSearch" (
    "id" SERIAL NOT NULL,
    "salesRepEmail" TEXT,
    "hospitalId" TEXT,
    "hospital" TEXT,
    "topicsOfInterest" TEXT,
    "doctorName" TEXT,
    "doctorEmail" TEXT,
    "doctorAlternativeEmail" TEXT,
    "doctorDivision" TEXT,
    "doctorProfilePhoto" TEXT,
    "doctorSpecialty" TEXT,
    "doctorSalutation" TEXT,
    "doctorTitle" TEXT,
    "doctorPhone" BIGINT,
    "doctorCountry" TEXT,

    CONSTRAINT "ContactSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "complaintId" TEXT,
    "salesRepEmail" TEXT,
    "complaintName" TEXT,
    "complaintStatus" TEXT,
    "eventDate" TIMESTAMP(3),
    "createdDate" TIMESTAMP(3),
    "complaintTitle" TEXT,
    "division" TEXT,
    "country" TEXT,
    "awareDate" TIMESTAMP(3),
    "timeOfEvent" TEXT,
    "typeOfSituationReporting" TEXT,
    "accName" TEXT,
    "procedureType" TEXT,
    "procedureDate" TIMESTAMP(3),
    "treatedFor" TEXT,
    "procedureOutcome" TEXT,
    "reasonsForUnsuccessfulProcedure" TEXT,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "salesRepEmail" TEXT,
    "fullName" TEXT,
    "country" TEXT,
    "division" TEXT,
    "reportingTo" TEXT,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SliderAndCommission" (
    "id" SERIAL NOT NULL,
    "lowerBound" TEXT,
    "upperBound" TEXT,
    "variablePayoutPercentage" TEXT,
    "territoryCategory" TEXT,
    "commissionPercentage" TEXT,

    CONSTRAINT "SliderAndCommission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TerritoryCategorization" (
    "id" SERIAL NOT NULL,
    "year" TEXT,
    "lowerBound" TEXT,
    "upperBound" TEXT,
    "territoryCategory" TEXT,

    CONSTRAINT "TerritoryCategorization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" SERIAL NOT NULL,
    "salesRepEmail" TEXT,
    "fullName" TEXT,
    "country" TEXT,
    "year" TEXT,
    "quarter" TEXT,
    "month" TEXT,
    "targetAchievedYtd" TEXT,
    "rankYtd" TEXT,
    "targetAchievedQtd" TEXT,
    "rankQtd" TEXT,
    "targetAchievedMtd" TEXT,
    "rankMtd" TEXT,
    "lastRefreshedTimestamp" TIMESTAMP(3),

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sales" (
    "id" SERIAL NOT NULL,
    "salesRepEmail" TEXT,
    "sipEligibility" TEXT,
    "currency" TEXT,
    "year" TEXT,
    "quarter" TEXT,
    "month" TEXT,
    "productType" TEXT,
    "newHire" TEXT,
    "guaranttedPayout" TEXT,
    "mixedBag" TEXT,
    "variablePayByMonth" TEXT,
    "variablePayByYear" TEXT,
    "variablePayByQuarter" TEXT,
    "variablePayQ5" TEXT,
    "salesByMonth" TEXT,
    "salesByYear" TEXT,
    "salesByQuarter" TEXT,
    "targetByMonth" TEXT,
    "targetByYear" TEXT,
    "targetByQuarter" TEXT,
    "salesAchievementPercentageByMonth" TEXT,
    "salesAchievementPercentageByYear" TEXT,
    "salesAchievementPercentageByQuarter" TEXT,
    "variablePayoutPercentageByQuarter" TEXT,
    "variablePayoutPercentageByYear" TEXT,
    "targetByYearUSD" TEXT,
    "territoryCategory" TEXT,
    "commissionPercentageByQuarter" TEXT,
    "commissionPayoutByQuarter" TEXT,
    "variablePayoutByQuarter" TEXT,
    "additionalPayout" TEXT,
    "kicker" TEXT,
    "earlyBirdEligibility" TEXT,
    "earlyBird" TEXT,
    "variablePayoutPercentageQ5" TEXT,
    "variablePayoutQ5" TEXT,
    "commissionPercentageQ5" TEXT,
    "commissionPayoutQ5" TEXT,
    "salesAchievementPercentageByYear_forNewHire" TEXT,
    "variablePayoutPercentageQ5_forNewHire" TEXT,
    "commissionPercentageQ5_forNewHire" TEXT,
    "variablePayoutQ5_forNewHire" TEXT,
    "commissionPayoutQ5_forNewHire" TEXT,
    "capitalEquipment" TEXT,
    "serviceContract" TEXT,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mobile_Sales" (
    "id" SERIAL NOT NULL,
    "salesRepEmail" TEXT,
    "targetByQuarter" TEXT,
    "targetByYear" TEXT,
    "quarter" TEXT,
    "year" TEXT,
    "type" "mobileSalesTargetType" NOT NULL DEFAULT 'year',

    CONSTRAINT "Mobile_Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanCall" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "salesForceId" TEXT,
    "subject" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "description" TEXT,
    "location" TEXT,
    "account" TEXT,
    "contactName" TEXT,
    "division" TEXT,
    "activityType" TEXT,
    "activitySubtype" TEXT,
    "activityOwnerName" TEXT,
    "activityOwnerEmail" TEXT,
    "ownerCountry" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PlanCall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseLog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "caseName" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "account" TEXT,
    "location" TEXT,
    "contact" TEXT,
    "secondaryContact" TEXT,
    "activityOwnerName" TEXT,
    "activityOwnerEmail" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CaseLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchHistory" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "salesRepEmail" TEXT,
    "searchQuery" TEXT,
    "searchType" "SearchType",
    "searchResults" JSONB[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SearchHistory_pkey" PRIMARY KEY ("id")
);
