import { Module } from "@nestjs/common";

import { ContactSearchResolver } from "./contact-search.resolver";
import { ContactSearchService } from "./contach-search.service";

@Module({
  imports: [],
  providers: [ContactSearchResolver, ContactSearchService],
  exports: [],
})
export class ContactSearchModule {}
