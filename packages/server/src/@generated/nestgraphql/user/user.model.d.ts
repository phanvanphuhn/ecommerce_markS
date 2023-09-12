import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { Schedule } from '../schedule/schedule.model';
import { CaseLog } from '../case-log/case-log.model';
import { Doctor } from '../doctor/doctor.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    role: keyof typeof Role;
    reportingToId: number | null;
    reportingTo?: User | null;
    reportingBy?: User | null;
    profile?: Profile | null;
    Schedule?: Array<Schedule>;
    CaseLog?: Array<CaseLog>;
    Doctor?: Doctor | null;
    _count?: UserCount;
}
