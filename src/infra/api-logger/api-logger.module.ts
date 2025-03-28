import { Module } from '@nestjs/common';
import { ApiLogger } from './api-logger.service';

@Module({
  providers: [ApiLogger],
  exports: [ApiLogger],
})
export class ApiLoggerModule {}
