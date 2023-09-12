import { Prisma } from '@prisma/client';

import { CaseLogWhereInput } from './case-log-where.input';
import { CaseLogOrderByWithRelationInput } from './case-log-order-by-with-relation.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCountAggregateInput } from './case-log-count-aggregate.input';
import { CaseLogAvgAggregateInput } from './case-log-avg-aggregate.input';
import { CaseLogSumAggregateInput } from './case-log-sum-aggregate.input';
import { CaseLogMinAggregateInput } from './case-log-min-aggregate.input';
import { CaseLogMaxAggregateInput } from './case-log-max-aggregate.input';
export declare class CaseLogAggregateArgs {
    where?: CaseLogWhereInput;
    orderBy?: Array<CaseLogOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    take?: number;
    skip?: number;
    _count?: CaseLogCountAggregateInput;
    _avg?: CaseLogAvgAggregateInput;
    _sum?: CaseLogSumAggregateInput;
    _min?: CaseLogMinAggregateInput;
    _max?: CaseLogMaxAggregateInput;
}
