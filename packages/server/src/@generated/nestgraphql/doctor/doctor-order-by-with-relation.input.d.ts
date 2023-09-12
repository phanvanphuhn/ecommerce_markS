import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CaseLogOrderByRelationAggregateInput } from '../case-log/case-log-order-by-relation-aggregate.input';
import { HospitalToDoctorOrderByRelationAggregateInput } from '../hospital-to-doctor/hospital-to-doctor-order-by-relation-aggregate.input';
export declare class DoctorOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    specialties?: keyof typeof SortOrder;
    divisions?: keyof typeof SortOrder;
    user?: UserOrderByWithRelationInput;
    caseLog?: CaseLogOrderByRelationAggregateInput;
    hospitals?: HospitalToDoctorOrderByRelationAggregateInput;
}
