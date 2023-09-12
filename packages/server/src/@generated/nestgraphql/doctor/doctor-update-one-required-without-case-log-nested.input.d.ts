import { Prisma } from '@prisma/client';

import { DoctorCreateWithoutCaseLogInput } from './doctor-create-without-case-log.input';
import { DoctorCreateOrConnectWithoutCaseLogInput } from './doctor-create-or-connect-without-case-log.input';
import { DoctorUpsertWithoutCaseLogInput } from './doctor-upsert-without-case-log.input';
import { DoctorWhereUniqueInput } from './doctor-where-unique.input';
import { DoctorUpdateToOneWithWhereWithoutCaseLogInput } from './doctor-update-to-one-with-where-without-case-log.input';
export declare class DoctorUpdateOneRequiredWithoutCaseLogNestedInput {
    create?: DoctorCreateWithoutCaseLogInput;
    connectOrCreate?: DoctorCreateOrConnectWithoutCaseLogInput;
    upsert?: DoctorUpsertWithoutCaseLogInput;
    connect?: Prisma.AtLeast<DoctorWhereUniqueInput, 'id' | 'userId'>;
    update?: DoctorUpdateToOneWithWhereWithoutCaseLogInput;
}
