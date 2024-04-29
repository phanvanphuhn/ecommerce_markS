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
import { DoctorDetail, DoctorFilterArgs } from './dto/doctor-profile.dto';

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

    return this.contactSearchService.getDoctorSearchList(
      user[0].salesRepEmail,
      filter,
    );
  }

  @Query(() => [DoctorDetail], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getDoctorProfile(
    @UserEntity() userInfo,
    @Args() filter: DoctorFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.contactSearchService.getDoctorProfile(
      user[0].salesRepEmail,
      filter,
    );
  }

  @Query(() => [DoctorDetail], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getDoctorProfileByContactId(
    @UserEntity() userInfo,
    @Args('contactId') contactId: string,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return this.contactSearchService.getDoctorProfileByContactId(
      user[0].salesRepEmail,
      contactId,
    );
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterHospitalList(
    @UserEntity() userInfo,
    @Args() filter: HospitalFilterArgs,
  ) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    return await this.contactSearchService.getFilterHospitalList(
      user[0].salesRepEmail,
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

    const result = await this.contactSearchService.getFilterSpecialtyList(
      user[0].salesRepEmail,
    );

    return result;
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterTopicsOfInterestList(@UserEntity() userInfo) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    const result =
      await this.contactSearchService.getFilterTopicsOfInterestList(
        user[0].salesRepEmail,
      );

    return result;
  }

  @Query(() => [String], { nullable: true })
  @UseGuards(AzureAuthGuard)
  async getFilterDivisionList(@UserEntity() userInfo) {
    const user =
      await this.userProfilesService.getUserProfileByNetworkIdWithTitleCheck(
        userInfo.samAccountName,
      );

    const result = await this.contactSearchService.getFilterDivisionList(
      user[0].salesRepEmail,
    );

    return result;
  }
}
