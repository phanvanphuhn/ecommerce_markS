import { Field, ObjectType } from '@nestjs/graphql';

import {UserProfile} from '@generated/nestgraphql/user-profile/user-profile.model'
import { Leaderboard } from '@generated/nestgraphql/leaderboard/leaderboard.model';
@ObjectType()
export class UserProfileOutput extends UserProfile{
  constructor(data: Partial<UserProfileOutput>) {
    super();
    Object.assign(this, data);
  }
  @Field(() => Number, { nullable: true })
  id: number;
  
  @Field(() => Leaderboard, { nullable: true })
  leaderboard: Leaderboard;
}
