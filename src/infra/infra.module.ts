import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { MongodbConfigModule } from './persistence/database/mongodb/mongodb-config.module';

@Module({
  imports: [ServicesModule, MongodbConfigModule]
})
export class InfraModule {}
