import 'isomorphic-fetch';
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import {
  TokenCredentialAuthenticationProvider,
  TokenCredentialAuthenticationProviderOptions,
} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { Injectable } from '@nestjs/common';

import { azureConfig } from '../auth/strategies/azure-ad.strategy';

import { AzureDirectoryUser } from './dto/azure-directory-user.dto';

@Injectable()
export class GraphService {
  private client: Client;

  constructor() {
    const tokenCredential = new ClientSecretCredential(
      azureConfig.credentials.tenantID,
      azureConfig.credentials.clientID,
      azureConfig.credentials.clientSecret,
    );

    const options: TokenCredentialAuthenticationProviderOptions = {
      scopes: azureConfig.exposedScopes,
    };

    const authProvider = new TokenCredentialAuthenticationProvider(
      tokenCredential,
      options,
    );

    this.client = Client.initWithMiddleware({
      debugLogging: true,
      authProvider: authProvider,
    });
  }

  async getUser(userId: string): Promise<AzureDirectoryUser> {
    try {
      const user = await this.client.api(`/users/${userId}`).get();
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);

      throw error;
    }
  }

  async getUserCalendars(userId: string) {
    try {
      const calendar = await this.client
        .api(`/users/${userId}/calendars`)
        .get();
      return calendar;
    } catch (error) {
      console.error('Error fetching user calendar:', error);

      throw error;
    }
  }
}
