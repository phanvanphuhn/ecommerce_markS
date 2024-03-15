import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface ItemSaleLastInvoiceResponse {
  accountName: string;
  createdAt: string;
  currency: string;
  id: string;
  invoiceDate: string;
  invoiceNumber: string;
  salesRepEmail: string;
  updatedAt: string;
  value: string;
}
interface Data {
  data: ItemSaleLastInvoiceResponse[];
}

interface Variables {
  orderBy?: 'asc' | 'desc';
  skip?: number;
  take?: number;
}

export let getSalesInvoices: TypedDocumentNode<Data, Variables> = gql`
  query GetSalesInvoices($orderBy: OrderDirection, $skip: Int, $take: Int) {
    data: getSalesInvoices(orderBy: $orderBy, skip: $skip, take: $take) {
      accountName
      createdAt
      currency
      id
      invoiceDate
      invoiceNumber
      salesRepEmail
      updatedAt
      value
    }
  }
`;
