import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
export interface SliderAndCommisionsResponse {
  commissionPercentage: string;
  lowerBound: string;
  territoryCategory: string;
  upperBound: string;
  variablePayoutPercentage: string;
}
interface Data {
  data: SliderAndCommisionsResponse[];
}

interface Variables {}

export let getSliderAndCommisions: TypedDocumentNode<Data, Variables> = gql`
  query getSliderAndCommisions {
    data: getSliderAndCommisions {
      commissionPercentage
      lowerBound
      territoryCategory
      upperBound
      variablePayoutPercentage
    }
  }
`;
