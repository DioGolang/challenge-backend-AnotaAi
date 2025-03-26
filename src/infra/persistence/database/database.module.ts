import { Module } from '@nestjs/common';
import { TypeormConfigModule } from './typeorm/typeorm-config.module';

@Module({
  imports: [TypeormConfigModule],
})
export class DatabaseModule {}
