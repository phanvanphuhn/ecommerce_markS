import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
interface TerritoryCategorizationResponse {
  lowerBound: string;
  territoryCategory: string;
  upperBound: string;
  year: string;
}
interface Data {
  data: TerritoryCategorizationResponse[];
}

interface Variables {}

export let getTerritoryCategorization: TypedDocumentNode<Data, Variables> = gql`
  query getTerritoryCategorization {
    data: getTerritoryCategorization {
      lowerBound
      territoryCategory
      upperBound
      year
    }
  }
`;
