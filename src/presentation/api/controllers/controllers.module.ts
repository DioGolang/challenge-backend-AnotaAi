import { Module } from '@nestjs/common';
import { ProductControllerModule } from './product/product.controller.module';
import { CategoryControllerModule } from './category/category.controller.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [ProductControllerModule, CategoryControllerModule, CatalogModule],
})
export class ControllersModule {}
