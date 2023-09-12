import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Parent, Mutation, Args } from "@nestjs/graphql";
import { PrismaService } from "nestjs-prisma";

import { UserEntity } from "../../common/decorators/user.decorator";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

import { ChangePasswordInput } from "./dto/change-password.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UsersService } from "./users.service";

import { User } from "@generated/nestgraphql/user/user.model";
import { FindManyUserArgs } from "@generated/nestgraphql/user/find-many-user.args";

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  // Temp, will be removed
  @Query(() => [User])
  async users(@Args() filter: FindManyUserArgs) {
    return this.prisma.user.findMany(filter);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args("data") newUserData: UpdateUserInput
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args("data") changePassword: ChangePasswordInput
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword
    );
  }
}
