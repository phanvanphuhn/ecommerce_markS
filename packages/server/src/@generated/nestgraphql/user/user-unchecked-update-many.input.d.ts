import { Role } from '../prisma/role.enum';
export declare class UserUncheckedUpdateManyInput {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
    reportingToId?: number;
}
