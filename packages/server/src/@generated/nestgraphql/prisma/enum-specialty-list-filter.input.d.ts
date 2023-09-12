import { Specialty } from './specialty.enum';
export declare class EnumSpecialtyListFilter {
    equals?: Array<keyof typeof Specialty>;
    has?: keyof typeof Specialty;
    hasEvery?: Array<keyof typeof Specialty>;
    hasSome?: Array<keyof typeof Specialty>;
    isEmpty?: boolean;
}
