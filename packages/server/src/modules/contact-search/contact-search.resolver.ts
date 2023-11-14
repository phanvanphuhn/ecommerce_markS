import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';

import { ContactSearchService } from './contach-search.service';
import {
  ContactSearchArgs,
  ContactSearchOutput,
} from './dto/contact-search.dto';
import { DoctorDetail } from './dto/doctor-profile.dto';

@Resolver()
export class ContactSearchResolver {
  constructor(private contactSearchService: ContactSearchService) {}

  @Query(() => [ContactSearchOutput])
  @UseGuards(AzureAuthGuard)
  async getDoctorSearchList(
    @UserEntity() userInfo,
    @Args() filter: ContactSearchArgs,
  ) {
    return this.contactSearchService.getDoctorSearchList({
      ...filter,
      salesRepEmail: userInfo.email,
    });
  }

  @Query(() => [DoctorDetail])
  @UseGuards(AzureAuthGuard)
  async getDoctorProfile(@Args('doctorEmail') doctorEmail: string) {
    return this.contactSearchService.getDoctorProfileByDoctorEmail(doctorEmail);
  }

  @Query(() => [String])
  @UseGuards(AzureAuthGuard)
  async getFilterHospitalList(@UserEntity() userInfo) {
    return this.contactSearchService.getFilterHospitalList(userInfo.email);
  }

  @Query(() => [String])
  @UseGuards(AzureAuthGuard)
  async getFilterSpecialtyList(@UserEntity() userInfo) {
    return this.contactSearchService.getFilterSpecialtyList(userInfo.email);
  }

  @Query(() => [String])
  @UseGuards(AzureAuthGuard)
  async getFilterTopicsOfInterestList(@UserEntity() userInfo) {
    return this.contactSearchService.getFilterTopicsOfInterestList(
      userInfo.email,
    );
  }

  @Query(() => [String])
  @UseGuards(AzureAuthGuard)
  async getFilterDivisionList(@UserEntity() userInfo) {
    return this.contactSearchService.getFilterDivisionList(userInfo.email);
  }
}
