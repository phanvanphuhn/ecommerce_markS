import { HospitalToDoctorUncheckedUpdateManyWithoutHospitalNestedInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-update-many-without-hospital-nested.input';
export declare class HospitalUncheckedUpdateInput {
    id?: number;
    name?: string;
    address?: string;
    doctors?: HospitalToDoctorUncheckedUpdateManyWithoutHospitalNestedInput;
}
