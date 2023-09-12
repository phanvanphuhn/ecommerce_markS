import { Prisma } from '@prisma/client';

import { CaseLogCreateWithoutDoctorInput } from './case-log-create-without-doctor.input';
import { CaseLogCreateOrConnectWithoutDoctorInput } from './case-log-create-or-connect-without-doctor.input';
import { CaseLogCreateManyDoctorInputEnvelope } from './case-log-create-many-doctor-input-envelope.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class CaseLogCreateNestedManyWithoutDoctorInput {
    create?: Array<CaseLogCreateWithoutDoctorInput>;
    connectOrCreate?: Array<CaseLogCreateOrConnectWithoutDoctorInput>;
    createMany?: CaseLogCreateManyDoctorInputEnvelope;
    connect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
}
