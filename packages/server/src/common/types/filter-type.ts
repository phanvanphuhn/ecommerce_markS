import { registerEnumType } from '@nestjs/graphql';
import { ComparisonOperatorExpression } from 'kysely';

export enum FilterType {
  Absolute = 'absolute',
  Relative = 'relative',
}

registerEnumType(FilterType, {
  name: 'FilterType',
});

export const filterTypeMap = {
  [FilterType.Absolute]: '=',
  [FilterType.Relative]: 'like',
};
