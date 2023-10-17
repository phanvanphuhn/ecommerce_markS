import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

interface Data {
  data: IDoctorSearchList[];
}

interface Variables {
  doctorDivision?: string;
  doctorName?: string;
  doctorSpecialty?: string;
  doctorTitle?: string;
  hospital?: string;
  salesRepEmail: string;
}

export let GET_SPECIALTY_LIST_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query getFilterSpecialtyList(
    $doctorDivision: String
    $doctorName: String
    $doctorSpecialty: String
    $doctorTitle: String
    $hospital: String
    $salesRepEmail: String!
  ) {
    data: getFilterSpecialtyList(
      doctorDivision: $doctorDivision
      doctorName: $doctorName
      doctorSpecialty: $doctorSpecialty
      doctorTitle: $doctorTitle
      hospital: $hospital
      salesRepEmail: $salesRepEmail
    ) {
      doctorDivision
      doctorEmail
      doctorName
      doctorPhone
      doctorSpecialty
      doctorTitle
      hospital
      id
    }
  }
`;
