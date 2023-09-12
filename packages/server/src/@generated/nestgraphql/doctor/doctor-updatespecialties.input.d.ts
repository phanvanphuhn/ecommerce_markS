import { Specialty } from '../prisma/specialty.enum';
export declare class DoctorUpdatespecialtiesInput {
    set?: Array<keyof typeof Specialty>;
    push?: Array<keyof typeof Specialty>;
}
