import { BuildFactory } from './build.factory';
import { CategoryBuilder } from '../../build/category.builder';
import { CategoryData } from './data/category.data';
import { Category } from '../../entities/category.entity';

export interface CategoryFactory
  extends BuildFactory<CategoryBuilder, CategoryData> {
  createCategory(categoryData: CategoryData): Promise<Category>;
}
