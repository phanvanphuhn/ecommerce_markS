import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
export declare class HospitalToDoctorScalarWhereWithAggregatesInput {
    AND?: Array<HospitalToDoctorScalarWhereWithAggregatesInput>;
    OR?: Array<HospitalToDoctorScalarWhereWithAggregatesInput>;
    NOT?: Array<HospitalToDoctorScalarWhereWithAggregatesInput>;
    hospitalId?: IntWithAggregatesFilter;
    doctorId?: IntWithAggregatesFilter;
}
