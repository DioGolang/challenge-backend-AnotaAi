import { BuildFactory } from './build.factory';
import { CategoryBuilder } from '../../build/category.builder';

export interface CategoryFactory extends BuildFactory<CategoryBuilder> {
  configureBuilder(): void;
}
