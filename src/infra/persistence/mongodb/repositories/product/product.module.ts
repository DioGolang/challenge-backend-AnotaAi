import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepositoryImpl } from './product.repository.impl';
import { Product, ProductSchema } from '../../schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
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
