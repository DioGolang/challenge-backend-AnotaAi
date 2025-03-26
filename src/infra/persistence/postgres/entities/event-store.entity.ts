import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_store' })
export class EventStoreEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  aggregateId: string;

  @Column()
  aggregate_type: string;

  @Column()
  aggregate_version: number;

  @Column()
  event_type: string;

  @Column({ type: 'jsonb' })
  payload: Record<string, any>;

  @Column({ type: 'timestamp' })
  created_at: Date;
}
