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
  salesRepEmail: string;
  timeOfEvent: string;
  typeOfSituationReporting: string;
}
interface Data {
  data: ItemComplaintResponse;
}

interface Variables {
  id: number;
}

export let GET_COMPLAINT_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query complaint($id: Int!) {
    data: complaint(id: $id) {
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
