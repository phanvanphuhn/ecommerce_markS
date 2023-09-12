import { DoctorCreateNestedOneWithoutCaseLogInput } from '../doctor/doctor-create-nested-one-without-case-log.input';
import { ProductsInvoiceCreateNestedOneWithoutCaseLogInput } from '../products-invoice/products-invoice-create-nested-one-without-case-log.input';
import { ScheduleCreateNestedOneWithoutCaseLogInput } from '../schedule/schedule-create-nested-one-without-case-log.input';
export declare class CaseLogCreateWithoutAccountInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    photoUrl?: string;
    deleted?: Date | string;
    doctor: DoctorCreateNestedOneWithoutCaseLogInput;
    productsInvoice?: ProductsInvoiceCreateNestedOneWithoutCaseLogInput;
    schedule: ScheduleCreateNestedOneWithoutCaseLogInput;
}
