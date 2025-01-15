import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbConfig } from '../../../config/mongodb.config';

@Global()
@Module({
  imports: [MongooseModule.forRoot(mongodbConfig.uri)],
})
export class MongodbConfigModule {}
