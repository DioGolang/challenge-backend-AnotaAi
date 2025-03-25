import { ProductRepository } from '../../../../../ports/repositories/product.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product as ProductEntity } from '../../../../../domain/entities/product.entity';
import { Product } from '../../schema/product.schema';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async save(product: ProductEntity): Promise<void> {
    await new this.productModel(product).save();
  }

  async updateById(id: string, product: ProductEntity): Promise<void> {
    await this.productModel.updateOne({ _id: id }, product).exec();
  }

  async updateByTitle(title: string, product: ProductEntity): Promise<void> {
    await this.productModel.updateOne({ title: title }, product).exec();
  }

  async findByOwnerId(ownerId: string): Promise<Product[]> {
    return await this.productModel.find({ ownerId }).exec();
  }

  async findByOwnerWithCategory(ownerId: string): Promise<Product[]> {
    return await this.productModel
      .find({ ownerId: ownerId })
      .populate('categoryId')
      .exec();
  }

  async findById(id: string): Promise<Product | null> {
    return await this.productModel.findOne({ _id: id }).exec();
  }

  async findByTitle(title: string): Promise<Product> {
    return await this.productModel.findOne({ title: title }).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  }

  async deleteByTitle(title: string): Promise<void> {
    await this.productModel.deleteOne({ title: title }).exec();
  }
}
