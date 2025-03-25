import { Module } from '@nestjs/common';
import { commands } from './commands/handlers';
import { queries } from './queries/handlers';

@Module({
  imports: [],
  controllers: [],
  providers: [...commands, ...queries],
  exports: [...commands, ...queries],
})
export class ProductModule {}
