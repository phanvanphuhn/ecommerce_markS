import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

export const azureConfig = {
  credentials: {
    tenantID: process.env.AZURE_TENANT_ID || '',
    clientID: process.env.AZURE_CLIENT_ID || '',
    audience: process.env.AZURE_CLIENT_ID || '',
    clientSecret: process.env.AZURE_CLIENT_SECRET || '',
  },
  metadata: {
    authority: 'login.microsoftonline.com',
    discovery: '.well-known/openid-configuration',
    version: 'v2.0',
  },
  settings: {
    validateIssuer: false,
    passReqToCallback: false,
    loggingLevel: 'info',
  },
  exposedScopes: ['https://graph.microsoft.com/.default'],
};

@Injectable()
export class AzureAdStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      // identityMetadata: `https://${azureConfig.metadata.authority}/9188040d-6c67-4c5b-b112-36a304b66dad/${azureConfig.metadata.version}/${azureConfig.metadata.discovery}`,
      // issuer: `https://${azureConfig.metadata.authority}/9188040d-6c67-4c5b-b112-36a304b66dad/${azureConfig.metadata.version}`,
      identityMetadata: `https://${azureConfig.metadata.authority}/${azureConfig.credentials.tenantID}/${azureConfig.metadata.version}/${azureConfig.metadata.discovery}`,
      issuer: `https://${azureConfig.metadata.authority}/${azureConfig.credentials.tenantID}/${azureConfig.metadata.version}`,
      clientID: azureConfig.credentials.clientID,
      audience: azureConfig.credentials.audience,
      validateIssuer: azureConfig.settings.validateIssuer,
      passReqToCallback: azureConfig.settings.passReqToCallback,
      loggingLevel: azureConfig.settings.loggingLevel,
      // scope: azureConfig.exposedScopes,
      loggingNoPII: false,
      clientSecret: azureConfig.credentials.clientSecret,
    });
  }

  async validate(profile: any): Promise<any> {
    // Implement user validation and extraction of necessary user information from profile
    // Example: Extract and store user details in a session
    return profile;
  }
}
