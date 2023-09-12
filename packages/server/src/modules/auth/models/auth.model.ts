import { ObjectType } from "@nestjs/graphql";

import { Token } from "./token.model";

import { User } from "@generated/nestgraphql/user/user.model";

@ObjectType()
export class Auth extends Token {
  user: User;
}
