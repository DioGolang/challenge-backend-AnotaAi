import { Module } from '@nestjs/common';
import { CatalogUpdateConsumerService } from './catalog-update-consumer.service';

@Module({
  providers: [CatalogUpdateConsumerService]
})
export class ConsumersModule {}
