import { ArgsType, Field, InputType } from "@nestjs/graphql";

import { FindManyContactArgs } from "@generated/nestgraphql/contact/find-many-contact.args";
import { Territory } from "@generated/nestgraphql/territory/territory.model";
import { ContactWhereInput } from "@generated/nestgraphql/contact/contact-where.input";

@InputType()
class ContactWhereExtension extends ContactWhereInput {
  @Field(() => String, { nullable: true })
  territoryId?: string;
}

@ArgsType()
export class ContactByTerritoryInput extends FindManyContactArgs {
  @Field(() => ContactWhereExtension, { nullable: true })
  where?: ContactWhereExtension;
}
