import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { PresentationModule } from './presentation/presentation.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './aplication/category/category.module';

@Module({
  imports: [
    ApplicationModule,
    DomainModule,
    InfraModule,
    PresentationModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
