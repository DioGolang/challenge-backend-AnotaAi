import { CategoryRepository } from '../../../../../ports/repositories/category.repository';
import { Model } from 'mongoose';
import { Category } from '../../schema/category.schema';
import { Category as CategoryEntity } from 'src/domain/entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  findByOwnerId(ownerId: string): Promise<CategoryEntity[]> {
    throw new Error('Method not implemented.');
  }
}
