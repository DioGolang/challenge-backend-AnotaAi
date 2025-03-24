import { Category as CategoryEntity } from '../../domain/entities/category.entity';
import { Category } from '../../infra/persistence/mongodb/schema/category.schema';

export interface CategoryRepository {
  save(category: CategoryEntity): Promise<void>;
  updateByTitle(title: string, update: CategoryEntity): Promise<void>;
  updateById(title: string, update: CategoryEntity): Promise<void>;
  findByOwnerId(ownerId: string): Promise<Category[]>;
  deleteById(id: string): Promise<void>;
  deleteByTitle(id: string): Promise<void>;
}
