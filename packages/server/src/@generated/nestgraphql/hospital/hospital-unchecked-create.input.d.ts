import { HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput } from '../hospital-to-doctor/hospital-to-doctor-unchecked-create-nested-many-without-hospital.input';
export declare class HospitalUncheckedCreateInput {
    id?: number;
    name: string;
    address: string;
    doctors?: HospitalToDoctorUncheckedCreateNestedManyWithoutHospitalInput;
}
