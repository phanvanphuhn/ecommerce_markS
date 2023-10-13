import { Args, Query, Resolver } from "@nestjs/graphql";

import { ContactSearchService } from "./contach-search.service";
import {
  ContactSearchArgs,
  ContactSearchOutput,
} from "./dto/contact-search.dto";
import { DoctorDetail } from "./dto/doctor-profile.dto";

@Resolver()
export class ContactSearchResolver {
  constructor(private contactSearchService: ContactSearchService) {}

  @Query(() => [ContactSearchOutput])
  async getDoctorSearchList(@Args() filter: ContactSearchArgs) {
    return this.contactSearchService.getDoctorSearchList(filter);
  }

  @Query(() => [DoctorDetail])
  async getDoctorProfile(@Args("doctorEmail") doctorEmail: string) {
    return this.contactSearchService.getDoctorProfileByDoctorEmail(doctorEmail);
  }

  @Query(() => [String])
  async getFilterHospitalList(@Args("salesRepEmail") salesRepEmail: string) {
    return this.contactSearchService.getFilterHospitalList(salesRepEmail);
  }

  @Query(() => [String])
  async getFilterSpecialtyList(@Args("salesRepEmail") salesRepEmail: string) {
    return this.contactSearchService.getFilterSpecialtyList(salesRepEmail);
  }

  @Query(() => [String])
  async getFilterDivisionList(@Args("salesRepEmail") salesRepEmail: string) {
    return this.contactSearchService.getFilterDivisionList(salesRepEmail);
  }
}
