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
  async getDoctorProfile(@Args("doctorName") doctorName: string) {
    return this.contactSearchService.getDoctorProfileByDoctorName(doctorName);
  }

  @Query(() => [String])
  async getFilterHospitalList(@Args("networkId") networkId: string) {
    return this.contactSearchService.getFilterHospitalList(networkId);
  }

  @Query(() => [String])
  async getFilterSpecialtyList(@Args("networkId") networkId: string) {
    return this.contactSearchService.getFilterSpecialtyList(networkId);
  }

  @Query(() => [String])
  async getFilterDivisionList(@Args("networkId") networkId: string) {
    return this.contactSearchService.getFilterDivisionList(networkId);
  }
}
