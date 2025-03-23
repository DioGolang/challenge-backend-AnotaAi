export interface S3 {
  uploadCatalog(ownerId: string, data: Record<string, any>): Promise<void>;
  downloadCatalog(ownerId: string): Promise<Record<string, any>>;
  getCatalogUrl(ownerId: string): Promise<{ url: string }>;
}
