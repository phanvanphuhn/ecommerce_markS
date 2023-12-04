import {gql, TypedDocumentNode} from '@apollo/client';

interface Data {
  data: boolean;
}

interface Variables {
  targetByYear: string;
  year: string;
}

export let upsertMobileSalesYear: TypedDocumentNode<Data, Variables> = gql`
  mutation upsertMobileSalesYear($targetByYear: String!, $year: String!) {
    data: upsertMobileSalesYear(targetByYear: $targetByYear, year: $year)
  }
`;
