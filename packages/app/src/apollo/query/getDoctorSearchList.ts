import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

interface Data {
  data: IDoctorSearchList[];
}

interface Variables {
  doctorAlternativeEmail?: string;
  doctorCountry?: string;
  doctorDivisions?: string[];
  doctorName?: string;
  doctorSpecialties?: string[];
  doctorTitle?: string;
  hospital?: string;
  topicsOfInterests?: string[];
}

export let GET_DOCTOR_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query getDoctorSearchList(
    $doctorAlternativeEmail: String
    $doctorCountry: String
    $doctorDivisions: [String!]
    $doctorName: String
    $doctorSpecialties: [String!]
    $doctorTitle: String
    $hospital: String
    $topicsOfInterests: [String!]
  ) {
    data: getDoctorSearchList(
      doctorDivisions: $doctorDivisions
      doctorName: $doctorName
      doctorSpecialties: $doctorSpecialties
      doctorTitle: $doctorTitle
      hospital: $hospital
      topicsOfInterests: $topicsOfInterests
      doctorAlternativeEmail: $doctorAlternativeEmail
      doctorCountry: $doctorCountry
    ) {
      contactId
      doctorAlternativeEmail
      doctorCountry
      doctorDivision
      doctorEmail
      doctorName
      doctorPhone
      doctorSpecialty
      doctorTitle
      hospital
      id
      topicsOfInterest
    }
  }
`;
