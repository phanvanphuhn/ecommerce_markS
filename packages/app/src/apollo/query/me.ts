import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

export interface IDataMe {
  aio: string;
  aud: string;
  email: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  name: string;
  nbf: number;
  nonce: string;
  oid: string;
  onprem_sid: string;
  preferred_username: string;
  rh: string;
  sub: string;
  tid: string;
  upn: string;
  uti: string;
  ver: string;
}
interface Data {
  data: IDataMe;
}

interface Variables {}

export let GET_ME: TypedDocumentNode<Data, Variables> = gql`
  query Me {
    data: me
  }
`;
