import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { MongodbConfigModule } from './persistence/database/mongodb/mongodb-config.module';
import { ApiLoggerModule } from './api-logger/api-logger.module';
import { DatabaseModule } from './persistence/database/database.module';
import { ConsumersModule } from './consumers/consumers.module';
import { RepositoriesModule } from './persistence/postgres/repositories/repositories.module';

@Module({
  imports: [
    ServicesModule,
    MongodbConfigModule,
    RepositoriesModule,
    ApiLoggerModule,
    DatabaseModule,
    ConsumersModule,
  ],
})
export class InfraModule {}
