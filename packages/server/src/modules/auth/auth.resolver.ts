import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Query,
} from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { GraphQLJSON } from "graphql-scalars";

import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";
import { SignupInput } from "./dto/signup.input";
import { Token } from "./models/token.model";
import { AzureAuthGuard } from "./guards/azure-ad.guard";

@Resolver(() => Token)
export class AuthResolver {
  @Query(() => String, { name: "login" })
  @UseGuards(AzureAuthGuard)
  async login(@Args("data") data: LoginInput) {
    const test = data;
    return "hi";
  }
}
