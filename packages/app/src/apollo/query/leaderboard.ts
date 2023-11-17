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
  period?: LeaderboardPeriod;
  type?: LeaderboardType;
  year: string;
}

export let GET_LEADERBOARD_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query leaderboard(
    $country: String
    $month: String
    $period: LeaderboardPeriod = Month
    $type: LeaderboardType = TopThree
    $year: String!
  ) {
    data: leaderboard(
      country: $country
      month: $month
      period: $period
      type: $type
      year: $year
    ) {
      country
      fullName
      id
      lastRefreshedTimestamp
      month
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
