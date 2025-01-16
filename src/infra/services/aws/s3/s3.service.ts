import { Injectable } from '@nestjs/common';
import { S3 } from '../../../../ports/services/s3.interface';
import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import { s3Config } from '../../../../config/s3.config';

@Injectable()
export class S3Service implements S3 {
  private client: S3Client;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    const s3BucketName = this.configService.get<string>('S3_BUCKET_NAME');
    if (!s3BucketName) {
      throw new Error('S3_BUCKET_NAME is not defined');
    }
    this.bucketName = s3BucketName;
    this.client = new S3Client(s3Config(configService));
  }

  async uploadFile(key: string, data: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  downloadFile(key: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async getFileUrl(key: string) {
    return { url: `https://${this.bucketName}.s3.amazonaws.com/${key}` };
  }
}
