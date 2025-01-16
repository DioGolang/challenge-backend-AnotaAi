import { NotFoundException } from '@nestjs/common';

export class ProductNotFoundException extends NotFoundException {
  constructor(productId: string) {
    super(`Product with ID "${productId}" was not found.`);
  }
}