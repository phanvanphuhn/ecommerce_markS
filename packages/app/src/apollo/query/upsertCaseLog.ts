import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface CaseLogOutput {
  account: string;
  activityOwnerEmail: string;
  activityOwnerName: string;
  createdAt: Date;
  endDate: Date;
  id: string | number[];
  location: string;
  startDate: Date;
  updatedAt: Date;
  caseName: string;
  contact: string;
  photoPaths: string[];
  productIds: string[];
  secondaryContact: string;
  status: CaseLogStatus;
}
interface Data {
  data: CaseLogOutput[];
}

export type CaseLogStatus = 'CANCELLED' | 'COMPLETED' | 'IN_PROGRESS';

export interface CaseLogSubmissionInputCreate {
  productId: string;

  quantity: string;
}

export interface CaseLogInput {
  account: string;

  activityOwnerEmail: string;

  activityOwnerName: string;

  caseLogSubmissions: CaseLogSubmissionInputCreate[];

  caseName: string;

  contact: string;

  createdAt: Date;

  endDate: Date;

  files: any[];

  id: string;

  location: string;

  photoPaths: string[];

  secondaryContact: string;

  startDate: Date;

  status: string;

  updatedAt: Date;
}
interface Variables {
  data: CaseLogInput;
}

export let upsertCaseLog: TypedDocumentNode<Data, Variables> = gql`
  mutation upsertCaseLog($data: CaseLogInput!) {
    data: upsertCaseLog(data: $data) {
      account
      activityOwnerEmail
      activityOwnerName
      caseName
      contact
      createdAt
      endDate
      id
      location
      secondaryContact
      startDate
      status
      updatedAt
    }
  }
`;
