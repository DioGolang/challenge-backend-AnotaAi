import { Test, TestingModule } from '@nestjs/testing';
import { CatalogUpdateConsumerService } from './catalog-update-consumer.service';

describe('CatalogUpdateConsumerService', () => {
  let service: CatalogUpdateConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogUpdateConsumerService],
    }).compile();

    service = module.get<CatalogUpdateConsumerService>(CatalogUpdateConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
