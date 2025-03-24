import { Test, TestingModule } from '@nestjs/testing';
import { CatalogJsonGeneratorService } from './catalog-json-generator.service';

describe('CatalogJsonGeneratorService', () => {
  let service: CatalogJsonGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogJsonGeneratorService],
    }).compile();

    service = module.get<CatalogJsonGeneratorService>(CatalogJsonGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
