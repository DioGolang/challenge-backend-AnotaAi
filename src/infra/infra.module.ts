import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { MongodbConfigModule } from './persistence/database/mongodb/mongodb-config.module';
import { RepositoriesModule } from './persistence/mongodb/repositories/repositories.module';
import { ApiLoggerModule } from './api-logger/api-logger.module';

@Module({
  imports: [ServicesModule, MongodbConfigModule, RepositoriesModule, ApiLoggerModule],
})
export class InfraModule {}
