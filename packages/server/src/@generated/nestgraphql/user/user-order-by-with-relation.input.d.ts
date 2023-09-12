import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { ScheduleOrderByRelationAggregateInput } from '../schedule/schedule-order-by-relation-aggregate.input';
import { CaseLogOrderByRelationAggregateInput } from '../case-log/case-log-order-by-relation-aggregate.input';
import { DoctorOrderByWithRelationInput } from '../doctor/doctor-order-by-with-relation.input';
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    firstName?: SortOrderInput;
    lastName?: SortOrderInput;
    role?: keyof typeof SortOrder;
    reportingToId?: SortOrderInput;
    reportingTo?: UserOrderByWithRelationInput;
    reportingBy?: UserOrderByWithRelationInput;
    profile?: ProfileOrderByWithRelationInput;
    Schedule?: ScheduleOrderByRelationAggregateInput;
    CaseLog?: CaseLogOrderByRelationAggregateInput;
    Doctor?: DoctorOrderByWithRelationInput;
}
