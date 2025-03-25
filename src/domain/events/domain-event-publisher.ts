export class DomainEventPublisher {
  public readonly occurredAt: Date = new Date();

  constructor(public readonly ownerId: string) {}
}
