import { Territory } from "@prisma/client";

import { DIVISIONS } from "../../src/common/types/divisions";

type ActualTerritory = Omit<
  Territory,
  "id" | "division" | "createdAt" | "updatedAt" | "territoryId"
> & {
  division: DIVISIONS;
};

export const territories: ActualTerritory[] = [
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.AC,
    description: "Atlantic Coast",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.CRM,
    description: "Cardiac Rhythm Management",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.ENDO,
    description: "Endoscopy",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.EP,
    description: "Electrophysiology",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.IC,
    description: "Interventional Cardiology",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.LAAC,
    description: "Left Atrial Appendage Closure",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.NM,
    description: "Neuromodulation",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.PI,
    description: "Peripheral Interventions",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.UROPH,
    description: "UroPH",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.TAVR,
    description: "TAVR",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.AC,
    description: "Atlantic Coast",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.AC,
    description: "Atlantic Coast",
    productType: "US",
  },
  {
    countryName: "United States",
    countryCode: "US",
    division: DIVISIONS.AC,
    description: "Atlantic Coast",
    productType: "US",
  },
];
