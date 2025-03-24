import { Inject, Injectable } from '@nestjs/common';
import { ApiLogger } from '../../../api-logger/api-logger.service';
import { CategoryRepository } from '../../../../ports/repositories/category.repository';
import { ProductRepository } from '../../../../ports/repositories/product.repository';

@Injectable()
export class CatalogJsonGeneratorService {
  constructor(
    @Inject('ProductRepository')
    private readonly productModel: ProductRepository,
    @Inject('CategoryRepository')
    private readonly categoryModel: CategoryRepository,
    private apiLogger: ApiLogger,
  ) {
    this.apiLogger.setContext('CatalogJsonGeneratorService');
  }

  async generateCatalogJson(ownerId: string) {
    this.apiLogger.log('Generating catalog.json');
    const categories = await this.categoryModel.findByOwnerId(ownerId);
    const products = await this.productModel.findByOwnerId(ownerId);

    const catalog = {
      ownerId: ownerId,
      catalog: categories.map((category) => ({
        category_title: category.title,
        category_description: category.description,
        items: products
          .filter((product) => product.category.title === category.title)
          .map((product) => ({
            title: product.title,
            description: product.description,
            price: {
              amount: product.price.amount,
              currency: product.price.currency,
            },
          })),
      })),
    };
    return JSON.stringify(catalog);
  }
}
