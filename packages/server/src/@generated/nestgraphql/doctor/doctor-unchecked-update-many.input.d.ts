import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
export declare class DoctorUncheckedUpdateManyInput {
    id?: number;
    title?: string;
    userId?: number;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
}
