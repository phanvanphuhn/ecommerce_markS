import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
interface Data {
  data: ItemComplaintResponse[];
}

interface Variables {}

export let GET_COMPLAINTS_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query complaints {
    data: complaints {
      typeOfSituationReporting
      awareDate
      complaintId
      complaintName
      complaintStatus
      complaintTitle
      country
      createdDate
      division
      eventDate
      id
      salesRepEmail
      timeOfEvent
    }
  }
`;
