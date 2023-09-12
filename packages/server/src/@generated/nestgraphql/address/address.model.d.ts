import { Profile } from '../profile/profile.model';

import { AddressCount } from './address-count.output';
export declare class Address {
    id: number;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    profiles?: Array<Profile>;
    _count?: AddressCount;
}
