import { ConfigService } from '@nestjs/config';
import { SQSClientConfig } from '@aws-sdk/client-sqs';

export const sqsConfig = async (
  configService: ConfigService,
): Promise<SQSClientConfig> => ({
  region: configService.get<string>('SQS_REGION'),
  credentials: {
    accessKeyId: configService.get<string>('SQS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get<string>('SQS_SECRET_ACCESS_KEY'),
  },
});
