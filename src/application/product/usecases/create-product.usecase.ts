import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../ports/repositories/product.repository';
import { CategoryRepository } from '../../../ports/repositories/category.repository';
import { ProductProps } from '../../../domain/interfaces/props/product-props.interfaces';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(product: ProductProps) {

  }
}
