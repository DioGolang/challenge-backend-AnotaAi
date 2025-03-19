import { Module } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { SQSClient } from '@aws-sdk/client-sqs';
import { sqsConfig } from '../../../../config/sqs.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    SqsService,
    {
      provide: SQSClient,
      useFactory: async (configService: ConfigService) => {
        return new SQSClient(await sqsConfig(configService));
      },
      inject: [ConfigService],
    },
  ],
})
export class SqsModule {}
