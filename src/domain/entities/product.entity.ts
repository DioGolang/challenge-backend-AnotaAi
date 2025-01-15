import { ProductProps } from '../interfaces/props/product-props.interfaces';
import { Price } from '../value-objects/price.vo';
import { CategoryId } from '../value-objects/category-id.vo';

interface propsUpdate {
  title?: string;
  description?: string;
  price?: Price;
  category?: CategoryId;
}

export class Product {
  private readonly _id: string;
  private readonly _props: ProductProps;
  constructor(id: string, props: ProductProps) {
    this._id = id;
    this._props = props;
  }

  update(props: Partial<propsUpdate>) {
    if (props.title) this._props.title = props.title;
    if (props.description) this._props.description = props.description;
    if (props.price) this._props.price = props.price;
    if (props.category) this._props.categoryId = props.category;
  }

  get id(): string {
    return this._id;
  }
}
