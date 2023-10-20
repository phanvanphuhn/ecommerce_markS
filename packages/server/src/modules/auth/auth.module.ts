import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { AzureAdStrategy } from './strategies/azure-ad.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'azure-ad' })],
  providers: [AuthResolver, AzureAdStrategy],
  controllers: [],
  exports: [],
})
export class AuthModule {}
