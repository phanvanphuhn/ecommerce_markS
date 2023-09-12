import { UserUpdateOneRequiredWithoutCaseLogNestedInput } from '../user/user-update-one-required-without-case-log-nested.input';
import { DoctorUpdateOneRequiredWithoutCaseLogNestedInput } from '../doctor/doctor-update-one-required-without-case-log-nested.input';
import { ProductsInvoiceUpdateOneWithoutCaseLogNestedInput } from '../products-invoice/products-invoice-update-one-without-case-log-nested.input';
import { ScheduleUpdateOneRequiredWithoutCaseLogNestedInput } from '../schedule/schedule-update-one-required-without-case-log-nested.input';
export declare class CaseLogUpdateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    photoUrl?: string;
    deleted?: Date | string;
    account?: UserUpdateOneRequiredWithoutCaseLogNestedInput;
    doctor?: DoctorUpdateOneRequiredWithoutCaseLogNestedInput;
    productsInvoice?: ProductsInvoiceUpdateOneWithoutCaseLogNestedInput;
    schedule?: ScheduleUpdateOneRequiredWithoutCaseLogNestedInput;
}
