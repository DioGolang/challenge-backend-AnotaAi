import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbConfig } from '../../../config/mongodb.config';
import { Category, CategorySchema } from '../../mongodb/schema/category.schema';
import { Product, ProductSchema } from '../../mongodb/schema/product.schema';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return mongodbConfig(configService);
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
})
export class MongodbConfigModule {}
