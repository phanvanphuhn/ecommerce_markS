import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import {PlanCallOutput} from 'apollo/query/upsertPlanCall';

interface Data {
  data: PlanCallOutput[];
}

interface Variables {}

export let GET_PLAN_CALLS: TypedDocumentNode<Data, Variables> = gql`
  query getPlanCalls {
    data: getPlanCalls {
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
