import { DomainEvent } from './domain-event';

export class CatalogUpdatedEvent implements DomainEvent {
  public readonly occurredAt: Date = new Date();

  constructor(public readonly ownerId: string) {}
}
