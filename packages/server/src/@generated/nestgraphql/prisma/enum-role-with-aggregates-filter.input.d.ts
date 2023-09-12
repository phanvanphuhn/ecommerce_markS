import { Role } from './role.enum';
import { IntFilter } from './int-filter.input';
import { EnumRoleFilter } from './enum-role-filter.input';
export declare class EnumRoleWithAggregatesFilter {
    equals?: keyof typeof Role;
    in?: Array<keyof typeof Role>;
    notIn?: Array<keyof typeof Role>;
    not?: EnumRoleWithAggregatesFilter;
    _count?: IntFilter;
    _min?: EnumRoleFilter;
    _max?: EnumRoleFilter;
}
