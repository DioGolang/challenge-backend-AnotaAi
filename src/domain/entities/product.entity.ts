import { ProductProps } from '../interfaces/props/product-props.interfaces';
import { Price } from '../value-objects/price.vo';
import { Entity } from './entity';
import { DomainEvent } from '../events/domain-event';

interface propsUpdate {
  title?: string;
  description?: string;
  price?: Price;
  categoryId?: string;
}

export class Product extends Entity {
  private readonly _props: ProductProps;
  private domainsEvents: DomainEvent[] = [];

  constructor(id: string, props: ProductProps) {
    super(id);
    this._props = props;
  }

  updateDetails(props: Partial<propsUpdate>) {
    if (props.title) this._props.title = props.title;
    if (props.description) this._props.description = props.description;
    if (props.price) this._props.price = props.price;
    if (props.categoryId) this._props.categoryId = props.categoryId;
  }

  public addDomainEvent(event: DomainEvent): void {
    this.domainsEvents.push(event);
  }

  public getDomainEvents(): DomainEvent[] {
    return this.domainsEvents;
  }
}
