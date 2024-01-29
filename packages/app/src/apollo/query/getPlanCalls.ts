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
  status: PlanCallStatus[];
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
    $description: String
    $division: String
    $endDate: String
    $location: String
    $ownerCountry: String
    $startDate: String
    $status: [PlanCallStatus!]
    $subject: String
  ) {
    data: getPlanCalls(
      account: $account
      activityOwnerEmail: $activityOwnerEmail
      activityOwnerName: $activityOwnerName
      activitySubtype: $activitySubtype
      activityType: $activityType
      contactName: $contactName
      description: $description
      division: $division
      endDate: $endDate
      location: $location
      ownerCountry: $ownerCountry
      startDate: $startDate
      status: $status
      subject: $subject
    ) {
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
    }
  }
`;
