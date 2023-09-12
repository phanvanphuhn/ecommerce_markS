import { CaseLogCreateWithoutAccountInput } from './case-log-create-without-account.input';
import { CaseLogCreateOrConnectWithoutAccountInput } from './case-log-create-or-connect-without-account.input';
import { CaseLogUpsertWithWhereUniqueWithoutAccountInput } from './case-log-upsert-with-where-unique-without-account.input';
import { CaseLogCreateManyAccountInputEnvelope } from './case-log-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
import { CaseLogUpdateWithWhereUniqueWithoutAccountInput } from './case-log-update-with-where-unique-without-account.input';
import { CaseLogUpdateManyWithWhereWithoutAccountInput } from './case-log-update-many-with-where-without-account.input';
import { CaseLogScalarWhereInput } from './case-log-scalar-where.input';
export declare class CaseLogUpdateManyWithoutAccountNestedInput {
    create?: Array<CaseLogCreateWithoutAccountInput>;
    connectOrCreate?: Array<CaseLogCreateOrConnectWithoutAccountInput>;
    upsert?: Array<CaseLogUpsertWithWhereUniqueWithoutAccountInput>;
    createMany?: CaseLogCreateManyAccountInputEnvelope;
    set?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    disconnect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    delete?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    connect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
    update?: Array<CaseLogUpdateWithWhereUniqueWithoutAccountInput>;
    updateMany?: Array<CaseLogUpdateManyWithWhereWithoutAccountInput>;
    deleteMany?: Array<CaseLogScalarWhereInput>;
}
