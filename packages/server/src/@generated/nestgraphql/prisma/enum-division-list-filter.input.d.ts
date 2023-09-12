import { Division } from './division.enum';
export declare class EnumDivisionListFilter {
    equals?: Array<keyof typeof Division>;
    has?: keyof typeof Division;
    hasEvery?: Array<keyof typeof Division>;
    hasSome?: Array<keyof typeof Division>;
    isEmpty?: boolean;
}
