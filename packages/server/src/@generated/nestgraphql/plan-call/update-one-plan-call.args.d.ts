import { PlanCallUpdateInput } from './plan-call-update.input';
import { Prisma } from '@prisma/client';
import { PlanCallWhereUniqueInput } from './plan-call-where-unique.input';
export declare class UpdateOnePlanCallArgs {
    data: PlanCallUpdateInput;
    where: Prisma.AtLeast<PlanCallWhereUniqueInput, 'id' | 'scheduleId'>;
}
