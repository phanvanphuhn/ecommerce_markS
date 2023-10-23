import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

export interface IDataUserProfile {
  country: string;
  division: string;
  fullName: string;
  id: number;
  reportingTo: string;
  salesRepEmail: string;
}
interface Data {
  data: IDataUserProfile;
}

interface Variables {}

export let GET_USER_PROFILE_BY_SALES_REP_EMAIL: TypedDocumentNode<
  Data,
  Variables
> = gql`
  query GetUserProfileBySalesRepEmail {
    getUserProfileBySalesRepEmail {
      country
      division
      fullName
      id
      reportingTo
      salesRepEmail
    }
  }
`;
