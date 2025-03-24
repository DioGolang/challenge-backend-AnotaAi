import { Injectable } from '@nestjs/common';
import { ApiLogger } from '../../../api-logger/api-logger.service';

@Injectable()
export class CatalogJsonGeneratorService {
  constructor(private apiLogger: ApiLogger) {
    this.apiLogger.setContext('CatalogJsonGeneratorService');
  }

  async generateCatalogJson() {
    this.apiLogger.log('Generating catalog JSON');
  }
}
