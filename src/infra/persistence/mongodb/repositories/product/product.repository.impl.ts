import { ProductRepository } from '../../../../../ports/repositories/product.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../schema/product.schema';
import { Product as ProductEntity } from 'src/domain/entities/product.entity';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async save(product: ProductEntity): Promise<void> {
    await new this.productModel(product).save();
  }
  async findByOwnerId(ownerId: string): Promise<ProductEntity[]> {
    throw new Error('Method not implemented.');
    // return await this.productModel.findOne({ ownerId }).exec();
  }

  findById(id: string): Promise<ProductEntity | null> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
