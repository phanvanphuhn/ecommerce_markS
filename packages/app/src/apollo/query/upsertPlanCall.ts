import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface PlanCallOutput {
  account: string;
  type: 'case' | 'call';
  activityOwnerEmail: string;
  activityOwnerName: string;
  activitySubtype: PlanCallActivitySubtype;
  activityType: PlanCallActivityType;
  contactName: string;
  createdAt: string;
  description: string;
  division: string;
  endDate: string;
  id: string;
  location: string;
  ownerCountry: string;
  salesForceId: string;
  startDate: string;
  status: PlanCallStatus;
  subject: string;
  updatedAt: string;
  contactId: string;
}
interface Data {
  data: PlanCallOutput[];
}

export type PlanCallActivitySubtype =
  | 'CALL'
  | 'CASE_SUPPORT'
  | 'EDETAILING'
  | 'EDETAILING_VIRTUAL'
  | 'EMAIL'
  | 'FOLLOW_UP'
  | 'MARKETING_MATERIAL_PREPARATION'
  | 'MEETING'
  | 'OTHER'
  | 'PRECEPTORSHIP'
  | 'PROCTORSHIP'
  | 'PRODUCT_DEMO'
  | 'REMOTE_CASE_SUPPORT'
  | 'SEND_LETTER'
  | 'SEND_QUOTE'
  | 'WEBINARS';

export type PlanCallActivityType = 'EVENT' | 'TASK';
export type PlanCallStatus = 'CANCELLED' | 'COMPLETED' | 'IN_PROGRESS';

export interface PlanCallInput {
  account?: string;
  activityOwnerEmail?: string;
  activityOwnerName?: string;
  activitySubtype: PlanCallActivitySubtype;
  activityType?: PlanCallActivityType;
  contactName?: string;
  description?: string;
  division?: string;
  endDate?: Date;
  location?: string;
  ownerCountry?: string;
  salesForceId?: string;
  startDate?: Date;
  status?: PlanCallStatus;
  subject?: string;
  contactId?: string;
}
interface Variables {
  data: PlanCallInput;
}

export let MUTATION_DATA_CALL_QUERY: TypedDocumentNode<Data, Variables> = gql`
  mutation upsertPlanCall($data: PlanCallInput!) {
    data: upsertPlanCall(data: $data) {
      account
      activityOwnerEmail
      activityOwnerName
      activitySubtype
      activityType
      contactName
      description
      division
      endDate
      location
      ownerCountry
      salesForceId
      startDate
      status
      subject
      contactId
    }
  }
`;
