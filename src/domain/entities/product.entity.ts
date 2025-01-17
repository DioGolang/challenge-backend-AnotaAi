import { ProductProps } from '../interfaces/props/product-props.interfaces';
import { Price } from '../value-objects/price.vo';
import { Entity } from './entity';

interface propsUpdate {
  title?: string;
  description?: string;
  price?: Price;
  category?: string;
}

export class Product extends Entity {
  private readonly _props: ProductProps;
  constructor(id: string, props: ProductProps) {
    super(id);
    this._props = props;
  }

  updateDetails(props: Partial<propsUpdate>) {
    if (props.title) this._props.title = props.title;
    if (props.description) this._props.description = props.description;
    if (props.price) this._props.price = props.price;
    if (props.category) this._props.categoryId = props.category;
  }
}
