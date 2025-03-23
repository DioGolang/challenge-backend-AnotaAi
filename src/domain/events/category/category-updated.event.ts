import { DomainEvent } from '../domain-event';

export class CategoryUpdatedEvent implements DomainEvent {
  public readonly occurredAt: Date = new Date();

  constructor(
    public readonly categoryId: string,
    public readonly ownerId: string,
    public readonly title?: string,
    public readonly description?: string,
  ) {}
}
