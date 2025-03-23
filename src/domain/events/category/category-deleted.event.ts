import { DomainEvent } from '../domain-event';

export class CategoryDeletedEvent implements DomainEvent {
  public readonly occurredAt: Date = new Date();
  constructor(
    public readonly categoryId: string,
    public readonly ownerId: string,
  ) {}
}
