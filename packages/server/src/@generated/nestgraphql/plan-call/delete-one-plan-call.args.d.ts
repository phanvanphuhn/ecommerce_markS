import { Prisma } from '@prisma/client';

import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
export declare class DeleteOnePlanCallArgs {
    where: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
}
