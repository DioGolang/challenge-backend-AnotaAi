import { Category } from '../../domain/entities/category.entity';

export interface CategoryRepository {
  findByOwnerId(ownerId: string): Promise<Category[]>;
}
