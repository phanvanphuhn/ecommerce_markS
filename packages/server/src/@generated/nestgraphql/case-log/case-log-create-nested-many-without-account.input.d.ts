import { Prisma } from '@prisma/client';

import { CaseLogCreateWithoutAccountInput } from './case-log-create-without-account.input';
import { CaseLogCreateOrConnectWithoutAccountInput } from './case-log-create-or-connect-without-account.input';
import { CaseLogCreateManyAccountInputEnvelope } from './case-log-create-many-account-input-envelope.input';
import { CaseLogWhereUniqueInput } from './case-log-where-unique.input';
export declare class CaseLogCreateNestedManyWithoutAccountInput {
    create?: Array<CaseLogCreateWithoutAccountInput>;
    connectOrCreate?: Array<CaseLogCreateOrConnectWithoutAccountInput>;
    createMany?: CaseLogCreateManyAccountInputEnvelope;
    connect?: Array<Prisma.AtLeast<CaseLogWhereUniqueInput, 'id' | 'productsInvoiceId' | 'scheduleId'>>;
}
