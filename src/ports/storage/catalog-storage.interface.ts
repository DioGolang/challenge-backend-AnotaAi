export interface CatalogStorage {
  generateCatalogJson(ownerId: string): Promise<string>;
}