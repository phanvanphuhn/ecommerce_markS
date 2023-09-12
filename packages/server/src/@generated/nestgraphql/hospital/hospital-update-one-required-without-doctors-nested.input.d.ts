import { Prisma } from '@prisma/client';

import { HospitalCreateWithoutDoctorsInput } from './hospital-create-without-doctors.input';
import { HospitalCreateOrConnectWithoutDoctorsInput } from './hospital-create-or-connect-without-doctors.input';
import { HospitalUpsertWithoutDoctorsInput } from './hospital-upsert-without-doctors.input';
import { HospitalWhereUniqueInput } from './hospital-where-unique.input';
import { HospitalUpdateToOneWithWhereWithoutDoctorsInput } from './hospital-update-to-one-with-where-without-doctors.input';
export declare class HospitalUpdateOneRequiredWithoutDoctorsNestedInput {
    create?: HospitalCreateWithoutDoctorsInput;
    connectOrCreate?: HospitalCreateOrConnectWithoutDoctorsInput;
    upsert?: HospitalUpsertWithoutDoctorsInput;
    connect?: Prisma.AtLeast<HospitalWhereUniqueInput, 'id'>;
    update?: HospitalUpdateToOneWithWhereWithoutDoctorsInput;
}
