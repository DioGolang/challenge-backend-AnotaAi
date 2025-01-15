import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbConfig } from '../../../config/mongodb.config';
import { Category, CategorySchema } from '../../mongodb/schema/category.schema';
import { Product, ProductSchema } from '../../mongodb/schema/product.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(mongodbConfig.uri),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
})
export class MongodbConfigModule {}
