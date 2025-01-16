import { NotFoundException } from '@nestjs/common';

export class CategoryNotFoundException extends NotFoundException {
  constructor(categoryId: string) {
    super(`Category with ID "${categoryId}" was not found.`);
  }
}
