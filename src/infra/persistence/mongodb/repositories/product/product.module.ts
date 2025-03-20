import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../../schema/category.schema';
import { ProductRepositoryImpl } from './product.repository.impl';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryImpl,
    },
  ],
  exports: ['ProductRepository'],
})
export class ProductModule {}
