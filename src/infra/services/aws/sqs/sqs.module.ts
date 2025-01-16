import { Module } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { SQSClient } from '@aws-sdk/client-sqs';
import { sqsConfig } from '../../../../config/sqs.config';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    SqsService,
    {
      provide: SQSClient,
      useFactory: async (configService: ConfigService) => {
        return new SQSClient(sqsConfig(configService));
      },
    },
  ],
})
export class SqsModule {}
