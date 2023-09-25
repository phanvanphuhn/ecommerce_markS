import { Parent, ResolveField, Resolver } from "@nestjs/graphql";

import { Account } from "@generated/nestgraphql/account/account.model";

@Resolver(() => Account)
export class AccountResolver {
  @ResolveField("contact")
  async contact(@Parent() account: Account) {
    return account.contact;
  }
}
