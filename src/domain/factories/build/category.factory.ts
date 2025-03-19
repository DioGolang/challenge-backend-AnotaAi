import { CategoryFactory } from './category.factory.interface';
import { CategoryBuilder } from '../../build/category.builder';
import { CategoryData } from './data/category.data';
import { Category } from '../../entities/category.entity';

export class CategoryFactoryImpl implements CategoryFactory {
  constructor(private readonly categoryBuilder: CategoryBuilder) {}

  create(): CategoryBuilder {
    return this.categoryBuilder;
  }

  async configureBuilder(data: CategoryData): Promise<CategoryBuilder> {
    return this.categoryBuilder
      .setId(data.id)
      .setTitle(data.title)
      .setDescription(data.description)
      .setOwnerId(data.ownerId);
  }

  async createCategory(data: CategoryData): Promise<Category> {
    const categoryBuilder = await this.configureBuilder(data);
    return categoryBuilder.build();
  }
}
