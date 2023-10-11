import { Args, Query, Resolver } from "@nestjs/graphql";

import { UserProfilesService } from "./user-profiles.service";
import { UserProfileOutput } from "./dto/user-profile.dto";

@Resolver()
export class UserProfilesResolver {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @Query(() => [UserProfileOutput])
  async getUserProfileBySalesRepEmail(@Args("salesRepEmail") salesRepEmail: string) {
    return this.userProfilesService.getUserProfileBySalesRepEmail(salesRepEmail);
  }
}
