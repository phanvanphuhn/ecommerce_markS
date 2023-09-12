import { HospitalToDoctorUpdateManyWithoutHospitalNestedInput } from '../hospital-to-doctor/hospital-to-doctor-update-many-without-hospital-nested.input';
export declare class HospitalUpdateInput {
    name?: string;
    address?: string;
    doctors?: HospitalToDoctorUpdateManyWithoutHospitalNestedInput;
}
