import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithoutDoctorInput } from './case-log-update-without-doctor.input';
import { CaseLogCreateWithoutDoctorInput } from './case-log-create-without-doctor.input';
export declare class CaseLogUpsertWithWhereUniqueWithoutDoctorInput {
    where: Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>;
    update: CaseLogUpdateWithoutDoctorInput;
    create: CaseLogCreateWithoutDoctorInput;
}
