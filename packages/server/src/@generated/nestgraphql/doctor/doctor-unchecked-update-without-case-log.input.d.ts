import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-update-many-without-doctor-nested.input';
export declare class DoctorUncheckedUpdateWithoutCaseLogInput {
    id?: number;
    title?: string;
    userId?: number;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    hospitals?: HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput;
}
