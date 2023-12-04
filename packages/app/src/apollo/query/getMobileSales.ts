import {gql, TypedDocumentNode} from '@apollo/client';
import {IDoctorSearchList} from 'network/apis/doctor/DoctorResponse';

type MobileSalesTargetType = 'quarter' | 'year';
export interface MobileSalesResponse {
  quarter: string;
  salesRepEmail: string;
  targetByQuarter: string;
  targetByYear: string;
  type: MobileSalesTargetType;
  year: string;
}
interface Data {
  data: MobileSalesResponse;
}

interface Variables {
  quarter?: string;
  type: MobileSalesTargetType;
  year?: string;
}

export let getMobileSales: TypedDocumentNode<Data, Variables> = gql`
  query getMobileSales(
    $quarter: String
    $type: mobileSalesTargetType!
    $year: String
  ) {
    data: getMobileSales(quarter: $quarter, type: $type, year: $year) {
      quarter
      salesRepEmail
      targetByQuarter
      targetByYear
      type
      year
    }
  }
`;
