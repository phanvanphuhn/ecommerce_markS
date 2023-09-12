import { DB } from '@generated/kysely/types';
import { Kysely } from 'kysely';

export class Database extends Kysely<DB> {}
