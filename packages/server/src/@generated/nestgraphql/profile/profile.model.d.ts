import { Address } from '../address/address.model';
import { User } from '../user/user.model';
export declare class Profile {
    id: number;
    mobile: string;
    addressId: number | null;
    preferredLanguage: string;
    userId: number;
    address?: Address | null;
    user?: User;
}
