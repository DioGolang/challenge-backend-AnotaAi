import { BuildFactory } from './build.factory';
import { ProductBuilder } from '../../build/product.builder';
import { ProductData } from './data/product.data';
import { Product } from '../../entities/product.entity';

export interface ProductFactory
  extends BuildFactory<ProductBuilder, ProductData> {
  createProduct(productData: ProductData): Promise<Product>;
}
