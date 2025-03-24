import { Module } from '@nestjs/common';
import { S3Module } from './s3/s3.module';
import { SqsModule } from './sqs/sqs.module';

@Module({
  imports: [S3Module, SqsModule],
})
export class AwsModule {}
