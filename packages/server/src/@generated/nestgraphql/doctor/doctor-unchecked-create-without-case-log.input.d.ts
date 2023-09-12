import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { HospitalToDoctorUncheckedCreateNestedManyWithoutDoctorInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-create-nested-many-without-doctor.input';
export declare class DoctorUncheckedCreateWithoutCaseLogInput {
    id?: number;
    title: string;
    userId: number;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    hospitals?: HospitalToDoctorUncheckedCreateNestedManyWithoutDoctorInput;
}
