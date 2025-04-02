import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { CatalogJsonGeneratorService } from './catalog-json-generator.service';
import { ApiLoggerModule } from '../../../api-logger/api-logger.module';
import { CategoryModule } from '../../../persistence/mongodb/repositories/category/category.module';
import { ProductModule } from '../../../persistence/mongodb/repositories/product/product.module';

@Module({
  imports: [ApiLoggerModule, CategoryModule, ProductModule],
  providers: [
    {
      provide: 'S3',
      useClass: S3Service,
    },
    CatalogJsonGeneratorService,
  ],
  exports: ['S3', CatalogJsonGeneratorService],
})
export class S3Module {}
