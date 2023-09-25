import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from "@nestjs/graphql";

import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";
import { SignupInput } from "./dto/signup.input";
import { Auth } from "./models/auth.model";
import { Token } from "./models/token.model";

import { User } from "@generated/nestgraphql/user/user.model";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}
}
