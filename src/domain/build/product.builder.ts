import { EntityBuilder } from './entity.builder';
import { Product } from '../entities/product.entity';
import { ProductProps } from '../interfaces/props/product-props.interfaces';
import { Price } from '../value-objects/price.vo';

export class ProductBuilder extends EntityBuilder<Product> {
  private _props: Partial<ProductProps> = {};

  setTitle(title: string): this {
    this._props.title = title;
    return this;
  }

  setDescription(description: string): this {
    this._props.description = description;
    return this;
  }

  setPrice(price: Price): this {
    this._props.price = price;
    return this;
  }

  setOwnerId(ownerId: string): this {
    this._props.ownerId = ownerId;
    return this;
  }

  setCategoryId(categoryId: string): this {
    this._props.categoryId = categoryId;
    return this;
  }

  async build(): Promise<Product> {
    return new Product(this._id, this._props as ProductProps);
  }

  protected validateRequiredProperties(): void {
    throw new Error('Method not implemented.');
  }
  protected addRelationshipsToEntities(entity: Product): void {
    throw new Error('Method not implemented.');
  }
}
