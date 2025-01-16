import { Injectable } from '@nestjs/common';
import { S3 } from '../../../../ports/services/s3.interface';
import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service implements S3 {
  private client: S3Client;
  private bucketName = this.configService.get('S3_BUCKET_NAME');

  constructor(private readonly configService: ConfigService) {
    const s3_region = this.configService.get('S3_REGION');
    if (!s3_region) {
      throw new ReferenceError('Environment variable S3_REGION is required');
    }
    this.client = new S3Client({
      region: s3_region,
      credentials: {
        accessKeyId: this.configService.get('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY'),
      },
      forcePathStyle: true,
    });
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
