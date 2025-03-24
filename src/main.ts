import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiLogger } from './infra/api-logger/api-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(new ApiLogger());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
