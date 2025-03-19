import { Injectable } from '@nestjs/common';
import { EntityBuilder } from './entity.builder';
import { Category } from '../entities/category.entity';
import { CategoryProps } from '../interfaces/props/category-props.interface';

@Injectable()
export class CategoryBuilder extends EntityBuilder<Category> {
  private _props: Partial<CategoryProps> = {};

  setTitle(title: string): this {
    this._props.title = title;
    return this;
  }

  setDescription(description: string): this {
    this._props.description = description;
    return this;
  }

  setOwnerId(ownerId: string): this {
    this._props.ownerId = ownerId;
    return this;
  }

  async build(): Promise<Category> {
    return new Category(this._id, this._props as CategoryProps);
  }

  protected validateRequiredProperties(): void {
    throw new Error('Method not implemented.');
  }
  protected addRelationshipsToEntities(entity: Category): void {
    throw new Error('Method not implemented.');
  }
}
