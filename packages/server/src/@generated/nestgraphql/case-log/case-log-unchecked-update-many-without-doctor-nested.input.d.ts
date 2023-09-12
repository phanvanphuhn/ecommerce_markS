import { CaseLogCreateWithoutDoctorInput } from './case-log-create-without-doctor.input';
import { CaseLogCreateOrConnectWithoutDoctorInput } from './case-log-create-or-connect-without-doctor.input';
import { CaseLogUpsertWithWhereUniqueWithoutDoctorInput } from './case-log-upsert-with-where-unique-without-doctor.input';
import { CaseLogCreateManyDoctorInputEnvelope } from './case-log-create-many-doctor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithWhereUniqueWithoutDoctorInput } from './case-log-update-with-where-unique-without-doctor.input';
import { CaseLogUpdateManyWithWhereWithoutDoctorInput } from './case-log-update-many-with-where-without-doctor.input';
import { CaseLogScalarWhereInput } from './case-log-scalar-where.input';
export declare class CaseLogUncheckedUpdateManyWithoutDoctorNestedInput {
    create?: Array<CaseLogCreateWithoutDoctorInput>;
    connectOrCreate?: Array<CaseLogCreateOrConnectWithoutDoctorInput>;
    upsert?: Array<CaseLogUpsertWithWhereUniqueWithoutDoctorInput>;
    createMany?: CaseLogCreateManyDoctorInputEnvelope;
    set?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    disconnect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    delete?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    connect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    update?: Array<CaseLogUpdateWithWhereUniqueWithoutDoctorInput>;
    updateMany?: Array<CaseLogUpdateManyWithWhereWithoutDoctorInput>;
    deleteMany?: Array<CaseLogScalarWhereInput>;
}
