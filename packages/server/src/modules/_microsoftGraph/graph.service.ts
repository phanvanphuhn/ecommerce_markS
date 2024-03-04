import 'isomorphic-fetch';

import { AccessToken, ClientSecretCredential } from '@azure/identity';
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

  getClientWithAccessToken = (accessToken: string) => {
    return Client.initWithMiddleware({
      debugLogging: true,
      authProvider: new TokenCredentialAuthenticationProvider(
        {
          getToken: async () => {
            return {
              token: accessToken,
            } as AccessToken;
          },
        },
        {
          scopes: azureConfig.exposedScopes,
        },
      ),
    });
  };

  async getMeUser(accessToken: string): Promise<AzureDirectoryUser> {
    try {
      const newClient = this.getClientWithAccessToken(accessToken);

      const user = await newClient.api('/me').get();
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);

      throw error;
    }
  }

  async getMeGroups(accessToken: string): Promise<AzureDirectoryUser> {
    try {
      const newClient = this.getClientWithAccessToken(accessToken);
      const url = '/me/transitiveMemberOf/microsoft.graph.group?';

      const groupResult = await newClient
        .api(url)
        .select('id,displayName')
        .get();

      let nextUrlTempHolder = groupResult?.['@odata.nextLink'];

      while (nextUrlTempHolder) {
        const nextLink = groupResult?.['@odata.nextLink'];
        if (!nextLink) {
          nextUrlTempHolder = null;
          break;
        }

        const nextUser = await newClient.api(nextLink).get();
        groupResult.value = [...groupResult.value, ...nextUser.value];
        
        if (!nextUser?.['@odata.nextLink']) {
          nextUrlTempHolder = null;
          break;
        }
        nextUrlTempHolder = nextUser['@odata.nextLink'];
        delete groupResult['@odata.nextLink'];
      }

      return groupResult;
    } catch (error) {
      console.error('Error fetching user:', error);

      throw error;
    }
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
