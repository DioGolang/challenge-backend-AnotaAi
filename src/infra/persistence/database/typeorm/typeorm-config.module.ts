import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../../../../config/type-orm.config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        await typeormConfig(configService),
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [],
})
export class TypeormConfigModule {}
