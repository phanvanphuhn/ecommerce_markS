import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
export interface SalesOutput {
  additionalPayout: string;
  commissionPayoutByQuarter: string;
  commissionPayoutQ5: string;
  commissionPayoutQ5_forNewHire: string;
  commissionPercentageByQuarter: string;
  commissionPercentageQ5: string;
  commissionPercentageQ5_forNewHire: string;
  earlyBird: string;
  earlyBirdEligibility: string;
  guaranttedPayout: string;
  kicker: string;
  mixedBag: string;
  month: string;
  newHire: string;
  productType: string;
  quarter: string;
  salesAchievementPercentageByMonth: string;
  salesAchievementPercentageByQuarter: string;
  salesAchievementPercentageByYear: string;
  salesAchievementPercentageByYear_forNewHire: string;
  salesByMonth: string;
  salesByQuarter: string;
  salesByYear: string;
  salesRepEmail: string;
  targetByMonth: string;
  targetByQuarter: string;
  targetByYear: string;
  targetByYearUSD: string;
  territoryCategory: string;
  variablePayByMonth: string;
  variablePayByQuarter: string;
  variablePayByYear: string;
  variablePayQ5: string;
  variablePayoutByQuarter: string;
  variablePayoutPercentageByQuarter: string;
  variablePayoutPercentageByYear: string;
  variablePayoutPercentageQ5: string;
  variablePayoutPercentageQ5_forNewHire: string;
  variablePayoutQ5: string;
  variablePayoutQ5_forNewHire: string;
  year: string;
  totalSales: string;
  capitalEquipment: string;
  serviceContract: string;
}
interface Data {
  data?: SalesOutput[];
}

interface Variables {
  month?: string;
  quarter?: string;
  year?: string;
}

export let getSales: TypedDocumentNode<Data, Variables> = gql`
  query getSales($month: String, $quarter: String, $year: String) {
    data: getSales(month: $month, quarter: $quarter, year: $year) {
      additionalPayout
      commissionPayoutByQuarter
      commissionPayoutQ5
      commissionPayoutQ5_forNewHire
      commissionPercentageByQuarter
      commissionPercentageQ5
      commissionPercentageQ5_forNewHire
      earlyBird
      earlyBirdEligibility
      guaranttedPayout
      kicker
      mixedBag
      month
      newHire
      productType
      quarter
      salesAchievementPercentageByMonth
      salesAchievementPercentageByQuarter
      salesAchievementPercentageByYear
      salesAchievementPercentageByYear_forNewHire
      salesByMonth
      salesByQuarter
      salesByYear
      salesRepEmail
      targetByMonth
      targetByQuarter
      targetByYear
      targetByYearUSD
      territoryCategory
      variablePayByMonth
      variablePayByQuarter
      variablePayByYear
      variablePayQ5
      variablePayoutByQuarter
      variablePayoutPercentageByQuarter
      variablePayoutPercentageByYear
      variablePayoutPercentageQ5
      variablePayoutPercentageQ5_forNewHire
      variablePayoutQ5
      variablePayoutQ5_forNewHire
      year
      serviceContract
      capitalEquipment
    }
  }
`;
