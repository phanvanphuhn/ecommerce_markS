import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { GqlAuthGuard } from "./guards/gql-auth.guard";
import { PasswordService } from "./password.service";
import { AzureAdStrategy } from "./strategies/azure-ad.strategy";
import { AuthController } from "./auth.controller";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "azure-ad" })],
  providers: [AuthResolver, AzureAdStrategy],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
