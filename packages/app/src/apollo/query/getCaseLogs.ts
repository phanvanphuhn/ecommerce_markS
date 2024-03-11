import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import {
  PlanCallActivitySubtype,
  PlanCallActivityType,
  PlanCallOutput,
  PlanCallStatus,
} from 'apollo/query/upsertPlanCall';
export interface DataCaseLog {
  type: 'case' | 'call';
  account: string;
  activityOwnerEmail: string;
  activityOwnerName: string;
  caseLogSubmission: {
    caseLogId: string;
    createdAt: string;
    id: string;
    productId: string;
    quantity: string;
    salesRepEmail: string;
    updatedAt: string;
  };
  caseName: string;
  contact: string;
  createdAt: string;
  endDate: string;
  id: string;
  location: string;
  photoPaths: string[];
  secondaryContact: string;
  startDate: string;
  status: string;
  updatedAt: string;
}
interface Data {
  data: DataCaseLog[];
}

interface Variables {}

export let getCaseLogs: TypedDocumentNode<Data, Variables> = gql`
  query GetCaseLogs {
    data: getCaseLogs {
      account
      activityOwnerEmail
      activityOwnerName
      caseLogSubmission {
        caseLogId
        createdAt
        id
        productId
        quantity
        salesRepEmail
        updatedAt
      }
      caseName
      contact
      createdAt
      endDate
      id
      location
      photoPaths
      secondaryContact
      startDate
      status
      updatedAt
    }
  }
`;
