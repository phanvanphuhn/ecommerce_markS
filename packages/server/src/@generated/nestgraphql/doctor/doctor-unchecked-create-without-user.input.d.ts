import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { CaseLogUncheckedCreateNestedManyWithoutDoctorInput } from '../case-log/case-log-unchecked-create-nested-many-without-doctor.input';
import { HospitalToDoctorUncheckedCreateNestedManyWithoutDoctorInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-create-nested-many-without-doctor.input';
export declare class DoctorUncheckedCreateWithoutUserInput {
    id?: number;
    title: string;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    caseLog?: CaseLogUncheckedCreateNestedManyWithoutDoctorInput;
    hospitals?: HospitalToDoctorUncheckedCreateNestedManyWithoutDoctorInput;
}
