import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';

@Module({
  providers: [S3Service],
  imports: [],
})
export class S3Module {}
