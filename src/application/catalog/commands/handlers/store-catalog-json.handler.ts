import { CommandHandler } from '@nestjs/cqrs';
import { storeCatalogJsonCommand } from '../store-catalog-json.command';
import { CategoryNotFoundException } from '../../../../domain/exceptions/category-not-found.exception';
import { Inject } from '@nestjs/common';
import { S3 } from '../../../../ports/storage/s3.interface';

@CommandHandler(storeCatalogJsonCommand)
export class StoreCatalogJsonHandler {
  constructor(
    @Inject('S3')
    private readonly awsS3Service: S3,
  ) {}

  async execute(command: storeCatalogJsonCommand): Promise<void> {
    const { ownerId } = command;

    // Fetch the catalog from the database
    //const catalog = await this.catalogRepository.findByOwnerId(ownerId);

    // if (!catalog) {
    //   throw new CategoryNotFoundException();
    // }

    // Generate JSON from the catalog
    //const catalogJson = JSON.stringify(catalog);

    // Store the JSON in AWS S3
    // await this.awsS3Service.uploadFile(`${ownerId}/catalog.json`, catalogJson);
  }
}
