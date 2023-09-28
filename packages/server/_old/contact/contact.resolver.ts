import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";

import { ContactService } from "./contact.service";
import { ContactByTerritoryInput } from "./dto/contact-by-territory.input";

import { Contact } from "@generated/nestgraphql/contact/contact.model";
import { FindManyContactArgs } from "@generated/nestgraphql/contact/find-many-contact.args";

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private contactService: ContactService) {}

  @Query(() => [Contact])
  async contacts(@Args() filter: FindManyContactArgs, @Info() info) {
    return this.contactService.findMany({
      ...filter,
      ...new PrismaSelect(info).value,
    });
  }
}
