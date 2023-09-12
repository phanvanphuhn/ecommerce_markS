import { Role } from '../prisma/role.enum';
export declare class UserUpdateManyMutationInput {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: keyof typeof Role;
}
