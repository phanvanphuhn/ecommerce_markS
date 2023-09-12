import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DoctorOrderByWithRelationInput } from '../doctor/doctor-order-by-with-relation.input';
import { ProductsInvoiceOrderByWithRelationInput } from '../products-invoice/products-invoice-order-by-with-relation.input';
import { ScheduleOrderByWithRelationInput } from '../schedule/schedule-order-by-with-relation.input';
export declare class CaseLogOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    doctorId?: keyof typeof SortOrder;
    photoUrl?: SortOrderInput;
    productsInvoiceId?: keyof typeof SortOrder;
    scheduleId?: keyof typeof SortOrder;
    deleted?: SortOrderInput;
    account?: UserOrderByWithRelationInput;
    doctor?: DoctorOrderByWithRelationInput;
    productsInvoice?: ProductsInvoiceOrderByWithRelationInput;
    schedule?: ScheduleOrderByWithRelationInput;
}
