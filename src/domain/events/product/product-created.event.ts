import { DomainEvent } from '../domain-event';
import { Price } from '../../value-objects/price.vo';

export class ProductCreatedEvent implements DomainEvent {
  public readonly occurredAt: Date = new Date();

  constructor(
    public readonly productId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly price: Price,
    public readonly ownerId: string,
    public readonly categoryId: string,
  ) {}
}
