import { Test, TestingModule } from '@nestjs/testing';
import { ApiLoggerService } from './api-logger.service';

describe('ApiLoggerService', () => {
  let service: ApiLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiLoggerService],
    }).compile();

    service = module.get<ApiLoggerService>(ApiLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
