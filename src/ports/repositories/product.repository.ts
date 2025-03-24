import { Product } from '../../infra/persistence/mongodb/schema/product.schema';
import { Product as ProductEntity } from '../../domain/entities/product.entity';

export interface ProductRepository {
  save(product: ProductEntity): Promise<void>;
  updateById(id: string, product: ProductEntity): Promise<void>;
  updateByTitle(title: string, product: ProductEntity): Promise<void>;
  findByOwnerId(ownerId: string): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByTitle(id: string): Promise<Product | null>;
  deleteById(id: string): Promise<void>;
  deleteByTitle(title: string): Promise<void>;
}
