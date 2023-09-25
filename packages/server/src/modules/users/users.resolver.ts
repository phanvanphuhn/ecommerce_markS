import { UseGuards } from "@nestjs/common";
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
  Info,
} from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";
import { PrismaSelect } from "@paljs/plugins";

import { UserEntity } from "../../common/decorators/user.decorator";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

import { ChangePasswordInput } from "./dto/change-password.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UsersService } from "./users.service";

import { User } from "@generated/nestgraphql/user/user.model";
import { FindManyUserArgs } from "@generated/nestgraphql/user/find-many-user.args";

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  // Temp, will be removed
  @Query(() => [User])
  async users(@Args() filter: FindManyUserArgs, @Info() info) {
    return this.usersService.findMany({
      ...filter,
      ...new PrismaSelect(info).value,
    });
  }

  // @ResolveField("territory")
  // async territory(@Parent() user: User) {
  //   return user.territory;
  // }
}
