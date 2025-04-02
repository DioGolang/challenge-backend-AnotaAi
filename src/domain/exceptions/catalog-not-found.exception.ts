import { NotFoundException } from '@nestjs/common';

export class CatalogNotFoundException extends NotFoundException {
  constructor(catalogId: string) {
    super(`Catalog with ID "${catalogId}" was not found.`);
  }
}
