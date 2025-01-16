import { S3ClientConfig } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

export const s3Config = async (
  configService: ConfigService,
): Promise<S3ClientConfig> => ({
  region: configService.get<string>('S3_REGION'),
  credentials: {
    accessKeyId: configService.get<string>('S3_ACCESS_KEY_ID'),
    secretAccessKey: configService.get<string>('S3_SECRET_ACCESS_KEY'),
  },
  forcePathStyle: true,
});
