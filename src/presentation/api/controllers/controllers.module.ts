import { Module } from '@nestjs/common';
import { ProductControllerModule } from './product/product.controller.module';
import { CategoryControllerModule } from './category/category.controller.module';

@Module({
  imports: [ProductControllerModule, CategoryControllerModule],
})
export class ControllersModule {}
