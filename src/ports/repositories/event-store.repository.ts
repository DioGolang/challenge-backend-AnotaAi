export interface EventStoreRepository {
  saveEvent(event: string): Promise<void>;
  getEventsByAggregateId(aggregateId: string): Promise<string[]>;
  getAllEvents(): Promise<string[]>;
  deleteEventById(eventId: string): Promise<void>;
  updateEvent(eventId: string, event: string): Promise<void>;
  getEventsByType(eventType: string): Promise<string[]>;
  getEventsByDateRange(startDate: Date, endDate: Date): Promise<string[]>;
}
