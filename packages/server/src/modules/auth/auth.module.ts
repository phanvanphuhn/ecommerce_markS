import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { GraphService } from '../_microsoftGraph/graph.service';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { AzureAdStrategy } from './strategies/azure-ad.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'azure-ad' })],
  providers: [AuthResolver, AzureAdStrategy, GraphService],
  controllers: [],
  exports: [],
})
export class AuthModule {}
