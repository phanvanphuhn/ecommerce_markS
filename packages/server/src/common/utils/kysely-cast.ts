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

export function formatArrayForPostgres(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

  const formattedArray = array.map((item) => {
    if (typeof item !== 'string') {
      throw new Error('Array contains non-string elements');
    }
    return `"${item}"`;
  });

  return `{ ${formattedArray.join(', ')} }`;
}

export function parsePostgresArray(postgresArray) {
  const regex = /\b\w+\b/g;
  const matches = postgresArray.match(regex);

  return matches || [];
}
