import { CategoryRepository } from '../../../../../ports/repositories/category.repository';
import { Model } from 'mongoose';
import { Category } from '../../schema/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Category as CategoryEntity } from 'src/domain/entities/category.entity';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async save(category: CategoryEntity): Promise<void> {
    await new this.categoryModel(category).save();
  }

  async updateByTitle(title: string, update: CategoryEntity): Promise<void> {
    await this.categoryModel.updateOne({ title: title }, update).exec();
  }

  async updateById(id: string, update: CategoryEntity): Promise<void> {
    await this.categoryModel.updateOne({ _id: id }, update).exec();
  }

  async findByOwnerId(ownerId: string): Promise<Category[]> {
    return await this.categoryModel.find({ ownerId }).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.categoryModel.deleteOne({ _id: id }).exec();
  }

  async deleteByTitle(title: string): Promise<void> {
    await this.categoryModel.deleteOne({ title: title }).exec();
  }
}
