import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { UserCreateNestedOneWithoutDoctorInput } from '../user/user-create-nested-one-without-doctor.input';
import { CaseLogCreateNestedManyWithoutDoctorInput } from '../case-log/case-log-create-nested-many-without-doctor.input';
import { HospitalToDoctorCreateNestedManyWithoutDoctorInput } from '../hospital-to-doctor/hospital-to-doctor-create-nested-many-without-doctor.input';
export declare class DoctorCreateInput {
    title: string;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    user: UserCreateNestedOneWithoutDoctorInput;
    caseLog?: CaseLogCreateNestedManyWithoutDoctorInput;
    hospitals?: HospitalToDoctorCreateNestedManyWithoutDoctorInput;
}
