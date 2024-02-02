import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

interface Data {
  data: IDoctorSearchList[];
}

interface Variables {
  doctorEmail?: string;
  contactId?: string;
}

export let GET_DOCTOR_PROFILE_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query getDoctorProfileByContactId($contactId: String!) {
    data: getDoctorProfileByContactId(contactId: $contactId) {
      contactId
      doctorAlternativeEmail
      doctorCountry
      doctorDivision
      doctorEmail
      doctorName
      doctorPhone
      doctorSalutation
      doctorSpecialty
      doctorTitle
      hospital
      id
      topicsOfInterest
    }
  }
`;
