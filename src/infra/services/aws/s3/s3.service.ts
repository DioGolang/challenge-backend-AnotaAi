import { Injectable, Logger } from '@nestjs/common';
import { S3 } from '../../../../ports/storage/s3.interface';
import { ConfigService } from '@nestjs/config';
import {
  GetObjectCommand,
  GetObjectCommandInput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { s3Config } from '../../../../config/s3.config';
import { S3UpdateErrorException } from '../../../../domain/exceptions/s3-update-error.exception';

interface Product {
  title: string;
  description: string;
  price: { amount: number; currency: string };
}

interface Category {
  category_title: string;
  category_description: string;
  items: Product[];
}

interface Catalog {
  ownerId: string;
  catalog: Category[];
}

@Injectable()
export class S3Service implements S3 {
  private client: S3Client;
  private readonly bucketName: string;
  private readonly logger = new Logger(S3Service.name);

  constructor(private readonly configService: ConfigService) {
    const s3BucketName = this.configService.get<string>('S3_BUCKET_NAME');
    if (!s3BucketName) {
      throw new Error('S3_BUCKET_NAME is not defined');
    }
    this.bucketName = s3BucketName;
    this.client = new S3Client(s3Config(configService));
  }

  async uploadCatalog(
    ownerId: string,
    data: Record<string, any>,
  ): Promise<void> {
    try {
      const key = `catalogs/${ownerId}.json`;
      const params = {
        Bucket: this.bucketName,
        Key: key,
        Body: JSON.stringify(data),
        ContentType: 'application/json',
      };
      await this.client.send(new PutObjectCommand(params));
      this.logger.log(`Catalog uploaded to s3://${this.bucketName}/${key}`);
    } catch (error) {
      this.logger.error('Error uploading catalog', error);
      throw new S3UpdateErrorException('Error uploading catalog');
    }
  }

  async downloadCatalog(ownerId: string): Promise<Catalog> {
    try {
      const key = `catalogs/${ownerId}.json`;
      const params = {
        Bucket: this.bucketName,
        Key: key,
      };
      const decodedString = await this.getObjectBody(params);
      return JSON.parse(decodedString);
    } catch (error) {
      this.logger.error('Error downloading catalog', error);
      throw new S3UpdateErrorException('Error downloading catalog');
    }
  }

  async getCatalogUrl(ownerId: string): Promise<{ url: string }> {
    return {
      url: `https://${this.bucketName}.s3.amazonaws.com/catalogs/${ownerId}.json`,
    };
  }

  private async getObjectBody(params: GetObjectCommandInput): Promise<string> {
    const { Body } = await this.client.send(new GetObjectCommand(params));

    if (Body && Body instanceof ReadableStream) {
      const reader = Body.getReader();
      const decoder = new TextDecoder();
      const chunks: Uint8Array[] = [];

      let done = false;
      while (!done) {
        const { value, done: isDone } = await reader.read();
        done = isDone;
        if (value) chunks.push(value);
      }
      return decoder.decode(Uint8Array.from(chunks.flat()));
    } else {
      throw new S3UpdateErrorException('Failed to read file content');
    }
  }
}
