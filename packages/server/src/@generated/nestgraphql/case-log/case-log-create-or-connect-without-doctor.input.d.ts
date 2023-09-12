import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogCreateWithoutDoctorInput } from './case-log-create-without-doctor.input';
export declare class CaseLogCreateOrConnectWithoutDoctorInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    create: CaseLogCreateWithoutDoctorInput;
}
