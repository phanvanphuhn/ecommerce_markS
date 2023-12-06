import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

interface Data {
  data: string[];
}

interface Variables {}

export let GET_TOPICS_LIST_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query getFilterTopicsOfInterestList {
    data: getFilterTopicsOfInterestList
  }
`;
