import { Specialty } from '../prisma/specialty.enum';
import { Division } from '../prisma/division.enum';
export declare class DoctorUpdateManyMutationInput {
    title?: string;
    specialties?: Array<keyof typeof Specialty>;
    divisions?: Array<keyof typeof Division>;
}
