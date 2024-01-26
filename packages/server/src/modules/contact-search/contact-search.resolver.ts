import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators/user.decorator';

import { AzureAuthGuard } from '../auth/guards/azure-ad.guard';
import { UserProfilesService } from '../user-profiles/user-profiles.service';

import { ContactSearchService } from './contach-search.service';
import {
  ContactSearchArgs,
  ContactSearchOutput,
  HospitalFilterArgs,
} from './dto/contact-search.dto';
import { DoctorDetail } from './dto/doctor-profile.dto';

@Resolver()
export class ContactSearchResolver {
  constructor(
    private contactSearchService: ContactSearchService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

  @Query(() => [ContactSearchOutput], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getDoctorSearchList(
    @UserEntity() userInfo,
    @Args() filter: ContactSearchArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return (
      this.contactSearchService.getDoctorSearchList(
        user[0].salesRepEmail,
        filter,
      ) || []
    );
  }

  @Query(() => [DoctorDetail], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getDoctorProfile(@Args('doctorEmail') doctorEmail: string) {
    return (
      this.contactSearchService.getDoctorProfileByDoctorEmail(doctorEmail) || []
    );
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterHospitalList(
    @UserEntity() userInfo,
    @Args() filter: HospitalFilterArgs,
  ) {
    return this.contactSearchService.getFilterHospitalList(
      userInfo.email,
      filter,
    );
  }

  @Query(() => [String])
  // @UseGuards(AzureAuthGuard)
  async testGetFilterHospitalList(
    @UserEntity() userInfo,
    @Args() filter: HospitalFilterArgs,
  ) {
    return this.contactSearchService.getFilterHospitalList(
      'Jeff.Phan@bsci.com',
      filter,
    );
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterSpecialtyList(@UserEntity() userInfo) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return (
      this.contactSearchService.getFilterSpecialtyList(user[0].salesRepEmail) ||
      []
    );
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterTopicsOfInterestList(@UserEntity() userInfo) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return (
      this.contactSearchService.getFilterTopicsOfInterestList(
        user[0].salesRepEmail,
      ) || []
    );
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterDivisionList(@UserEntity() userInfo) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return (
      this.contactSearchService.getFilterDivisionList(user[0].salesRepEmail) ||
      []
    );
  }
}
