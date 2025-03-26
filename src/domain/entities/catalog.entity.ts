import { Aggregate } from './aggregate';
import { CatalogUpdatedEvent } from '../events/catalog-updated.event';
import { ValidationError } from '../exceptions/validation-error';

export class Catalog extends Aggregate {
  private productsIds: string[] = [];
  private categoryIds: string[] = [];

  constructor(
    public readonly _id: string,
    public readonly ownerId: string,
  ) {
    super();
  }

  public addProduct(productId: string): void {
    this.addItem(
      this.productsIds,
      productId,
      'Product already added to catalog',
    );
  }

  public addCategory(categoryId: string): void {
    this.addItem(
      this.categoryIds,
      categoryId,
      'Category already added to catalog',
    );
  }

  private addItem(ids: string[], id: string, errorMessage: string): void {
    if (ids.includes(id)) {
      throw new ValidationError(errorMessage);
    }

    ids.push(id);
    this.addDomainEvent(new CatalogUpdatedEvent(this.ownerId));
  }

  get id(): string {
    return this._id;
  }
}
