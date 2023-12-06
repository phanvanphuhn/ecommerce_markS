import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import {
  PlanCallActivitySubtype,
  PlanCallActivityType,
  PlanCallOutput,
  PlanCallStatus,
} from 'apollo/query/upsertPlanCall';
import {
  MobileSearchHistoryOutput,
  SearchType,
} from 'apollo/query/upsertSearchHistory';

interface Data {
  data: MobileSearchHistoryOutput[];
}
type OrderDirection = 'asc' | 'desc';
interface Variables {
  searchType?: SearchType;
  skip?: number;
  sort?: OrderDirection;
  take?: number;
}

export let getSearchHistory: TypedDocumentNode<Data, Variables> = gql`
  query getSearchHistory(
    $searchType: SearchType
    $skip: Int
    $sort: OrderDirection
    $take: Int
  ) {
    data: getSearchHistory(
      searchType: $searchType
      skip: $skip
      sort: $sort
      take: $take
    ) {
      createdAt
      id
      name: searchQuery
      searchResults
      searchType
      updatedAt
    }
  }
`;
