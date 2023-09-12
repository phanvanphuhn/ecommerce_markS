import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DoctorRelationFilter } from '../doctor/doctor-relation-filter.input';
import { ProductsInvoiceRelationFilter } from '../products-invoice/products-invoice-relation-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';
export declare class CaseLogWhereInput {
    AND?: Array<CaseLogWhereInput>;
    OR?: Array<CaseLogWhereInput>;
    NOT?: Array<CaseLogWhereInput>;
    id?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    accountId?: IntFilter;
    doctorId?: IntFilter;
    photoUrl?: StringFilter;
    productsInvoiceId?: StringFilter;
    scheduleId?: StringFilter;
    deleted?: DateTimeFilter;
    account?: UserRelationFilter;
    doctor?: DoctorRelationFilter;
    productsInvoice?: ProductsInvoiceRelationFilter;
    schedule?: ScheduleRelationFilter;
}
