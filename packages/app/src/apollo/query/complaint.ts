import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
export interface ItemComplaintResponse {
  awareDate: string;
  complaintId: string;
  complaintName: string;
  complaintStatus: string;
  complaintTitle: string;
  country: string;
  createdDate: string;
  division: string;
  eventDate: string;
  id: number;
  recordType: string;
  salesRepEmail: string;
  timeOfEvent: string;
}
interface Data {
  data: ItemComplaintResponse;
}

interface Variables {}

export let GET_COMPLAINT_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query complaint {
    data: complaint {
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
      recordType
      salesRepEmail
      timeOfEvent
    }
  }
`;
