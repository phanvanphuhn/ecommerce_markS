import { AddressWhereInput } from './address-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';
export declare class AddressWhereUniqueInput {
    id?: number;
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    street?: StringFilter;
    city?: StringFilter;
    state?: StringFilter;
    zip?: StringFilter;
    country?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    profiles?: ProfileListRelationFilter;
}
