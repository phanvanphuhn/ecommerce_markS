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
import { PrismaSelect } from "@paljs/plugins";

import { AccountService } from "../account/account.service";

import { TerritoryService } from "./territory.service";

import { Territory } from "@generated/nestgraphql/territory/territory.model";
import { Account } from "@generated/nestgraphql/account/account.model";
import { FindManyTerritoryArgs } from "@generated/nestgraphql/territory/find-many-territory.args";

@Resolver(() => Territory)
export class TerritoryResolver {
  constructor(
    private accountService: AccountService,
    private territoryService: TerritoryService
  ) {}

  @Query(() => [Territory])
  async territories(@Args() filter: FindManyTerritoryArgs, @Info() info) {
    return this.territoryService.findMany({
      ...filter,
      ...new PrismaSelect(info).value,
    });
  }

  @ResolveField("account", () => [Account])
  async accounts(@Parent() territory: Territory, @Info() info) {
    return territory.account;
  }
}
