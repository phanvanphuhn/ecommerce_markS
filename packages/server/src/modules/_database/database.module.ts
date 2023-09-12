import { Global, Module } from '@nestjs/common';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

import { Database } from './database';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';
import { DatabaseOptions } from './databaseOptions';

// The point of Kysely being here is to make it possible to write SQL with type-safety.
// Which would make the queries being a bit more performant than Prisma.

@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const dialect = new PostgresDialect({
          pool: new Pool({
            host: databaseOptions.host,
            port: databaseOptions.port,
            user: databaseOptions.user,
            password: databaseOptions.password,
            database: databaseOptions.database,
          }),
        });

        return new Database({
          dialect,
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
