import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { CatalogJsonGeneratorService } from './catalog-json-generator.service';

@Module({
  providers: [S3Service, CatalogJsonGeneratorService],
  imports: [],
})
export class S3Module {}
