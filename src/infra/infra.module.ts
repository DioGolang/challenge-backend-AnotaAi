import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { MongodbConfigModule } from './persistence/database/mongodb/mongodb-config.module';
import { RepositoriesModule } from './persistence/mongodb/repositories/repositories.module';

@Module({
  imports: [ServicesModule, MongodbConfigModule, RepositoriesModule]
})
export class InfraModule {}
