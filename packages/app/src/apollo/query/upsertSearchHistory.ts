import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface MobileSearchHistoryOutput {
  createdAt: string;
  id: string;
  searchQuery: string;
  searchResults: object;
  searchType: SearchType;
  updatedAt: string;
}
interface Data {
  data: MobileSearchHistoryOutput[];
}

export type SearchType = 'CaseLog' | 'ContactSearch' | 'PlanCall';
export interface MobileSearchHistoryInput {
  searchQuery: string;
  searchType: SearchType[];
}
interface Variables {
  data: MobileSearchHistoryInput;
}

export let upsertSearchHistory: TypedDocumentNode<Data, Variables> = gql`
  mutation upsertSearchHistory($data: MobileSearchHistoryInput!) {
    data: upsertSearchHistory(data: $data) {
      createdAt
      id
      searchQuery
      searchResults
      searchType
      updatedAt
    }
  }
`;
