import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { UserUpdateOneRequiredWithoutDoctorNestedInput } from '../user/user-update-one-required-without-doctor-nested.input';
import { CaseLogUpdateManyWithoutDoctorNestedInput } from '../case-log/case-log-update-many-without-doctor-nested.input';
export declare class DoctorUpdateWithoutHospitalsInput {
    title?: string;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput;
    caseLog?: CaseLogUpdateManyWithoutDoctorNestedInput;
}
