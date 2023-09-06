import { Kysely } from 'kysely';

import { DB } from '@/generated/kysely/types';

export class Database extends Kysely<DB> {}
