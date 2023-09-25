import { Module } from "@nestjs/common";

import { AccountModule } from "../account/account.module";

import { TerritoryResolver } from "./territory.resolver";
import { TerritoryService } from "./territory.service";

@Module({
  imports: [AccountModule],
  providers: [TerritoryService, TerritoryResolver],
})
export class TerritoryModule {}
