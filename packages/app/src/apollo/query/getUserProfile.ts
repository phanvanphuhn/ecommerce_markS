import {gql, TypedDocumentNode} from '@apollo/client';
import {UserProfile} from 'res/type/Auth';

interface Data {
  data: UserProfile[];
}

interface Variables {}

export let getUserProfile: TypedDocumentNode<Data, Variables> = gql`
  query getUserProfile {
    data: getUserProfile {
      country
      division
      fullName
      id
      reportingTo
      salesRepEmail
      title
      leaderboard {
        country
        fullName
        month
        rankMtd
        rankYtd
        salesRepEmail
        targetAchievedMtd
        targetAchievedQtd
        targetAchievedYtd
        year
      }
    }
  }
`;
