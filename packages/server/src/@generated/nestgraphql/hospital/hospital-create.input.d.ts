import { HospitalToDoctorCreateNestedManyWithoutHospitalInput } from '../hospital-to-doctor/hospital-to-doctor-create-nested-many-without-hospital.input';
export declare class HospitalCreateInput {
    name: string;
    address: string;
    doctors?: HospitalToDoctorCreateNestedManyWithoutHospitalInput;
}
