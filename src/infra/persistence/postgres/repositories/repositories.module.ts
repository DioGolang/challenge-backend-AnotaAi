import { Module } from '@nestjs/common';
import { EventStoreRepositoryImpl } from './event-store.repository';
import { EventStoreEntity } from '../entities/event-store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EventStoreEntity])],
  providers: [
    {
      provide: 'EventStoreRepository',
      useClass: EventStoreRepositoryImpl,
    },
  ],
  exports: ['EventStoreRepository'],
})
export class RepositoriesModule {}
