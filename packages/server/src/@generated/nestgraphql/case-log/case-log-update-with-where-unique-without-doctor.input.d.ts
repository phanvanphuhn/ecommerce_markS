import { Prisma } from '@prisma/client';

import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithoutDoctorInput } from './case-log-update-without-doctor.input';
export declare class CaseLogUpdateWithWhereUniqueWithoutDoctorInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    data: CaseLogUpdateWithoutDoctorInput;
}
