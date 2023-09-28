import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { BearerStrategy } from "passport-azure-ad";

const config = {
  credentials: {
    tenantID: process.env.AZURE_TENANT_ID || "",
    clientID: process.env.AZURE_CLIENT_ID || "",
    audience: process.env.AZURE_CLIENT_ID || "",
  },
  metadata: {
    authority: "login.microsoftonline.com",
    discovery: ".well-known/openid-configuration",
    version: "v2.0",
  },
  settings: {
    validateIssuer: true,
    passReqToCallback: false,
    loggingLevel: "info",
  },
  exposedScopes: ["Files.Read"],
};

@Injectable()
export class AzureAdStrategy extends PassportStrategy(
  BearerStrategy,
  "azure-ad"
) {
  constructor() {
    super({
      identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
      issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
      clientID: config.credentials.clientID,
      audience: config.credentials.audience,
      validateIssuer: config.settings.validateIssuer,
      passReqToCallback: config.settings.passReqToCallback,
      loggingLevel: config.settings.loggingLevel,
      scope: config.exposedScopes,
      loggingNoPII: false,
    });
  }

  async validate(profile: any): Promise<any> {
    // Implement user validation and extraction of necessary user information from profile
    // Example: Extract and store user details in a session
    return profile;
  }
}
