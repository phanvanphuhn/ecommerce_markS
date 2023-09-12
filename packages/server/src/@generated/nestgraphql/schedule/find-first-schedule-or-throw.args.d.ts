import { ScheduleWhereInput } from './schedule-where.input';
import { ScheduleOrderByWithRelationInput } from './schedule-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleScalarFieldEnum } from './schedule-scalar-field.enum';
export declare class FindFirstScheduleOrThrowArgs {
    where?: ScheduleWhereInput;
    orderBy?: Array<ScheduleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ScheduleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ScheduleScalarFieldEnum>;
}
