import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { CatalogJsonGeneratorService } from './catalog-json-generator.service';
import { ApiLoggerModule } from '../../../api-logger/api-logger.module';

@Module({
  imports: [ApiLoggerModule],
  providers: [S3Service, CatalogJsonGeneratorService],
})
export class S3Module {}
