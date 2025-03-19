import { ProductBuilder } from 'src/domain/build/product.builder';
import { ProductFactory } from './product.factory.interface';
import { ProductData } from './data/product.data';
import { Product } from '../../entities/product.entity';

export class ProductFactoryImpl implements ProductFactory {
  constructor(private readonly productBuilder: ProductBuilder) {}

  create(): ProductBuilder {
    return this.productBuilder;
  }

  async configureBuilder(data: ProductData): Promise<ProductBuilder> {
    return this.productBuilder
      .setId(data.id)
      .setTitle(data.title)
      .setDescription(data.description)
      .setPrice(data.price)
      .setOwnerId(data.ownerId)
      .setCategoryId(data.categoryId);
  }

  async createProduct(data: ProductData): Promise<Product> {
    const productBuilder = await this.configureBuilder(data);
    return productBuilder.build();
  }
}
