import { User } from '../user/user.model';
import { Doctor } from '../doctor/doctor.model';
import { ProductsInvoice } from '../products-invoice/products-invoice.model';
import { Schedule } from '../schedule/schedule.model';
export declare class CaseLog {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    accountId: number;
    doctorId: number;
    photoUrl: string | null;
    productsInvoiceId: string;
    scheduleId: string;
    deleted: Date | null;
    account?: User;
    doctor?: Doctor;
    productsInvoice?: ProductsInvoice | null;
    schedule?: Schedule;
}
