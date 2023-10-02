import { Resolver } from '@nestjs/graphql';
import { UserProfilesService } from './user-profiles.service';

@Resolver()
export class UserProfilesResolver {
  constructor(private readonly userProfilesService: UserProfilesService) {}
}
