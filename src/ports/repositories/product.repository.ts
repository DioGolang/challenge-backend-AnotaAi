import { Product } from '../../domain/entities/product.entity';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findByOwnerId(ownerId: string): Promise<Product[]>;
}
