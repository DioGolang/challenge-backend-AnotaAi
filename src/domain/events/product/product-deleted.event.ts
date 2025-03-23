import { DomainEvent } from '../domain-event';

export class ProductDeletedEvent implements DomainEvent {
  public readonly occurredAt: Date = new Date();

  constructor(
    public readonly productId: string,
    public readonly ownerId: string,
  ) {}
}
