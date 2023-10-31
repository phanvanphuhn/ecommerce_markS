import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Query,
  Context,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLJSON } from 'graphql-scalars';

import { UserEntity } from '@/common/decorators/user.decorator';

import { GraphService } from '../_microsoftGraph/graph.service';

import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';
import { AzureAuthGuard } from './guards/azure-ad.guard';

@Resolver(() => Token)
export class AuthResolver {
  constructor(private readonly graphService: GraphService) {}

  @Query(() => GraphQLJSON, { name: 'me' })
  @UseGuards(AzureAuthGuard)
  async login(@UserEntity() user: any) {
    const test1 = await this.graphService.getUser(user.oid);
    const test2 = await this.graphService.getUserCalendars(user.oid);
    return user;
  }
}
