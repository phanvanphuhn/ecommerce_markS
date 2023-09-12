import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
import { User } from '../user/user.model';
import { CaseLog } from '../case-log/case-log.model';
import { HospitalToDoctor } from '../hospital-to-doctor/hospital-to-doctor.model';
import { DoctorCount } from './doctor-count.output';
export declare class Doctor {
    id: number;
    title: string;
    userId: number;
    specialties: Array<keyof typeof Specialty>;
    divisions: Array<keyof typeof Division>;
    user?: User;
    caseLog?: Array<CaseLog>;
    hospitals?: Array<HospitalToDoctor>;
    _count?: DoctorCount;
}
