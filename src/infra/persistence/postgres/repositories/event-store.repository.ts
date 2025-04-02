import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventStoreEntity } from '../entities/event-store.entity';
import { Repository } from 'typeorm';
import { EventStoreRepository } from '../../../../ports/repositories/event-store.repository';

@Injectable()
export class EventStoreRepositoryImpl implements EventStoreRepository {
  constructor(
    @InjectRepository(EventStoreEntity)
    private readonly eventStoreRepository: Repository<EventStoreEntity>,
  ) {}

  saveEvent(event: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getEventsByAggregateId(aggregateId: string): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  getAllEvents(): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  deleteEventById(eventId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateEvent(eventId: string, event: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getEventsByType(eventType: string): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  getEventsByDateRange(startDate: Date, endDate: Date): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
}
