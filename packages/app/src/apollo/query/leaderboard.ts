import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface ItemLeaderBoardResponse {
  country: string;
  fullName: string;
  id: number;
  lastRefreshedTimestamp: string;
  month: string;
  rankMtd: string;
  rankQtd: string;
  rankYtd: string;
  salesRepEmail: string;
  targetAchievedMtd: string;
  targetAchievedQtd: string;
  targetAchievedYtd: string;
  year: string;
}
interface Data {
  data: ItemLeaderBoardResponse[];
}
type LeaderboardPeriod = 'Month' | 'Quarter' | 'Year';
type LeaderboardType = 'Surrounding' | 'TopThree';

interface Variables {
  country?: string;
  month?: string;
  quarter?: string;
  sortBy?: LeaderboardPeriod;
  type?: LeaderboardType;
  year: string;
}

export let GET_LEADERBOARD_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query leaderboard(
    $month: String
    $quarter: String
    $year: String
    $country: String
    $sortBy: LeaderboardPeriod
    $type: LeaderboardType
  ) {
    data: leaderboard(
      month: $month
      quarter: $quarter
      year: $year
      country: $country
      sortBy: $sortBy
      type: $type
    ) {
      country
      fullName
      id
      lastRefreshedTimestamp
      month
      quarter
      rankMtd
      rankQtd
      rankYtd
      salesRepEmail
      targetAchievedMtd
      targetAchievedQtd
      targetAchievedYtd
      year
    }
  }
`;
