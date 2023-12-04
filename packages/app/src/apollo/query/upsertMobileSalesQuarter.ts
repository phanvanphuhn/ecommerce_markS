import {gql, TypedDocumentNode} from '@apollo/client';

interface Data {
  data: boolean;
}

interface Variables {
  quarter: string;
  targetByQuarter: string;
  year: string;
}

export let upsertMobileSalesQuarter: TypedDocumentNode<Data, Variables> = gql`
  mutation upsertMobileSalesQuarter(
    $quarter: String!
    $targetByQuarter: String!
    $year: String!
  ) {
    data: upsertMobileSalesQuarter(
      quarter: $quarter
      targetByQuarter: $targetByQuarter
      year: $year
    )
  }
`;
