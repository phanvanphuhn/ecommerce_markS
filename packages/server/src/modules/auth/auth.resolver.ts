import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLJSON } from 'graphql-scalars';

import { UserEntity } from '@/common/decorators/user.decorator';

import { GraphService } from '../_microsoftGraph/graph.service';

import { Token } from './models/token.model';
import { AzureAuthGuard } from './guards/azure-ad.guard';

@Resolver(() => Token)
export class AuthResolver {
  constructor(private readonly graphService: GraphService) {}

  @Query(() => GraphQLJSON, { name: 'me' })
  @UseGuards(AzureAuthGuard)
  async getInfoIdToken(@UserEntity() user: any) {
    return user;
  }

  @Query(() => GraphQLJSON, { name: 'meAD' })
  async getMeAD(
    @Args('accessToken') accessToken: string,
    @UserEntity() user: any,
  ) {
    return await this.graphService.getMeUser(accessToken);
  }

  @Query(() => GraphQLJSON, { name: 'meGroup' })
  async getMeGroups(
    @Args('accessToken') accessToken: string,
    @UserEntity() user: any,
  ) {
    return await this.graphService.getMeGroups(accessToken);
  }

  @Query(() => GraphQLJSON, { name: 'getSelfCalendars' })
  @UseGuards(AzureAuthGuard)
  async getSelfCalendars(@UserEntity() user: any) {
    return await this.graphService.getUserCalendars(user.oid);
  }
}
