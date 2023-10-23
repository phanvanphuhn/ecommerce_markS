import { Expression, sql } from 'kysely';

export function float(expr: Expression<unknown>) {
  return sql<number>`${expr}::float`;
}

export function string(expr: Expression<unknown>) {
  return sql<string>`${expr}::text`;
}

export function integer(expr: Expression<unknown>) {
  return sql<number>`${expr}::int`;
}
