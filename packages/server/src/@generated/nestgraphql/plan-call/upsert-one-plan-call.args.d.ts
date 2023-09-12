import { Prisma } from '@prisma/client';

import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
import { PlanCallCreateInput } from './plan-call-create.input';
import { PlanCallUpdateInput } from './plan-call-update.input';
export declare class UpsertOnePlanCallArgs {
    where: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
    create: PlanCallCreateInput;
    update: PlanCallUpdateInput;
}
