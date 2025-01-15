import { Product } from '../../domain/entities/product.entity';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findByOwnerId(ownerId: string): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  deleteById(id: string): Promise<void>;
}
