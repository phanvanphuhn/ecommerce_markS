import { PlanCallWhereInput } from './plan-call-where.input';
import { PlanCallOrderByWithRelationInput } from './plan-call-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
import { PlanCallScalarFieldEnum } from './plan-call-scalar-field.enum';
export declare class FindManyPlanCallArgs {
    where?: PlanCallWhereInput;
    orderBy?: Array<PlanCallOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PlanCallScalarFieldEnum>;
}
