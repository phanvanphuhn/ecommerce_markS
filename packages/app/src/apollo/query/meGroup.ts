import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

interface ValueGroup {
  displayName?: string;
  id: string;
}
export interface IDataMeGroup {
  value: ValueGroup[];
}
interface Data {
  data: IDataMeGroup;
}

interface Variables {
  accessToken: string;
}

export let meGroup: TypedDocumentNode<Data, Variables> = gql`
  query Me($accessToken: String!) {
    data: meGroup(accessToken: $accessToken)
  }
`;
