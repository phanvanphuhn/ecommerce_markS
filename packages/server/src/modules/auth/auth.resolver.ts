import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
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
    const result = await this.graphService.getMeUser(accessToken);
    Logger.log(result);
    return result;
  }

  @Query(() => GraphQLJSON, { name: 'meGroup' })
  async getMeGroups(
    @Args('accessToken') accessToken: string,
    @UserEntity() user: any,
  ) {
    const result = await this.graphService.getMeGroups(accessToken);
    Logger.log(result);
    return result;
  }

  @Query(() => GraphQLJSON, { name: 'getSelfCalendars' })
  @UseGuards(AzureAuthGuard)
  async getSelfCalendars(@UserEntity() user: any) {
    return await this.graphService.getUserCalendars(user.oid);
  }
}
