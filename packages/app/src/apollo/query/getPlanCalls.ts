import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import {
  PlanCallActivitySubtype,
  PlanCallActivityType,
  PlanCallOutput,
  PlanCallStatus,
} from 'apollo/query/upsertPlanCall';

interface Data {
  data: PlanCallOutput[];
}

interface Variables {
  account: string;
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
  startDate: string;
  status: PlanCallStatus;
  subject: string;
  updatedAt: string;
}

export let GET_PLAN_CALLS: TypedDocumentNode<Data, Variables> = gql`
  query getPlanCalls(
    $account: String
    $activityOwnerEmail: String
    $activityOwnerName: String
    $activitySubtype: PlanCallActivitySubtype
    $activityType: PlanCallActivityType
    $contactName: String
    $createdAt: DateTimeISO
    $description: String
    $division: String
    $endDate: String
    $id: String
    $location: String
    $ownerCountry: String
    $startDate: String
    $status: PlanCallStatus
    $subject: String
    $updatedAt: DateTimeISO
  ) {
    data: getPlanCalls(
      account: $account
      activityOwnerEmail: $activityOwnerEmail
      activityOwnerName: $activityOwnerName
      activitySubtype: $activitySubtype
      activityType: $activityType
      contactName: $contactName
      createdAt: $createdAt
      description: $description
      division: $division
      endDate: $endDate
      id: $id
      location: $location
      ownerCountry: $ownerCountry
      startDate: $startDate
      status: $status
      subject: $subject
      updatedAt: $updatedAt
    ) {
      account
      activityOwnerEmail
      activityOwnerName
      activitySubtype
      activityType
      contactName
      createdAt
      description
      division
      endDate
      id
      location
      ownerCountry
      salesForceId
      startDate
      status
      subject
      updatedAt
    }
  }
`;
