import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { CaseLogUncheckedCreateNestedManyWithoutDoctorInput } from '../case-log/case-log-unchecked-create-nested-many-without-doctor.input';
export declare class DoctorUncheckedCreateWithoutHospitalsInput {
    id?: number;
    title: string;
    userId: number;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
    caseLog?: CaseLogUncheckedCreateNestedManyWithoutDoctorInput;
}
