import { Entity } from './entity';
import { CategoryProps } from '../interfaces/props/category-props.interface';

interface propsUpdate {
  title?: string;
  description?: string;
}

export class Category extends Entity {
  constructor(
    id: string,
    public readonly _props: CategoryProps,
  ) {
    super(id);
  }

  updateDetails(props: Partial<propsUpdate>): void {
    if (props.title) this._props.title = props.title;
    if (props.description) this._props.description = props.description;
  }
}
