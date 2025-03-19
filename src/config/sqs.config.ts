import { ConfigService } from '@nestjs/config';
import { SQSClientConfig } from '@aws-sdk/client-sqs';

export const sqsConfig = async (
  configService: ConfigService,
): Promise<SQSClientConfig> => ({
  region: configService.get<string>('AWS_REGION_SQS'),
  credentials: {
    accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
  },
});
