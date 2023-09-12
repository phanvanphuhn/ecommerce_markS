import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { CaseLogUncheckedUpdateManyWithoutDoctorNestedInput } from '../case-log/case-log-unchecked-update-many-without-doctor-nested.input';
import { HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-update-many-without-doctor-nested.input';
export declare class DoctorUncheckedUpdateWithoutUserInput {
    id?: number;
    title?: string;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    caseLog?: CaseLogUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitals?: HospitalToDoctorUncheckedUpdateManyWithoutDoctorNestedInput;
}
