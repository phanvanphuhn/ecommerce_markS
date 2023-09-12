import { Role } from './role.enum';
export declare class EnumRoleFilter {
    equals?: keyof typeof Role;
    in?: Array<keyof typeof Role>;
    notIn?: Array<keyof typeof Role>;
    not?: EnumRoleFilter;
}
