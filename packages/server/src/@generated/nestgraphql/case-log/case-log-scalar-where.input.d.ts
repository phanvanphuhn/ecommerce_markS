import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
export declare class CaseLogScalarWhereInput {
    AND?: Array<CaseLogScalarWhereInput>;
    OR?: Array<CaseLogScalarWhereInput>;
    NOT?: Array<CaseLogScalarWhereInput>;
    id?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    accountId?: IntFilter;
    doctorId?: IntFilter;
    photoUrl?: StringFilter;
    productsInvoiceId?: StringFilter;
    scheduleId?: StringFilter;
    deleted?: DateTimeFilter;
}
