import { Prisma } from '@prisma/client';

import { DoctorCreateWithoutUserInput } from './doctor-create-without-user.input';
import { DoctorCreateOrConnectWithoutUserInput } from './doctor-create-or-connect-without-user.input';
import { DoctorUpsertWithoutUserInput } from './doctor-upsert-without-user.input';
import { DoctorWhereInput } from './doctor-where.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorUpdateToOneWithWhereWithoutUserInput } from './doctor-update-to-one-with-where-without-user.input';
export declare class DoctorUncheckedUpdateOneWithoutUserNestedInput {
    create?: DoctorCreateWithoutUserInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput;
    upsert?: DoctorUpsertWithoutUserInput;
    disconnect?: DoctorWhereInput;
    delete?: DoctorWhereInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    update?: DoctorUpdateToOneWithWhereWithoutUserInput;
}
