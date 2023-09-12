import { Prisma } from '@prisma/client';

import { CaseLogWhereInput } from './case-log-where.input';
import { CaseLogOrderByWithRelationInput } from './case-log-order-by-with-relation.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogScalarFieldEnum } from './case-log-scalar-field.enum';
export declare class FindManyCaseLogArgs {
    where?: CaseLogWhereInput;
    orderBy?: Array<CaseLogOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CaseLogScalarFieldEnum>;
}
