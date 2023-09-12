import { UserCreateWithoutReportingToInput } from './user-create-without-reporting-to.input';
import { UserCreateOrConnectWithoutReportingToInput } from './user-create-or-connect-without-reporting-to.input';
import { UserUpsertWithoutReportingToInput } from './user-upsert-without-reporting-to.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReportingToInput } from './user-update-to-one-with-where-without-reporting-to.input';
export declare class UserUpdateOneWithoutReportingToNestedInput {
    create?: UserCreateWithoutReportingToInput;
    connectOrCreate?: UserCreateOrConnectWithoutReportingToInput;
    upsert?: UserUpsertWithoutReportingToInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'reportingToId'>;
    update?: UserUpdateToOneWithWhereWithoutReportingToInput;
}
