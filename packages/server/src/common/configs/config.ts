import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
    secretsFilePath:
      process.env.SECRETS_FILE_PATH ||
      '/usr/src/app/rds/rds-creds/jarvis-mark-credentials',
  },
  s3: {
    bucket: process.env.S3_BUCKET_NAME || 'jarvis-mark-dev',
  },
  globalConfig: {
    deployEnv: process.env.DEPLOY_ENV || 'local',
  },
};

export default (): Config => config;
